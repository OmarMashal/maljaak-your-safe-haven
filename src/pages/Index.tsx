import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyButton from "@/components/EmergencyButton";
import RegionCard from "@/components/RegionCard";
import { regions } from "@/data/mockData";
import { motion } from "framer-motion";
import { Shield, Users, MapPin, ArrowDown, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden gradient-navy-rich geometric-pattern">
        {/* Decorative blobs */}
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-secondary/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-info/6 blur-[100px]" />

        <div className="container relative py-20 md:py-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 border border-primary-foreground/10 text-primary-foreground/80 text-xs font-medium backdrop-blur-sm">
              <Shield className="w-3.5 h-3.5 text-secondary" />
              منصة إنسانية للطوارئ
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-5xl md:text-7xl font-display font-900 text-primary-foreground mb-3 tracking-tight"
          >
            ملجئك
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-primary-foreground/60 text-lg md:text-2xl mb-12 max-w-lg font-light leading-relaxed"
          >
            ابحث عن أقرب ملجأ بضغطة زر واحدة
          </motion.p>

          <EmergencyButton />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-10 flex flex-col items-center gap-2"
          >
            <p className="text-primary-foreground/40 text-xs">
              سيتم طلب إذن الموقع لتحديد أقرب ملجأ
            </p>
            <ArrowDown className="w-4 h-4 text-primary-foreground/20 animate-bounce mt-2" />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-6 z-10">
        <div className="container">
          <div className="bg-card rounded-2xl border shadow-xl shadow-primary/5 p-6 md:p-8">
            <div className="grid grid-cols-3 gap-6 text-center">
              {[
                { icon: MapPin, value: "89+", label: "ملجأ مسجل", color: "text-secondary" },
                { icon: Shield, value: "74", label: "ملجأ موثق", color: "text-info" },
                { icon: Users, value: "29", label: "مدينة وقرية", color: "text-warning" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.12, duration: 0.5 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className={`w-11 h-11 rounded-xl bg-muted/60 flex items-center justify-center`}>
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <span className="text-3xl md:text-4xl font-display font-bold text-foreground">{stat.value}</span>
                  <span className="text-xs text-muted-foreground font-medium">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="container py-14">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">تصفح حسب المنطقة</h2>
            <p className="text-sm text-muted-foreground mt-1">اختر منطقتك للعثور على الملاجئ القريبة</p>
          </div>
          <Link to="/regions" className="hidden md:flex items-center gap-1 text-sm text-secondary font-medium hover:underline underline-offset-4">
            عرض الكل
            <ChevronLeft className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {regions.map((region, i) => (
            <RegionCard key={region.id} region={region} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted/50">
        <div className="container py-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-2xl gradient-navy mx-auto mb-5 flex items-center justify-center shadow-lg shadow-primary/15">
              <MapPin className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-2">هل تعرف ملجأ غير مسجل؟</h2>
            <p className="text-muted-foreground mb-6 text-sm max-w-sm mx-auto">ساعد مجتمعك بإضافة موقع ملجأ جديد ليستفيد منه الجميع</p>
            <a
              href="/submit"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl gradient-navy text-primary-foreground font-semibold hover:opacity-90 transition-all duration-200 shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/20"
            >
              <MapPin className="w-4 h-4" />
              أضف ملجأ
            </a>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-warning/8 border-t border-warning/15">
        <div className="container py-3 text-center">
          <p className="text-xs text-muted-foreground">
            ⚠️ المعلومات مقدمة من المجتمع ويجب اتباع تعليمات الجهات الرسمية
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
