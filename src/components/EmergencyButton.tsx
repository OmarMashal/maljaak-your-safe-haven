import { useNavigate } from "react-router-dom";
import { MapPin, Navigation, Loader2 } from "lucide-react";
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
    <motion.button
      onClick={handleFindShelter}
      disabled={loading}
      className="relative w-48 h-48 md:w-56 md:h-56 rounded-full gradient-emergency emergency-pulse flex flex-col items-center justify-center gap-3 text-emergency-foreground transition-all hover:scale-105 active:scale-95 disabled:opacity-80 cursor-pointer"
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.3 }}
    >
      {loading ? (
        <Loader2 className="w-12 h-12 animate-spin" />
      ) : (
        <>
          <Navigation className="w-12 h-12" />
          <span className="text-xl font-bold">ابحث عن ملجأ</span>
          <span className="text-xs opacity-80">اضغط الآن</span>
        </>
      )}

      {/* Ripple rings */}
      <span className="absolute inset-0 rounded-full border-2 border-emergency-foreground/20 animate-ping" />
    </motion.button>
  );
};

export default EmergencyButton;
