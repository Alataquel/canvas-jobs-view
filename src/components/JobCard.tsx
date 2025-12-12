import { MapPin, Clock, DollarSign, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  companyColor: string;
  location: string;
  salary?: string;
  level?: string;
  description: string;
  tags: string[];
  postedAt: string;
  isFeatured?: boolean;
}

interface JobCardProps {
  job: Job;
  index: number;
}

export function JobCard({ job, index }: JobCardProps) {
  return (
    <article 
      className="group relative rounded-xl border border-border bg-card p-6 job-card-shadow transition-all duration-300 hover:job-card-shadow-hover hover:border-primary/30 cursor-pointer"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {job.isFeatured && (
        <div className="absolute -top-2 right-4">
          <Badge className="bg-status-featured text-primary-foreground border-0 text-xs font-medium px-2 py-0.5">
            Featured
          </Badge>
        </div>
      )}
      
      <div className="flex gap-4">
        {/* Company Logo */}
        <div 
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-primary-foreground"
          style={{ backgroundColor: job.companyColor }}
        >
          {job.companyLogo}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {job.title}
              </h3>
              <p className="text-sm text-muted-foreground">{job.company}</p>
            </div>
          </div>

          {/* Meta info */}
          <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary/70" />
              <span>{job.location}</span>
            </div>
            {job.salary && (
              <div className="flex items-center gap-1.5">
                <DollarSign className="h-4 w-4 text-primary/70" />
                <span>{job.salary}</span>
              </div>
            )}
            {job.level && (
              <div className="flex items-center gap-1.5">
                <Star className="h-4 w-4 text-primary/70" />
                <span>{job.level}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
            {job.description}
          </p>

          {/* Tags and Posted date */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground text-xs font-medium px-2.5 py-1 hover:bg-secondary/80"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground shrink-0 ml-4">
              <Clock className="h-3.5 w-3.5" />
              <span>{job.postedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
