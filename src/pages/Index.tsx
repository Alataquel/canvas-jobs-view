import { Navbar } from "@/components/Navbar";
import { JobBoard } from "@/components/JobBoard";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <JobBoard />
    </div>
  );
};

export default Index;
