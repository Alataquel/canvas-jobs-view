import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search jobs by title, company, or keyword..."
        className="h-12 w-full rounded-xl border-border bg-card pl-12 pr-4 text-sm placeholder:text-muted-foreground focus-visible:ring-primary"
      />
    </div>
  );
}
