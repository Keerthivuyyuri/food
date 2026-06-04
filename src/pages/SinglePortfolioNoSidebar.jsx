import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { portfolioItems } from './PortfolioGrids'; 
import { useParams } from "react-router-dom";

function SinglePortfolioNoSidebar() {
    const { id } = useParams();
  const item = portfolioItems.find(i => i.id === parseInt(id));
  return (
    <div className="bg-[#fcfcf9] min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex flex-col items-center justify-center text-white text-center">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-5xl md:text-6xl font-serif max-w-2xl px-4">
          Deep Sea Snow White Cod Fillet
        </h1>
        <div className="absolute bottom-10 animate-bounce">
          <p className="text-xs uppercase tracking-[0.3em]">Scroll</p>
          <div className="w-[1px] h-12 bg-white/50 mx-auto mt-2"></div>
        </div>
      </section>

      {/* Split Layout Section */}
      <section className="max-w-4xl mx-auto py-20 px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
              className="w-full h-[400px] object-cover"
              alt="Cocktail"
            />
            {/* Right Column (Offset Image) */}
            <div className="mt-12">
              <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
                className="w-full h-[350px] object-cover"
                alt="Main Dish"
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="space-y-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-serif">Melt in Your Mouth</h2>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in
                pellentesque ornare nunc nisl.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-serif">The Best Taste</h2>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Cooking Suggestions Section */}
      <section className="max-w-4xl mx-auto py-16 px-8 space-y-8">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed
            in pellentesque ornare nunc nisl. Augue habitant accumsan, ut
            parturient orci ac etiam congue mi.
          </p>
          <h2 className="text-4xl font-serif">Cooking Suggestions</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Full Width Image */}
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6"
            className="w-full h-[500px] object-cover"
            alt="Cooking Suggestion Dish"
          />
        </div>
      </section>
      {/* Post Navigation Section */}
      <section className="bg-[#e9ece3] py-12 px-8 mt-16">
        <div className="max-w-4xl mx-auto flex justify-between items-center text-[#3d405b]">
          {/* Previous Page Link */}
          <a href="#" className="flex flex-col items-start gap-2">
            <span className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold">
              <span className="text-xl">←</span> PREVIOUS PAGE
            </span>
            <span className="font-serif text-xl font-bold">
              Strip Steak With Rosemary Butter
            </span>
          </a>

          {/* Central Grid Icon */}
          <div className="text-2xl cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="4" cy="4" r="2" />
              <circle cx="12" cy="4" r="2" />
              <circle cx="20" cy="4" r="2" />
              <circle cx="4" cy="12" r="2" />
              <circle cx="12" cy="12" r="2" />
              <circle cx="20" cy="12" r="2" />
              <circle cx="4" cy="20" r="2" />
              <circle cx="12" cy="20" r="2" />
              <circle cx="20" cy="20" r="2" />
            </svg>
          </div>

          {/* Next Page Link */}
          <a href="#" className="flex flex-col items-end gap-2">
            <span className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold">
              NEXT PAGE <span className="text-xl">→</span>
            </span>
            <span className="font-serif text-xl font-bold">
              Option of natural wine available
            </span>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SinglePortfolioNoSidebar;