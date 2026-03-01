import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShelterCard from "@/components/ShelterCard";
import { getVerifiedShelters, cities } from "@/data/mockData";
import { Navigation, MapPin } from "lucide-react";
import { motion } from "framer-motion";

function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

const NearestShelter = () => {
  const [searchParams] = useSearchParams();
  const lat = parseFloat(searchParams.get("lat") || "0");
  const lng = parseFloat(searchParams.get("lng") || "0");

  const verified = getVerifiedShelters();
  const sorted = verified
    .map(s => ({ ...s, distance: haversineDistance(lat, lng, s.latitude, s.longitude) }))
    .sort((a, b) => a.distance - b.distance);

  const nearest = sorted[0];
  const nearestCity = nearest ? cities.find(c => c.id === nearest.city_id) : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container py-8 flex-1">
        {nearest ? (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full gradient-emergency mx-auto flex items-center justify-center mb-4">
                <Navigation className="w-7 h-7 text-emergency-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-1">أقرب ملجأ</h1>
              <p className="text-muted-foreground text-sm">
                يبعد عنك {nearest.distance < 1 ? `${Math.round(nearest.distance * 1000)} متر` : `${nearest.distance.toFixed(1)} كم`}
              </p>
            </div>

            <div className="bg-card border-2 border-secondary/30 rounded-xl p-5 mb-6">
              <h2 className="text-xl font-bold text-foreground mb-1">{nearest.name}</h2>
              {nearestCity && <p className="text-sm text-muted-foreground mb-2">{nearestCity.name_ar}</p>}
              <p className="text-sm text-muted-foreground flex items-center gap-1 mb-4">
                <MapPin className="w-3.5 h-3.5" />
                {nearest.address_text}
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${nearest.latitude},${nearest.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl gradient-emergency text-emergency-foreground font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  <Navigation className="w-5 h-5" />
                  انطلق الآن
                </a>
                <a
                  href={`https://waze.com/ul?ll=${nearest.latitude},${nearest.longitude}&navigate=yes`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-info text-primary-foreground font-bold text-lg hover:opacity-90 transition-opacity"
                >
                  <Navigation className="w-5 h-5" />
                  Waze
                </a>
              </div>
            </div>

            {sorted.length > 1 && (
              <>
                <h3 className="text-lg font-bold text-foreground mb-3">ملاجئ أخرى قريبة</h3>
                <div className="space-y-3">
                  {sorted.slice(1, 5).map(s => {
                    const city = cities.find(c => c.id === s.city_id);
                    return (
                      <div key={s.id} className="relative">
                        <span className="absolute top-3 left-3 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full z-10">
                          {s.distance < 1 ? `${Math.round(s.distance * 1000)} م` : `${s.distance.toFixed(1)} كم`}
                        </span>
                        <ShelterCard shelter={s} cityName={city?.name_ar} />
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">لم يتم العثور على ملاجئ</p>
            <Link to="/regions" className="text-secondary hover:underline mt-4 inline-block">تصفح حسب المنطقة</Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default NearestShelter;
