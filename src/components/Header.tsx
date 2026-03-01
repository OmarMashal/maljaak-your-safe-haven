import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", label: "الرئيسية" },
    { to: "/regions", label: "المناطق" },
    { to: "/search", label: "البحث" },
    { to: "/about", label: "عن المنصة" },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? "glass-strong shadow-lg shadow-primary/5 border-b" : "glass border-b border-transparent"
    }`}>
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl gradient-navy flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md shadow-primary/20">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-display font-bold text-foreground leading-tight tracking-tight">ملجئك</h1>
            <p className="text-[10px] text-muted-foreground leading-tight tracking-wider">MALJAAK</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                location.pathname === link.to
                  ? "bg-secondary/15 text-secondary font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/donate">
            <Button size="sm" className="mr-3 gap-1.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md shadow-secondary/20 transition-all duration-200 hover:shadow-lg hover:shadow-secondary/30">
              <Heart className="w-3.5 h-3.5" />
              ادعم المشروع
            </Button>
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2.5 rounded-xl hover:bg-muted/60 transition-colors"
          aria-label="القائمة"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden border-t bg-card/95 backdrop-blur-xl p-4 space-y-1 animate-fade-in">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                location.pathname === link.to
                  ? "bg-secondary/15 text-secondary font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/donate" onClick={() => setMenuOpen(false)}>
            <Button size="sm" className="w-full mt-2 gap-1.5 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Heart className="w-3.5 h-3.5" />
              ادعم المشروع
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
