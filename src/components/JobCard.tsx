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
      className="group relative rounded-xl border border-border bg-card p-5 job-card-shadow transition-all duration-300 hover:job-card-shadow-hover hover:border-primary/30 cursor-pointer flex flex-col h-full"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {job.isFeatured && (
        <div className="absolute -top-2 right-4">
          <Badge className="bg-status-featured border-0 text-xs font-medium px-2.5 py-0.5 text-foreground">
            Featured
          </Badge>
        </div>
      )}
      
      {/* Header with logo and actions */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div 
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-primary-foreground shadow-sm"
          style={{ backgroundColor: job.companyColor }}
        >
          {job.companyLogo}
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-1.5">
          <Button
            variant="outline"
            size="sm"
            onClick={handleSave}
            className={`h-8 w-8 p-0 transition-all duration-200 ${
              isSaved 
                ? "bg-primary/10 border-primary text-primary hover:bg-primary/20" 
                : "hover:border-primary/50 hover:text-primary"
            }`}
          >
            <Bookmark className={`h-3.5 w-3.5 ${isSaved ? "fill-primary" : ""}`} />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleAddToTracker}
            className={`h-8 w-8 p-0 transition-all duration-200 ${
              isTracked 
                ? "bg-status-new/10 border-status-new text-status-new hover:bg-status-new/20" 
                : "hover:border-primary/50 hover:text-primary"
            }`}
          >
            <Plus className={`h-3.5 w-3.5 ${isTracked ? "rotate-45" : ""} transition-transform`} />
          </Button>
        </div>
      </div>

      {/* Title and Company */}
      <div className="mb-3">
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base leading-tight line-clamp-2">
          {job.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{job.company}</p>
      </div>

      {/* Meta info */}
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground mb-3">
        <div className="flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5 text-primary/70" />
          <span className="truncate max-w-[120px]">{job.location}</span>
        </div>
        {job.salary && (
          <div className="flex items-center gap-1">
            <DollarSign className="h-3.5 w-3.5 text-primary/70" />
            <span>{job.salary}</span>
          </div>
        )}
        {job.level && (
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-primary/70" />
            <span>{job.level}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-4 flex-1">
        {job.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {job.tags.slice(0, 2).map((tag) => (
          <Badge 
            key={tag} 
            variant="secondary"
            className="bg-secondary text-secondary-foreground text-[10px] font-medium px-2 py-0.5 hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-border mt-auto">
        <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
          <Clock className="h-3 w-3" />
          <span>{job.postedAt}</span>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-7 gap-1 text-xs text-primary hover:bg-primary/10 px-2"
          onClick={(e) => e.stopPropagation()}
        >
          <span>View</span>
          <ExternalLink className="h-3 w-3" />
        </Button>
      </div>
    </article>
  );
}
