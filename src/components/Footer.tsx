import { Shield, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-card mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg gradient-navy flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">ملجئك — Maljaak</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              منصة إنسانية لمساعدة المجتمعات العربية في إيجاد الملاجئ القريبة بسرعة وأمان.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">روابط سريعة</h3>
            <div className="space-y-2">
              <Link to="/regions" className="block text-sm text-muted-foreground hover:text-secondary transition-colors">تصفح المناطق</Link>
              <Link to="/search" className="block text-sm text-muted-foreground hover:text-secondary transition-colors">البحث عن ملجأ</Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-secondary transition-colors">عن المنصة</Link>
              <Link to="/privacy" className="block text-sm text-muted-foreground hover:text-secondary transition-colors">سياسة الخصوصية</Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">تنويه قانوني</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              المعلومات مقدمة من المجتمع ويجب اتباع تعليمات الجهات الرسمية. هذه المنصة لا تغني عن التوجيهات الرسمية.
            </p>
          </div>
        </div>

        <div className="border-t mt-6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ملجئك — Maljaak. جميع الحقوق محفوظة.
          </p>
          <Link to="/donate" className="flex items-center gap-1 text-xs text-secondary hover:underline">
            <Heart className="w-3 h-3" />
            ادعم المشروع
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
