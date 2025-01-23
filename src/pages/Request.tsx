import { PrintingForm } from "@/components/PrintingForm";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Request = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-6 md:py-12 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ChevronLeft className="mr-2" />
            Back
          </Button>
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Submit Your Print Request
          </h1>
        </div>
        <PrintingForm />
      </div>
    </div>
  );
};

export default Request;