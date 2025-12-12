import { Briefcase, FileText, GraduationCap, LayoutDashboard, MessageSquare, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Applications", icon: FileText },
  { label: "Resume & Cover Letter", icon: FileText },
  { label: "Career Coach", icon: MessageSquare },
  { label: "Job Board", icon: Briefcase, active: true },
  { label: "Profile", icon: User },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-border bg-card">
      <div className="flex h-full items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <GraduationCap className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold text-foreground">Student Portal</span>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? "secondary" : "ghost"}
              className={`px-4 text-sm font-medium ${
                item.active 
                  ? "bg-secondary text-foreground" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Button>
          ))}
        </nav>

        {/* User avatar */}
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm"
            className="h-9 w-9 rounded-full border-primary bg-primary/10 p-0 font-semibold text-primary hover:bg-primary/20"
          >
            ES
          </Button>
        </div>
      </div>
    </header>
  );
}
