import { Button } from "@/components/ui/button";
import { ArrowRight, Printer3d } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20 pt-14">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Printer3d className="mx-auto h-16 w-16 text-primary mb-8" />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Professional 3D Printing Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Transform your 3D models into reality with our high-quality printing service. 
            Fast turnaround times and competitive pricing.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button 
              size="lg" 
              onClick={() => navigate("/request")}
              className="group"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}