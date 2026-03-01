import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Users, Heart, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container py-8 flex-1 max-w-2xl">
        <h1 className="text-3xl font-bold text-foreground mb-6">عن منصة ملجئك</h1>

        <div className="space-y-6 text-foreground leading-relaxed">
          <p>
            <strong>ملجئك (Maljaak)</strong> هي منصة إنسانية تهدف لمساعدة المجتمعات العربية
            في إيجاد أقرب ملجأ بسرعة وأمان خلال حالات الطوارئ.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: MapPin, title: "تحديد الموقع", desc: "ابحث عن أقرب ملجأ بضغطة زر واحدة باستخدام GPS" },
              { icon: Users, title: "مبادرة مجتمعية", desc: "يمكن لأي شخص المساهمة بإضافة مواقع ملاجئ جديدة" },
              { icon: Shield, title: "موثوقية", desc: "يتم مراجعة جميع الملاجئ والتحقق منها قبل النشر" },
              { icon: Heart, title: "مجاني بالكامل", desc: "المنصة مجانية ومفتوحة للجميع بدون أي رسوم" },
            ].map(item => (
              <div key={item.title} className="bg-card border rounded-xl p-4">
                <item.icon className="w-6 h-6 text-secondary mb-2" />
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-muted rounded-xl p-5">
            <h2 className="text-lg font-bold mb-2">تنويه مهم</h2>
            <p className="text-sm text-muted-foreground">
              المعلومات المقدمة في هذه المنصة هي من مساهمات المجتمع ويجب دائماً اتباع
              تعليمات الجهات الرسمية والدفاع المدني. هذه المنصة لا تغني عن التوجيهات الرسمية
              في حالات الطوارئ.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
