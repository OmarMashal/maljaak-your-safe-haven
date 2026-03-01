import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegionCard from "@/components/RegionCard";
import { regions } from "@/data/mockData";

const Regions = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container py-8 flex-1">
        <h1 className="text-3xl font-bold text-foreground mb-2">المناطق</h1>
        <p className="text-muted-foreground mb-6">اختر منطقتك للعثور على الملاجئ القريبة</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {regions.map((region, i) => (
            <RegionCard key={region.id} region={region} index={i} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Regions;
