import React from 'react';

const MenuSection = ({ title, description, image, items, reversed = false }) => {
  return (
    <div className="max-w-5xl mx-auto py-20 px-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif mb-4">{title}</h2>
        <p className="text-gray-600 font-sans">{description}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        <img
          src={image}
          className={`w-full h-[500px] object-cover rounded-sm ${reversed ? 'md:order-2' : ''}`}
          alt={title}
        />
        <div className={reversed ? 'md:order-1' : ''}>
          {items.map((item, index) => (
            <div key={index} className="mb-10">
              <div className="flex justify-between items-end gap-4 mb-2">
                <h3 className="text-3xl font-serif text-[#243600]">{item.name}</h3>
                <div className="flex-grow border-b-2 border-dotted border-gray-300 mb-2"></div>
                <span className="text-2xl font-serif text-[#243600]">${item.price}</span>
              </div>
              <p className="text-gray-500 font-sans text-sm italic">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;