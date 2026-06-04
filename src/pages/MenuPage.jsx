import React from 'react';
import Header from '../components/Header';
import MenuSection from '../components/MenuSection';
import Footer from '../components/Footer';
import menuImage from '../assets/menu.png';

function MenuPage () {
  // Define your data arrays
  const starters = [
    { name: "Grilled Okra and Tomatoes", price: "20", desc: "Lorem ipsum dolor sit amet." },
    { name: "Cucumber Salad", price: "18", desc: "Lorem ipsum dolor sit amet." },
    { name: "Basil Pancakes", price: "15", desc: "Lorem ipsum dolor sit amet." }
  ];

  const mains = [
    { name: "Deep Sea Snow White Cod Fillet", price: "20", desc: "Lorem ipsum dolor sit amet." },
    { name: "Steak With Rosemary Butter", price: "22", desc: "Lorem ipsum dolor sit amet." },
    { name: "Steaks with Grilled Kimchi", price: "20", desc: "Lorem ipsum dolor sit amet." }
  ];

  const pastriesDrinks = [
    { name: "Wine Pairing", price: "158", desc: "Lorem ipsum dolor sit amet." },
    { name: "Natural Wine Pairing", price: "168", desc: "Lorem ipsum dolor sit amet." },
    { name: "Whisky Flyer", price: "90", desc: "Lorem ipsum dolor sit amet." }
  ];

  return (
    <div className="bg-[#fcfcf9] min-h-screen">
      <Header />
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-start text-white">
        <img src={menuImage} className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-left pl-8 md:pl-16 lg:pl-24">
          <h1 className="text-[6rem] md:text-[5rem] lg:text-[7rem] font-serif mb-4 leading-tight">
            View Our<br />
            New Menu
          </h1>
          <p className="text-lg opacity-90">The freshest ingredients for you every day</p>
        </div>
      </div>

      {/* Sections - Alternating Image Left/Right */}
      <MenuSection 
        title="Starters" 
        description="Fresh seasonal starters."
        image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80"
        items={starters}
        reversed={false} 
      />
      
      <MenuSection 
        title="Mains" 
        description="Signature main courses."
        image="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=1200&q=80"
        items={mains} 
        reversed={true} // Image on Right
      />

      <MenuSection 
        title="Pastries & Drinks" 
        description="Handcrafted drinks and desserts."
        image="https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80"
        items={pastriesDrinks} 
        reversed={false} // Image on Left
      />

      {/* Reservation Section */}
      <section className="bg-[#eef2eb] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-serif mb-4">Make a Reservation</h2>
          <p className="mb-10 text-gray-600">Get in touch with restaurant</p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <input
              type="date"
              className="p-4 bg-transparent border border-gray-400"
            />
            <select className="p-4 bg-transparent border border-gray-400">
              <option>6:00 pm</option>
            </select>
            <select className="p-4 bg-transparent border border-gray-400">
              <option>2 Person</option>
            </select>
          </div>
          <button className="bg-[#243600] text-white px-12 py-4 font-bold uppercase tracking-widest">
            Book Now
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default MenuPage;