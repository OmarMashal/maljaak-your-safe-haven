import { Link } from "react-router-dom";
import { ChevronLeft, MapPin } from "lucide-react";
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
      transition={{ delay: index * 0.1 }}
    >
      <Link
        to={`/regions/${region.slug}`}
        className="block bg-card rounded-xl border p-5 hover:border-secondary/40 hover:shadow-lg transition-all group"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center text-2xl">
              {region.icon}
            </div>
            <div>
              <h3 className="font-bold text-foreground text-lg group-hover:text-secondary transition-colors">
                {region.name_ar}
              </h3>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs text-muted-foreground">{region.cityCount} مدن</span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {region.shelterCount} ملجأ
                </span>
              </div>
            </div>
          </div>
          <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
        </div>
      </Link>
    </motion.div>
  );
};

export default RegionCard;
