// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "../components/Header";

// export default function ComingSoon() {
//   const navigate = useNavigate();

//   const handleViewMenu = () => {
//     navigate("/menu");
//   };

//   return (
//     <div className="relative min-h-screen flex flex-col bg-[#243600]">
//       <Header />

//         <div className="flex-grow flex flex-col items-center justify-center text-white px-6">
//           <h1 className="text-5xl md:text-7xl font-serif mb-8">COMING SOON</h1>

//           {/* Decorative Divider */}
//           <div className="w-64 border-t border-dashed border-white/50 mb-12"></div>

//           {/* Timer Grid */}
//           <div className="grid grid-cols-5 gap-8 text-center mb-16">
//             {[
//               { label: "Month", value: "02" },
//               { label: "Days", value: "03" },
//               { label: "Hours", value: "21" },
//               { label: "Minutes", value: "35" },
//               { label: "Second", value: "23" },
//             ].map((item, index) => (
//               <div key={index}>
//                 <div className="text-4xl md:text-5xl font-serif">
//                   {item.value}
//                 </div>
//                 <div className="text-sm uppercase tracking-widest mt-2">
//                   {item.label}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={handleViewMenu}
//             className="border border-white px-12 py-3 hover:bg-white hover:text-[#243600] transition duration-300"
//           >
//             View Menu
//           </button>
//         </div>
//       </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function ComingSoon() {
  const navigate = useNavigate();

  const handleViewMenu = () => {
    navigate("/menu");
  };

  return (
    <div
      className="relative min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <div className="flex-grow flex flex-col items-center justify-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-serif mb-8">
            COMING SOON
          </h1>

          {/* Decorative Divider */}
          <div className="w-64 border-t border-dashed border-white/50 mb-12"></div>

          {/* Timer Grid */}
          <div className="grid grid-cols-5 gap-8 text-center mb-16">
            {[
              { label: "Month", value: "02" },
              { label: "Days", value: "03" },
              { label: "Hours", value: "21" },
              { label: "Minutes", value: "35" },
              { label: "Second", value: "23" },
            ].map((item, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-serif">
                  {item.value}
                </div>
                <div className="text-sm uppercase tracking-widest mt-2">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={handleViewMenu}
            className="border border-white px-12 py-3 hover:bg-white hover:text-[#243600] transition duration-300"
          >
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
}
