import { FilterSidebar } from "./FilterSidebar";
import { JobCard, Job } from "./JobCard";
import { SearchBar } from "./SearchBar";

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
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Filter Sidebar */}
      <FilterSidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-auto p-8">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Job Board</h1>
            <p className="mt-2 text-muted-foreground">
              Explore job opportunities that match your skills and experience. Use the filters to find the perfect job for you.
            </p>
          </div>

          {/* Search */}
          <div className="mb-6">
            <SearchBar />
          </div>

          {/* Results count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium text-foreground">{sampleJobs.length}</span> jobs
            </p>
            <select className="rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Most recent</option>
              <option>Most relevant</option>
              <option>Salary: High to Low</option>
              <option>Salary: Low to High</option>
            </select>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {sampleJobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
