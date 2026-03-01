import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getShelterById, cities } from "@/data/mockData";
import { MapPin, CheckCircle2, Navigation, Flag, ChevronLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ShelterDetail = () => {
  const { id } = useParams();
  const shelter = getShelterById(id || "");
  const city = shelter ? cities.find(c => c.id === shelter.city_id) : null;

  if (!shelter) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container py-16 text-center flex-1">
          <h1 className="text-2xl font-bold text-foreground">الملجأ غير موجود</h1>
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
          {city && (
            <>
              <Link to={`/city/${city.slug}`} className="hover:text-secondary transition-colors">{city.name_ar}</Link>
              <ChevronLeft className="w-4 h-4" />
            </>
          )}
          <span className="text-foreground font-medium">{shelter.name}</span>
        </div>

        <div className="bg-card border rounded-xl overflow-hidden">
          {/* Map placeholder */}
          <div className="h-48 md:h-64 bg-muted flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <MapPin className="w-8 h-8 mx-auto mb-2" />
              <p className="text-sm">خريطة تفاعلية</p>
              <p className="text-xs">{shelter.latitude.toFixed(4)}, {shelter.longitude.toFixed(4)}</p>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h1 className="text-2xl font-bold text-foreground">{shelter.name}</h1>
                  {shelter.is_verified && (
                    <Badge variant="secondary" className="gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      موثق
                    </Badge>
                  )}
                </div>
                {city && <p className="text-muted-foreground text-sm">{city.name_ar}</p>}
              </div>
            </div>

            <p className="text-foreground mb-4">{shelter.description}</p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 shrink-0" />
                {shelter.address_text}
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>الإحداثيات: {shelter.latitude}, {shelter.longitude}</span>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${shelter.latitude},${shelter.longitude}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl gradient-emergency text-emergency-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <Navigation className="w-4 h-4" />
                خرائط جوجل
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={`https://waze.com/ul?ll=${shelter.latitude},${shelter.longitude}&navigate=yes`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-info text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                <Navigation className="w-4 h-4" />
                Waze
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Report */}
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-destructive transition-colors">
              <Flag className="w-4 h-4" />
              الإبلاغ عن مشكلة
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShelterDetail;
