import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface FilterSection {
  title: string;
  options: { id: string; label: string; count?: number }[];
}

const filterSections: FilterSection[] = [
  {
    title: "Location",
    options: [
      { id: "us", label: "United States", count: 24 },
      { id: "uk", label: "United Kingdom", count: 18 },
      { id: "de", label: "Germany", count: 12 },
      { id: "fr", label: "France", count: 9 },
      { id: "es", label: "Spain", count: 7 },
      { id: "it", label: "Italy", count: 5 },
      { id: "ch", label: "Switzerland", count: 8 },
      { id: "sg", label: "Singapore", count: 6 },
      { id: "ae", label: "United Arab Emirates", count: 4 },
      { id: "ca", label: "Canada", count: 11 },
    ],
  },
  {
    title: "Experience Level",
    options: [
      { id: "internship", label: "Internship", count: 32 },
      { id: "entry", label: "Entry Level", count: 28 },
      { id: "mid", label: "Mid Level", count: 15 },
      { id: "senior", label: "Senior", count: 8 },
    ],
  },
  {
    title: "Job Type",
    options: [
      { id: "fulltime", label: "Full-time", count: 45 },
      { id: "parttime", label: "Part-time", count: 12 },
      { id: "contract", label: "Contract", count: 8 },
      { id: "remote", label: "Remote", count: 23 },
    ],
  },
];

export function FilterSidebar() {
  return (
    <aside className="w-[280px] shrink-0 border-r border-border bg-card p-6">
      <div className="space-y-8">
        {filterSections.map((section) => (
          <div key={section.title} className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">{section.title}</h3>
            <div className="space-y-3">
              {section.options.map((option) => (
                <div key={option.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox 
                      id={option.id} 
                      className="h-4 w-4 rounded border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <Label 
                      htmlFor={option.id} 
                      className="cursor-pointer text-sm font-normal text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {option.label}
                    </Label>
                  </div>
                  {option.count && (
                    <span className="text-xs text-muted-foreground">{option.count}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
