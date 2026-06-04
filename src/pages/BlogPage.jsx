import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

function BlogPage() {

    const allBlogs = [
  { id: 1, title: "Fruit and vegetables and protection against diseases", category: "Fashion", author: "Julie Christie", date: "October 17, 2021", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf" },
  { id: 2, title: "Asparagus Spring Salad with Rocket, Goat's Cheese", category: "Fashion", author: "Dionne Russell", date: "October 17, 2021", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd" },
  { id: 3, title: "7 Reasons to Start Your Day With Lemon Water", category: "Fashion", author: "Jenifer Lopez", date: "October 17, 2021", img: "https://images.unsplash.com/photo-1557800636-894a64c1696f" },
  { id: 4, title: "Three Ideas for Cooking Goat Meat at Home", category: "Fashion", author: "Francesca Webb", date: "October 17, 2021", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b" },
  { id: 5, title: "12 Sparkling Wines We're Loving This Summer", category: "Fashion", author: "Leslie Alexander", date: "October 17, 2021", img: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1400&q=80" }
];
    
  return (
    <div className="bg-[#fcfcf9] min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[450px] flex flex-col items-center justify-center text-white">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Blog Hero" 
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl font-serif mb-4">Blog List - One Column</h1>
          <p className="text-lg opacity-90">It is easy way to create your beautiful blog for daily</p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-20 px-8 max-w-5xl mx-auto space-y-20">
      {/* Blog Articles */}
      {allBlogs.map((blog) => (
        <article key={blog.id} className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={blog.img} alt={blog.title} className="w-full h-80 object-cover" />
            <span className="absolute top-4 left-4 bg-[#4a5d23] text-white px-4 py-1 text-sm uppercase tracking-wider">
              {blog.category}
            </span>
          </div>
          <div className="space-y-4">
            <div className="text-sm text-gray-500">
              <span className="font-bold text-black">{blog.author}</span> • {blog.date} • 2 comments
            </div>
            <h2 className="text-4xl font-serif">{blog.title}</h2>
            <div className="w-24 h-0.5 bg-gray-300"></div>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button type="button" className="inline-block pt-2 font-bold hover:underline">Read More →</button>
          </div>
        </article>
      ))}

      {/* Loading Button */}
      <div className="flex justify-center pt-10">
        <button className="border border-gray-300 px-10 py-3 text-sm hover:bg-gray-100 transition">
          Loading...
        </button>
      </div>
    </section>
      <Footer />
    </div>
  );
}
export default BlogPage;