import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const amounts = [10, 25, 50, 100];

const Donate = () => {
  const [selected, setSelected] = useState<number | null>(25);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container py-8 flex-1 max-w-lg">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full bg-secondary/10 mx-auto flex items-center justify-center mb-4">
            <Heart className="w-7 h-7 text-secondary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">ادعم المشروع</h1>
          <p className="text-muted-foreground">
            تبرعك يساعدنا في الحفاظ على المنصة وتطويرها لخدمة المجتمع
          </p>
        </div>

        <div className="bg-card border rounded-xl p-6">
          <h2 className="font-semibold text-foreground mb-4">اختر المبلغ</h2>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {amounts.map(amount => (
              <button
                key={amount}
                onClick={() => setSelected(amount)}
                className={`py-3 rounded-xl border-2 font-bold text-lg transition-all ${
                  selected === amount
                    ? "border-secondary bg-secondary/10 text-secondary"
                    : "border-border text-foreground hover:border-secondary/40"
                }`}
              >
                {amount} ₪
              </button>
            ))}
          </div>

          <Button variant="secondary" className="w-full h-12 text-base font-bold mt-4">
            تبرع الآن
          </Button>

          <p className="text-xs text-muted-foreground text-center mt-4">
            سيتم توجيهك لصفحة الدفع الآمنة
          </p>
        </div>

        <div className="bg-muted rounded-xl p-5 mt-6">
          <h3 className="font-semibold text-foreground mb-2">كيف نستخدم التبرعات؟</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• صيانة وتطوير المنصة</li>
            <li>• تكاليف الاستضافة والخوادم</li>
            <li>• التحقق الميداني من الملاجئ</li>
            <li>• تطوير تطبيق الهاتف</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Donate;
