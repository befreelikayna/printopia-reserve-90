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

export function PrintingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [file, setFile] = useState<File | null>(null);

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
      <Card>
        <CardHeader>
          <CardTitle>New Print Request</CardTitle>
          <CardDescription>
            Fill out the details for your 3D printing project
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="file">Upload 3D Model (STL, OBJ, or FBX)</Label>
            <Input
              id="file"
              type="file"
              accept=".stl,.obj,.fbx"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              required
            />
          </div>

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
                <SelectItem value="resin">Resin</SelectItem>
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
                <SelectItem value="ultra">Ultra (0.05mm)</SelectItem>
              </SelectContent>
            </Select>
          </div>

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