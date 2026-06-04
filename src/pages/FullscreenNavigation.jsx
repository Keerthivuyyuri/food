// import NavigationMenu from "../components/NavigationMenu";
// import ContactInfo from "../components/ContactInfo";
// import { X } from "lucide-react";

// function FullscreenNavigation() {
//   return (
//     <div
//       className="relative min-h-screen bg-cover bg-center"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600')",
//       }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* Close Button */}
//       <button className="absolute top-6 left-6 z-20 text-white">
//         <X size={24} />
//       </button>

//       {/* Main Content */}
//       <div className="relative z-10 flex items-center justify-between min-h-screen px-8 md:px-24">
//         <NavigationMenu />
//         <ContactInfo />
//       </div>
//     </div>
//   );
// }

// export default FullscreenNavigation;

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
          "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600')",
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