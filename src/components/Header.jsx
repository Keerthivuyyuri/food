import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Added X for closing
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio - Grids", path: "/portfolio/grids" },
    { name: "Single Portfolio - No Sidebar", path: "/portfolio/no-sidebar" },
    { name: "Blogs - 1 Column", path: "/blog/1-column" },
    { name: "Blogs - 2 Columns", path: "/blog/2-columns" },
    { name: "Single Post", path: "/blog/sidebar" },
    { name: "Single Post - No Sidebar", path: "/blog/no-sidebar" },
  ];

  return (
    <header className="bg-[#243600] text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo and Burger Button */}
        <div className="flex items-center gap-6">
          <div className="border border-white px-4 py-2">
            <h1 className="text-4xl font-serif">FoodZero</h1>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-8">
          <span className="hidden md:block text-sm">+86 852 346 000</span>
          <button className="border border-white px-6 py-3 hover:bg-white hover:text-[#243600] transition">
            Reservations
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-[#243600] border-t border-white/20 p-8 flex flex-col items-center gap-6 z-50">
          {menuItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-serif hover:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;