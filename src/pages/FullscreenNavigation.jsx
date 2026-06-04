import NavigationMenu from "../components/NavigationMenu";
import ContactInfo from "../components/ContactInfo";
import { X } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link

function FullscreenNavigation() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
           "url('https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Close Button - Wrapped in Link to go back to Home */}
      <Link 
        to="/home" 
        className="absolute top-8 left-8 z-20 text-white hover:text-yellow-400 transition-colors"
      >
        <X size={32} />
      </Link>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen px-8 md:px-24 pt-20 pb-10">
        <NavigationMenu />
        <ContactInfo />
      </div>
    </div>
  );
}

export default FullscreenNavigation;