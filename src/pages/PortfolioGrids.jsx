import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const portfolioItems = [
  { 
    id: 1, 
    title: "Premium Deep Sea Snow White Cod Fillet", 
    category: "Dinner", 
    img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2",
    height: "h-[500px]" // Row 1 Left
  },
  { 
    id: 2, 
    title: "Option of natural wine availability", 
    category: "Drinks", 
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    height: "h-[400px]" // Row 1 Right
  },
  { 
    id: 3, 
    title: "Best Pumpkin for Pumpkin Soup", 
    category: "Starter", 
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    height: "h-[450px]" // Row 2 Left
  },
  { 
    id: 4, 
    title: "Strip Steak With Rosemary Butter", 
    category: "Dinner", 
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    height: "h-[550px]" // Row 2 Right
  },
  { 
    id: 5, 
    title: "Braised Sliced Abalone, Fish Maw", 
    category: "Dinner", 
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
    height: "h-[450px]" // Row 3 Left
  },
  { 
    id: 6, 
    title: "Pan Fried Live Prawn With Superior Soy Sauce", 
    category: "Starter", 
    img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641",
    height: "h-[450px]" // Row 3 Right
  },
];

export default function PortfolioGrids() {
  return (
    <div className="bg-[#fcfcf9] min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center text-white text-center">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Portfolio Hero" 
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-6xl font-serif tracking-tight">Portfolio - Grids</h1>
      </section>

      {/* Filter Tabs */}
      <nav className="flex justify-center flex-wrap gap-x-12 gap-y-4 py-16 text-sm uppercase tracking-[0.2em] font-bold text-gray-400">
        {["All", "Starter", "Launch", "Dinner", "Drinks", "Sweets", "Fruits"].map((tab) => (
          <button key={tab} className="hover:text-black transition-colors duration-300">
            {tab}
          </button>
        ))}
      </nav>

      {/* 2-Column Grid Layout */}
      <main className="max-w-7xl mx-auto px-6 pb-32">
        <div className="space-y-20">
          <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-12">
            {portfolioItems.slice(0, 2).map((item) => (
              <div key={item.id} className="flex flex-col group cursor-pointer">
                {/* Image Container */}
                <div className={`relative overflow-hidden mb-6 ${item.height}`}>
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    alt={item.title} 
                  />
                  {/* Optional Category Overlay (Top Left as per design) */}
                  <span className="absolute top-6 left-6 bg-[#6b705c] text-white px-4 py-1 text-[10px] uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>

                {/* Text Description Below Image */}
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif leading-tight group-hover:text-gray-700 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center pt-2 border-t border-dotted border-gray-300">
                    <p className="text-sm text-gray-500 font-medium">Starter • Dinner</p>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-x-12 gap-y-20">
            {portfolioItems.slice(2, 4).map((item) => (
              <div key={item.id} className="flex flex-col group cursor-pointer">
                {/* Image Container */}
                <div className={`relative overflow-hidden mb-6 ${item.height}`}>
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    alt={item.title} 
                  />
                  {/* Optional Category Overlay (Top Left as per design) */}
                  <span className="absolute top-6 left-6 bg-[#6b705c] text-white px-4 py-1 text-[10px] uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>

                {/* Text Description Below Image */}
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif leading-tight group-hover:text-gray-700 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center pt-2 border-t border-dotted border-gray-300">
                    <p className="text-sm text-gray-500 font-medium">Starter • Dinner</p>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {portfolioItems.slice(4).map((item) => (
              <div key={item.id} className="flex flex-col group cursor-pointer">
                {/* Image Container */}
                <div className={`relative overflow-hidden mb-6 ${item.height}`}>
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                    alt={item.title} 
                  />
                  {/* Optional Category Overlay (Top Left as per design) */}
                  <span className="absolute top-6 left-6 bg-[#6b705c] text-white px-4 py-1 text-[10px] uppercase tracking-widest">
                    {item.category}
                  </span>
                </div>

                {/* Text Description Below Image */}
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif leading-tight group-hover:text-gray-700 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center pt-2 border-t border-dotted border-gray-300">
                    <p className="text-sm text-gray-500 font-medium">Starter • Dinner</p>
                    <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Load More Section */}
        <div className="text-center mt-24">
          <button className="border border-black px-16 py-4 uppercase tracking-[0.3em] text-sm font-bold hover:bg-black hover:text-white transition-all duration-300">
            Loading
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}