import { Link } from "react-router-dom";
import { MapPin, CheckCircle2, Navigation } from "lucide-react";
import { Shelter } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

interface ShelterCardProps {
  shelter: Shelter;
  cityName?: string;
}

const ShelterCard = ({ shelter, cityName }: ShelterCardProps) => {
  const openGoogleMaps = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${shelter.latitude},${shelter.longitude}`, "_blank");
  };

  const openWaze = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`https://waze.com/ul?ll=${shelter.latitude},${shelter.longitude}&navigate=yes`, "_blank");
  };

  return (
    <Link
      to={`/shelter/${shelter.id}`}
      className="block bg-card rounded-xl border p-4 hover:border-secondary/40 hover:shadow-md transition-all group"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors">
              {shelter.name}
            </h3>
            {shelter.is_verified && (
              <Badge variant="secondary" className="text-[10px] px-1.5 py-0 gap-0.5">
                <CheckCircle2 className="w-3 h-3" />
                موثق
              </Badge>
            )}
          </div>
          {cityName && (
            <p className="text-xs text-muted-foreground mb-1">{cityName}</p>
          )}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <MapPin className="w-3 h-3 shrink-0" />
            {shelter.address_text}
          </p>
        </div>
      </div>

      <div className="flex gap-2 mt-3">
        <button
          onClick={openGoogleMaps}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-muted hover:bg-secondary hover:text-secondary-foreground text-sm font-medium transition-colors"
        >
          <Navigation className="w-3.5 h-3.5" />
          خرائط جوجل
        </button>
        <button
          onClick={openWaze}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-muted hover:bg-info/20 hover:text-info text-sm font-medium transition-colors"
        >
          <Navigation className="w-3.5 h-3.5" />
          Waze
        </button>
      </div>
    </Link>
  );
};

export default ShelterCard;
