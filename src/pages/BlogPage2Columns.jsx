import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const blogPosts = [
  { id: 1, title: "Fruit and vegetables and protection against diseases", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf", category: "Fashion" },
  { id: 2, title: "Asparagus Spring Salad with Rocket, Goat's Cheese", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd", category: "Fashion" },
  { id: 3, title: "The Best Style of Dough for Dumplings", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80", category: "Fashion" },
  { id: 4, title: "7 Reasons to Start Your Day With Lemon Water", img: "https://images.unsplash.com/photo-1557800636-894a64c1696f", category: "Fashion" },
  { id: 5, title: "Three Ideas for Cooking Goat Meat at Home", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b", category: "Fashion" },
  { id: 6, title: "12 Sparkling Wines We're Loving This Summer", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80", category: "Fashion" },
];

function BlogPage2Columns() {
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

      {/* Blog Grid */}
      <main className="max-w-6xl mx-auto py-20 px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="group">
              <div className="relative overflow-hidden mb-6">
                <img src={post.img} alt={post.title} className="w-full h-80 object-cover" />
                <span className="absolute top-4 left-4 bg-[#4a5d23] text-white px-4 py-1 text-sm uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
              <div className="space-y-4">
                <div className="text-sm text-gray-500">Julie Christie • October 17, 2021 • 2 comments</div>
                <h2 className="text-3xl font-serif">{post.title}</h2>
                <div className="w-20 h-0.5 bg-gray-300"></div>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button type="button" className="inline-block font-bold hover:underline">Read More →</button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="flex justify-center gap-2 mt-16">
          {[1, 2, 3, 4, '...'].map((num, i) => (
            <button key={i} className="w-10 h-10 border border-gray-300 hover:bg-gray-100">{num}</button>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
export default BlogPage2Columns;