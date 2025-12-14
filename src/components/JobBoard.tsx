import { FilterSidebar } from "./FilterSidebar";
import { JobCard, Job } from "./JobCard";
import { SearchBar } from "./SearchBar";
import { Briefcase, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const sampleJobs: Job[] = [
  {
    id: "1",
    title: "Legal Intern",
    company: "Lonza",
    companyLogo: "LZ",
    companyColor: "#1e3a5f",
    location: "Basel, Switzerland",
    salary: "Competitive",
    level: "Internship",
    description: "Switzerland, Basel Today Lonza is a global leader in life sciences. We are more than 15,000 employees in more than 100 locations around the world. Join our legal team and gain valuable experience.",
    tags: ["Pharmaceutical Manufacturing", "Legal"],
    postedAt: "Posted yesterday",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Agent Commercial de Site (H/F) en alternance",
    company: "ISIFA PLUS VALUES CFA",
    companyLogo: "IPV",
    companyColor: "#f97316",
    location: "Levallois-Perret, France",
    level: "Stagiaire / Alternant",
    description: "Tu es lycéen / étudiant de niveau Bac et tu souhaites t'orienter vers une formation et un métier dans la logistique et le transport ? Rejoins l'école ISIFA pour une alternance enrichissante.",
    tags: ["Logistics", "Commercial"],
    postedAt: "Posted yesterday",
  },
  {
    id: "3",
    title: "Assistant de Direction (H/F) en alternance",
    company: "ISIFA PLUS VALUES CFA",
    companyLogo: "IPV",
    companyColor: "#f97316",
    location: "Morsang-sur-Orge, France",
    level: "Stagiaire / Alternant",
    description: "Rejoins notre équipe dynamique en tant qu'assistant de direction. Tu participeras aux réunions stratégiques et géreras les agendas des directeurs.",
    tags: ["Administration", "Management"],
    postedAt: "Posted 2 days ago",
  },
  {
    id: "4",
    title: "Software Engineering Intern",
    company: "Google",
    companyLogo: "G",
    companyColor: "#4285f4",
    location: "Mountain View, USA",
    salary: "$8,000/month",
    level: "Internship",
    description: "Join Google's engineering team to work on cutting-edge technology. You'll collaborate with world-class engineers on products used by billions of people worldwide.",
    tags: ["Technology", "Software Development"],
    postedAt: "Posted 3 days ago",
    isFeatured: true,
  },
  {
    id: "5",
    title: "Marketing Analyst",
    company: "McKinsey & Company",
    companyLogo: "M",
    companyColor: "#003c71",
    location: "London, United Kingdom",
    salary: "£45,000 - £55,000",
    level: "Entry Level",
    description: "Help our clients solve their most challenging problems. You'll work with diverse teams across industries to drive meaningful impact through data-driven insights.",
    tags: ["Consulting", "Analytics"],
    postedAt: "Posted 4 days ago",
  },
  {
    id: "6",
    title: "Finance Graduate Program",
    company: "Deutsche Bank",
    companyLogo: "DB",
    companyColor: "#0018a8",
    location: "Frankfurt, Germany",
    salary: "€52,000",
    level: "Entry Level",
    description: "Start your career in finance with our comprehensive graduate program. Rotate through different departments and find your passion in the world of banking.",
    tags: ["Banking", "Finance"],
    postedAt: "Posted 5 days ago",
  },
];

export function JobBoard() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;
  const totalJobs = 156;
  const jobsPerPage = 20;

  return (
    <div className="flex min-h-screen">
      {/* Filter Sidebar */}
      <FilterSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header with gradient */}
        <div className="bg-gradient-to-br from-primary/5 via-primary/3 to-transparent px-6 pt-6 pb-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">Job Board</h1>
          </div>
          
          {/* Stats */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <div className="h-2 w-2 rounded-full bg-status-new animate-pulse" />
              <span className="text-muted-foreground"><strong className="text-foreground">12</strong> new today</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span><strong className="text-foreground">156</strong> total opportunities</span>
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          {/* Search */}
          <div className="mb-4 -mt-2">
            <SearchBar />
          </div>

          {/* Results count */}
          <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-semibold text-foreground">{sampleJobs.length}</span> jobs
              </p>
              <select className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow">
                <option>Most recent</option>
                <option>Most relevant</option>
                <option>Salary: High to Low</option>
                <option>Salary: Low to High</option>
              </select>
            </div>

            {/* Job Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
              {sampleJobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
              <p className="text-sm text-muted-foreground">
                Showing <span className="font-medium text-foreground">1-{sampleJobs.length}</span> of{" "}
                <span className="font-medium text-foreground">{totalJobs}</span> jobs
              </p>
              
              <div className="flex items-center gap-1">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="h-8 px-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                
                {[1, 2, 3].map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className={`h-8 w-8 p-0 ${
                      currentPage === page 
                        ? "bg-primary text-primary-foreground" 
                        : ""
                    }`}
                  >
                    {page}
                  </Button>
                ))}
                
                <span className="text-muted-foreground px-1">...</span>
                
                <Button
                  variant={currentPage === totalPages ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(totalPages)}
                  className={`h-8 w-8 p-0 ${
                    currentPage === totalPages 
                      ? "bg-primary text-primary-foreground" 
                      : ""
                  }`}
                >
                  {totalPages}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="h-8 px-2"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}
