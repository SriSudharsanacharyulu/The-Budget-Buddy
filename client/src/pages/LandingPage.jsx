import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white text-center p-4"
      style={{
        backgroundImage: "url('/landing-bg.jpg')",
      }}
    >
      {/* Title */}
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
        style={{
          fontFamily: `'Playfair Display', serif`,
          textShadow: "4px 4px 6px rgba(0,0,0,0.7)",
        }}
      >
        TheBudgetBuddy
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-base sm:text-lg md:text-xl mb-8 max-w-sm sm:max-w-md md:max-w-lg"
        style={{
          fontFamily: `'Poppins', sans-serif`,
          textShadow: "3px 3px 4px rgba(0,0,0,0.6)",
        }}
      >
        Your buddy for stress-free travel budgeting.
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Button
          size="lg"
          onClick={() => navigate("/calculator")}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 text-sm sm:text-base"
        >
          Start Planning →
        </Button>
      </motion.div>
    </div>
  );
}

export default LandingPage;
