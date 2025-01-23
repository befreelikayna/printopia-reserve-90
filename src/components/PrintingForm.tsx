import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Upload, Loader2 } from "lucide-react";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";

export function PrintingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [printType, setPrintType] = useState("fdm");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Request submitted successfully! We'll contact you soon.");
    setIsSubmitting(false);
    setFile(null);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl md:text-2xl">New Print Request</CardTitle>
          <CardDescription>
            Fill out the details for your 3D printing project
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 md:space-y-6">
          <div className="space-y-2">
            <Label>Printing Technology</Label>
            <RadioGroup
              defaultValue="fdm"
              onValueChange={(value) => setPrintType(value)}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent">
                <RadioGroupItem value="fdm" id="fdm" />
                <Label htmlFor="fdm" className="flex-1 cursor-pointer">
                  FDM (Fused Deposition Modeling)
                </Label>
              </div>
              <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-accent">
                <RadioGroupItem value="sla" id="sla" />
                <Label htmlFor="sla" className="flex-1 cursor-pointer">
                  SLA (Stereolithography)
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="file">Upload 3D Model (STL, OBJ, or FBX)</Label>
            <Input
              id="file"
              type="file"
              accept=".stl,.obj,.fbx"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              required
              className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
            />
          </div>

          {printType === "fdm" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="material">Material</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select material" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pla">PLA</SelectItem>
                    <SelectItem value="abs">ABS</SelectItem>
                    <SelectItem value="petg">PETG</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="quality">Print Quality</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select quality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft (0.3mm)</SelectItem>
                    <SelectItem value="standard">Standard (0.2mm)</SelectItem>
                    <SelectItem value="high">High (0.1mm)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="resin-type">Resin Type</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select resin type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard Resin</SelectItem>
                    <SelectItem value="tough">Tough Resin</SelectItem>
                    <SelectItem value="clear">Clear Resin</SelectItem>
                    <SelectItem value="dental">Dental Resin</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="layer-height">Layer Height</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select layer height" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100">100 microns</SelectItem>
                    <SelectItem value="50">50 microns</SelectItem>
                    <SelectItem value="25">25 microns</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="instructions">Special Instructions</Label>
            <Textarea
              id="instructions"
              placeholder="Any specific requirements or notes..."
              className="min-h-[100px]"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Submit Request
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </form>
  );
}