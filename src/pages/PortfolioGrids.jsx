import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

export const portfolioItems = [
  { id: 1, title: "Premium Deep Sea Snow White Cod Fillet", category: "Dinner", img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2", height: "h-[500px]" },
  { id: 2, title: "Option of natural wine availability", category: "Drinks", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80", height: "h-[400px]" },
  { id: 3, title: "Best Pumpkin for Pumpkin Soup", category: "Starter", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80", height: "h-[450px]" },
  { id: 4, title: "Strip Steak With Rosemary Butter", category: "Dinner", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", height: "h-[550px]" },
  { id: 5, title: "Braised Sliced Abalone, Fish Maw", category: "Dinner", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1", height: "h-[450px]" },
  { id: 6, title: "Pan Fried Live Prawn With Superior Soy Sauce", category: "Starter", img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641", height: "h-[450px]" },
];

export default function PortfolioGrids() {
  // Helper to render a card
  const PortfolioCard = ({ item }) => (
    <Link to={`/portfolio/${item.id}`} className="flex flex-col group cursor-pointer">
      <div className={`relative overflow-hidden mb-6 ${item.height}`}>
        <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" alt={item.title} />
        <span className="absolute top-6 left-6 bg-[#6b705c] text-white px-4 py-1 text-[10px] uppercase tracking-widest">{item.category}</span>
      </div>
      <div className="space-y-2">
        <h3 className="text-3xl font-serif leading-tight group-hover:text-gray-700 transition-colors">{item.title}</h3>
        <div className="flex justify-between items-center pt-2 border-t border-dotted border-gray-300">
          <p className="text-sm text-gray-500 font-medium">{item.category}</p>
          <span className="text-lg">→</span>
        </div>
      </div>
    </Link>
  );

  return (
    <div className="bg-[#fcfcf9] min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center text-white text-center">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" className="absolute inset-0 w-full h-full object-cover" alt="Portfolio Hero" />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-6xl font-serif tracking-tight">Portfolio - Grids</h1>
      </section>

      {/* Grid Layout */}
      <main className="max-w-7xl mx-auto px-6 py-32 space-y-20">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-12">
          {portfolioItems.slice(0, 2).map(item => <PortfolioCard key={item.id} item={item} />)}
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-12">
          {portfolioItems.slice(2, 4).map(item => <PortfolioCard key={item.id} item={item} />)}
        </div>
        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {portfolioItems.slice(4, 6).map(item => <PortfolioCard key={item.id} item={item} />)}
        </div>
      </main>

      <Footer />
    </div>
  );
}