import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "الرئيسية" },
    { to: "/regions", label: "المناطق" },
    { to: "/search", label: "البحث" },
    { to: "/about", label: "عن المنصة" },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl gradient-navy flex items-center justify-center group-hover:scale-105 transition-transform">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground leading-tight">ملجئك</h1>
            <p className="text-[10px] text-muted-foreground leading-tight">Maljaak</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-secondary/10 text-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/donate">
            <Button variant="secondary" size="sm" className="mr-2 gap-1.5">
              <Heart className="w-4 h-4" />
              ادعم المشروع
            </Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          aria-label="القائمة"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t bg-card p-4 space-y-1 animate-fade-in">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "bg-secondary/10 text-secondary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/donate" onClick={() => setMenuOpen(false)}>
            <Button variant="secondary" size="sm" className="w-full mt-2 gap-1.5">
              <Heart className="w-4 h-4" />
              ادعم المشروع
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
