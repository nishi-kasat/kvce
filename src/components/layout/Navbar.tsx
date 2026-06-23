import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, GraduationCap } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";
import logo from "@/assets/kvce-official-logo.png.asset.json";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-soft py-2" : "bg-transparent py-4",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo.url} alt="KVCE logo" width={40} height={40} className="h-10 w-10 rounded-full bg-white p-0.5" />
          <span className="font-display text-base font-extrabold tracking-tight text-foreground sm:text-lg">
            Kasat Virtual College of Education
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-brand-dark"
              activeProps={{ className: "text-brand font-semibold" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden kasat-gradient text-white shadow-glow hover:opacity-95 sm:inline-flex">
            <Link to="/admissions">
              <GraduationCap className="size-4" /> Apply Now
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="font-display text-xl">Menu</SheetTitle>
              <div className="mt-6 flex flex-col gap-1">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground/80 hover:bg-secondary hover:text-brand-dark"
                    activeProps={{ className: "text-brand font-semibold" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                ))}
                <Button asChild className="mt-3 kasat-gradient text-white">
                  <Link to="/admissions" onClick={() => setOpen(false)}>
                    Apply Now
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
