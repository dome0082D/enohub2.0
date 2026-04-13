import { Link, useLocation } from "@tanstack/react-router";
import { Wine, Menu, X, User, LogIn } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/enohub-logo.png";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/" as const, label: "Home" },
    { to: "/cantine" as const, label: "Cantine" },
    { to: "/sommelier" as const, label: "Sommelier" },
    { to: "/eventi" as const, label: "Eventi" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="EnoHub" className="h-10 w-10" />
          <span className="font-serif text-xl font-bold text-wine">EnoHub</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-wine"
              activeProps={{ className: "text-sm font-medium text-wine border-b-2 border-wine pb-1" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            <LogIn className="h-4 w-4" />
            Accedi
          </Link>
          <Link
            to="/registrazione"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-wine-light"
          >
            <User className="h-4 w-4" />
            Registrati
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden rounded-md p-2 text-foreground hover:bg-accent"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t bg-card px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2" />
            <Link
              to="/login"
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-accent"
              onClick={() => setMenuOpen(false)}
            >
              Accedi
            </Link>
            <Link
              to="/registrazione"
              className="rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
              onClick={() => setMenuOpen(false)}
            >
              Registrati
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
