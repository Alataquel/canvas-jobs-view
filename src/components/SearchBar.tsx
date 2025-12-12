import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SearchBar() {
  return (
    <div className="relative flex gap-2">
      <div className="relative flex-1">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search jobs by title, company, or keyword..."
          className="h-12 w-full rounded-xl border-border bg-card pl-12 pr-4 text-sm placeholder:text-muted-foreground focus-visible:ring-primary shadow-sm"
        />
      </div>
      <Button className="h-12 px-6 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm gap-2">
        <Search className="h-4 w-4" />
        Search
      </Button>
    </div>
  );
}
