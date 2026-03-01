import { useNavigate } from "react-router-dom";
import { Navigation, Loader2 } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const EmergencyButton = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFindShelter = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLoading(false);
          navigate(`/nearest?lat=${position.coords.latitude}&lng=${position.coords.longitude}`);
        },
        () => {
          setLoading(false);
          navigate("/regions");
        },
        { enableHighAccuracy: true, timeout: 5000 }
      );
    } else {
      setLoading(false);
      navigate("/regions");
    }
  };

  return (
    <div className="relative">
      {/* Ripple rings */}
      <span className="absolute inset-0 rounded-full border-2 border-emergency/30 ripple-ring" />
      <span className="absolute inset-0 rounded-full border-2 border-emergency/20 ripple-ring-delayed" />
      <span className="absolute inset-0 rounded-full border border-emergency/10 ripple-ring-delayed-2" />
      
      <motion.button
        onClick={handleFindShelter}
        disabled={loading}
        className="relative w-44 h-44 md:w-56 md:h-56 rounded-full gradient-emergency emergency-pulse flex flex-col items-center justify-center gap-2.5 text-emergency-foreground transition-all hover:scale-105 active:scale-95 disabled:opacity-80 cursor-pointer shadow-2xl shadow-emergency/30"
        whileTap={{ scale: 0.93 }}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.4 }}
      >
        {loading ? (
          <Loader2 className="w-12 h-12 animate-spin" />
        ) : (
          <>
            <div className="w-16 h-16 rounded-full bg-primary-foreground/15 flex items-center justify-center backdrop-blur-sm">
              <Navigation className="w-8 h-8" />
            </div>
            <span className="text-lg md:text-xl font-display font-bold">ابحث عن ملجأ</span>
            <span className="text-[11px] opacity-70 font-medium tracking-wide">اضغط الآن</span>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default EmergencyButton;
