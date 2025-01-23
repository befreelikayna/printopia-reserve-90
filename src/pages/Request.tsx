import { PrintingForm } from "@/components/PrintingForm";

const Request = () => {
  return (
    <div className="container mx-auto px-4 py-6 md:py-12 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Submit Your Print Request
        </h1>
        <PrintingForm />
      </div>
    </div>
  );
};

export default Request;