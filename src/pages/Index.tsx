import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyButton from "@/components/EmergencyButton";
import RegionCard from "@/components/RegionCard";
import { regions } from "@/data/mockData";
import { motion } from "framer-motion";
import { Shield, Users, MapPin } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden gradient-navy">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-secondary/30 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
        </div>

        <div className="container relative py-16 md:py-24 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-2"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-medium">
              <Shield className="w-3 h-3" />
              منصة إنسانية للطوارئ
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4"
          >
            ملجئك
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary-foreground/70 text-lg md:text-xl mb-10 max-w-md"
          >
            ابحث عن أقرب ملجأ بضغطة زر واحدة
          </motion.p>

          <EmergencyButton />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-primary-foreground/50 text-xs mt-6"
          >
            سيتم طلب إذن الموقع لتحديد أقرب ملجأ
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b bg-card">
        <div className="container py-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { icon: MapPin, value: "89+", label: "ملجأ مسجل" },
              { icon: Shield, value: "74", label: "ملجأ موثق" },
              { icon: Users, value: "29", label: "مدينة وقرية" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex flex-col items-center gap-1"
              >
                <stat.icon className="w-5 h-5 text-secondary mb-1" />
                <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="container py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">تصفح حسب المنطقة</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {regions.map((region, i) => (
            <RegionCard key={region.id} region={region} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted">
        <div className="container py-10 text-center">
          <h2 className="text-xl font-bold text-foreground mb-2">هل تعرف ملجأ غير مسجل؟</h2>
          <p className="text-muted-foreground mb-4 text-sm">ساعد مجتمعك بإضافة موقع ملجأ جديد</p>
          <a
            href="/submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-navy text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            <MapPin className="w-4 h-4" />
            أضف ملجأ
          </a>
        </div>
      </section>

      {/* Disclaimer banner */}
      <div className="bg-warning/10 border-t border-warning/20">
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
