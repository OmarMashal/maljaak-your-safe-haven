import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShelterCard from "@/components/ShelterCard";
import { getCityBySlug, getSheltersByCity, regions } from "@/data/mockData";
import { ChevronLeft } from "lucide-react";

const CityDetail = () => {
  const { slug } = useParams();
  const city = getCityBySlug(slug || "");
  const shelters = city ? getSheltersByCity(city.id) : [];
  const region = city ? regions.find(r => r.id === city.region_id) : null;

  if (!city) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container py-16 text-center flex-1">
          <h1 className="text-2xl font-bold text-foreground">المدينة غير موجودة</h1>
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
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
          <Link to="/regions" className="hover:text-secondary transition-colors">المناطق</Link>
          <ChevronLeft className="w-4 h-4" />
          {region && (
            <>
              <Link to={`/regions/${region.slug}`} className="hover:text-secondary transition-colors">{region.name_ar}</Link>
              <ChevronLeft className="w-4 h-4" />
            </>
          )}
          <span className="text-foreground font-medium">{city.name_ar}</span>
        </div>

        <h1 className="text-3xl font-bold text-foreground mb-1">{city.name_ar}</h1>
        <p className="text-muted-foreground mb-6">{shelters.length} ملجأ في هذه المنطقة</p>

        {shelters.length === 0 ? (
          <div className="bg-card border rounded-xl p-8 text-center">
            <p className="text-muted-foreground">لا توجد ملاجئ مسجلة في هذه المدينة حالياً</p>
            <Link to="/submit" className="text-secondary hover:underline text-sm mt-2 inline-block">
              أضف ملجأ جديد
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shelters.map(shelter => (
              <ShelterCard key={shelter.id} shelter={shelter} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CityDetail;
