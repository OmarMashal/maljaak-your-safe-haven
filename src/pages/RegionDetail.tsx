import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getRegionBySlug, getCitiesByRegion } from "@/data/mockData";
import { ChevronLeft, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const RegionDetail = () => {
  const { slug } = useParams();
  const region = getRegionBySlug(slug || "");
  const cities = region ? getCitiesByRegion(region.id) : [];

  if (!region) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container py-16 text-center flex-1">
          <h1 className="text-2xl font-bold text-foreground">المنطقة غير موجودة</h1>
          <Link to="/regions" className="text-secondary hover:underline mt-4 inline-block">العودة للمناطق</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container py-8 flex-1">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/regions" className="hover:text-secondary transition-colors">المناطق</Link>
          <ChevronLeft className="w-4 h-4" />
          <span className="text-foreground font-medium">{region.name_ar}</span>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center text-3xl">
            {region.icon}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{region.name_ar}</h1>
            <p className="text-muted-foreground text-sm">{cities.length} مدن • {region.shelterCount} ملجأ</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {cities.map((city, i) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/city/${city.slug}`}
                className="flex items-center justify-between bg-card border rounded-xl p-4 hover:border-secondary/40 hover:shadow-md transition-all group"
              >
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
                    {city.name_ar}
                  </h3>
                  <span className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {city.shelterCount} ملجأ
                  </span>
                </div>
                <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegionDetail;
