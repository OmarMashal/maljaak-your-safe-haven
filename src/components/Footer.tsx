import { Shield, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-card/50 mt-auto">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-navy flex items-center justify-center shadow-md shadow-primary/15">
                <Shield className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-foreground text-lg">ملجئك</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              منصة إنسانية لمساعدة المجتمعات العربية في إيجاد الملاجئ القريبة بسرعة وأمان.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-foreground mb-4">روابط سريعة</h3>
            <div className="space-y-2.5">
              {[
                { to: "/regions", label: "تصفح المناطق" },
                { to: "/search", label: "البحث عن ملجأ" },
                { to: "/about", label: "عن المنصة" },
                { to: "/privacy", label: "سياسة الخصوصية" },
              ].map(link => (
                <Link key={link.to} to={link.to} className="block text-sm text-muted-foreground hover:text-secondary transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-foreground mb-4">تنويه قانوني</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              المعلومات مقدمة من المجتمع ويجب اتباع تعليمات الجهات الرسمية. هذه المنصة لا تغني عن التوجيهات الرسمية.
            </p>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} ملجئك — Maljaak
          </p>
          <Link to="/donate" className="flex items-center gap-1.5 text-xs text-secondary hover:underline underline-offset-4 font-medium">
            <Heart className="w-3 h-3" />
            ادعم المشروع
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
