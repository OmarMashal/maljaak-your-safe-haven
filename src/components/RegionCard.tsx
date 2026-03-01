import { Link } from "react-router-dom";
import { ChevronLeft, MapPin, Building2 } from "lucide-react";
import { Region } from "@/data/mockData";
import { motion } from "framer-motion";

interface RegionCardProps {
  region: Region;
  index: number;
}

const RegionCard = ({ region, index }: RegionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 + index * 0.08, duration: 0.5, ease: "easeOut" }}
    >
      <Link
        to={`/regions/${region.slug}`}
        className="block bg-card rounded-2xl border p-5 card-hover group relative overflow-hidden"
      >
        {/* Subtle accent line */}
        <div className="absolute top-0 right-0 w-1 h-full bg-secondary/0 group-hover:bg-secondary/60 transition-all duration-500 rounded-full" />
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-muted/70 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
              {region.icon}
            </div>
            <div>
              <h3 className="font-display font-bold text-foreground text-lg group-hover:text-secondary transition-colors duration-200">
                {region.name_ar}
              </h3>
              <div className="flex items-center gap-4 mt-1.5">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Building2 className="w-3 h-3" />
                  {region.cityCount} مدن
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {region.shelterCount} ملجأ
                </span>
              </div>
            </div>
          </div>
          <div className="w-9 h-9 rounded-xl bg-muted/50 flex items-center justify-center group-hover:bg-secondary/10 transition-colors duration-200">
            <ChevronLeft className="w-4 h-4 text-muted-foreground group-hover:text-secondary group-hover:-translate-x-0.5 transition-all duration-200" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default RegionCard;
