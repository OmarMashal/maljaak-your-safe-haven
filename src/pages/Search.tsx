import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShelterCard from "@/components/ShelterCard";
import { shelters, cities } from "@/data/mockData";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

const Search = () => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return shelters.filter(s => {
      const city = cities.find(c => c.id === s.city_id);
      return (
        s.name.includes(q) ||
        s.address_text.includes(q) ||
        city?.name_ar.includes(q)
      );
    });
  }, [query]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container py-8 flex-1">
        <h1 className="text-3xl font-bold text-foreground mb-6">البحث عن ملجأ</h1>

        <div className="relative mb-6">
          <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث بالمدينة أو اسم الملجأ..."
            className="pr-10 h-12 text-base"
          />
        </div>

        {query.trim() ? (
          results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {results.map(s => {
                const city = cities.find(c => c.id === s.city_id);
                return <ShelterCard key={s.id} shelter={s} cityName={city?.name_ar} />;
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">لا توجد نتائج لـ "{query}"</p>
            </div>
          )
        ) : (
          <div className="text-center py-12">
            <SearchIcon className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-muted-foreground">ابدأ بالكتابة للبحث عن ملجأ</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Search;
