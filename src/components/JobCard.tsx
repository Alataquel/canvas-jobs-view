import { MapPin, Clock, DollarSign, Star, Bookmark, Plus, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

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
  const [isSaved, setIsSaved] = useState(false);
  const [isTracked, setIsTracked] = useState(false);

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
    toast.success(isSaved ? "Removed from saved jobs" : "Job saved successfully!");
  };

  const handleAddToTracker = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsTracked(!isTracked);
    toast.success(isTracked ? "Removed from tracker" : "Added to application tracker!");
  };

  return (
    <article 
      className="group relative rounded-xl border border-border bg-card p-6 job-card-shadow transition-all duration-300 hover:job-card-shadow-hover hover:border-primary/30 cursor-pointer"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {job.isFeatured && (
        <div className="absolute -top-2 right-4">
          <Badge className="bg-status-featured border-0 text-xs font-medium px-2.5 py-0.5 text-foreground">
            Featured
          </Badge>
        </div>
      )}
      
      <div className="flex gap-4">
        {/* Company Logo */}
        <div 
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-primary-foreground shadow-sm"
          style={{ backgroundColor: job.companyColor }}
        >
          {job.companyLogo}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-lg">
                {job.title}
              </h3>
              <p className="text-sm text-muted-foreground">{job.company}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <Button
                variant="outline"
                size="sm"
                onClick={handleSave}
                className={`h-9 px-3 transition-all duration-200 ${
                  isSaved 
                    ? "bg-primary/10 border-primary text-primary hover:bg-primary/20" 
                    : "hover:border-primary/50 hover:text-primary"
                }`}
              >
                <Bookmark className={`h-4 w-4 ${isSaved ? "fill-primary" : ""}`} />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleAddToTracker}
                className={`h-9 gap-1.5 transition-all duration-200 ${
                  isTracked 
                    ? "bg-status-new/10 border-status-new text-status-new hover:bg-status-new/20" 
                    : "hover:border-primary/50 hover:text-primary"
                }`}
              >
                <Plus className={`h-4 w-4 ${isTracked ? "rotate-45" : ""} transition-transform`} />
                <span className="hidden sm:inline">{isTracked ? "Tracked" : "Track"}</span>
              </Button>
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
          <p className="mt-3 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {job.description}
          </p>

          {/* Tags and Posted date */}
          <div className="mt-4 flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground text-xs font-medium px-2.5 py-1 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-3 shrink-0 ml-4">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                <span>{job.postedAt}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 gap-1.5 text-xs text-primary hover:bg-primary/10"
                onClick={(e) => e.stopPropagation()}
              >
                <span>View</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
