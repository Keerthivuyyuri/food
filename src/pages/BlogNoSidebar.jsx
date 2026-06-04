import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import menuImage from "../assets/menu.png";

function BlogNoSidebar() {

    const { slug } = useParams();

    const getPostContent = (slug) => {
    const posts = {
        "vegan-baked-oatmeal": { title: "Vegan baked oatmeal with fresh berries", author: "Julie Christie" },
        "summer-harvest-quinoa-salad": { title: "Summer harvest quinoa salad", author: "Mark Doe" },
        // ... add all your posts here
    };
    return posts[slug] || { title: "Post Not Found", author: "Unknown" };
  };

  const post = getPostContent(slug);

  const relatedPosts = [
    {
      title: "Fruit and vegetables and protection against diseases",
      img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf",
    },
    {
      title: "Asparagus Spring Salad with Rocket, Goat's Cheese",
      img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
    },
  ];

  return (
    <div className="bg-[#fcfcf9] min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center text-white text-center">
        <img src={menuImage} className="absolute inset-0 w-full h-full object-cover" alt="Hero" />
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-4 space-y-4">
          <span className="inline-block border border-white px-6 py-1 text-xs uppercase tracking-widest mb-4">
            Fashion
          </span>

          {/* 4. Using the dynamic title here */}
          <h1 className="text-5xl md:text-6xl font-serif max-w-3xl mx-auto">
            {post.title}
          </h1>

          <div className="flex items-center justify-center gap-4 text-sm text-black mt-6">
            <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full" alt="Author" />
            {/* 5. Using dynamic author and date */}
            <span>{post.author}</span>
            <span>• {post.date}</span>
            <span>• 3:33 pm</span>
            <span>• 2 comments</span>
          </div>
        </div>
      </section>

      {/* Main Content (Centered, No Sidebar) */}
      <main className="max-w-4xl mx-auto py-20 px-8 space-y-12">
        <p className="text-lg leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in
          pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient
          orci ac etiam congue mi. Elementum pellentesque non hendrerit et
          pharetra tellus leo tempus tellus.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            className="w-full h-96 object-cover"
            alt="Meat"
          />
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
            className="w-full h-96 object-cover"
            alt="Spices"
          />
        </div>

        <p className="text-lg leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in
          pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient
          orci ac etiam congue mi. Elementum pellentesque non hendrerit et
          pharetra tellus leo tempus tellus. Consectetur scelerisque facilisis
          nunc nunc. Sapien morbi dignissim id tortor vel volutpat facilisi.
          Cras lectus faucibus sed donec. Est pulvinar adipiscing eget at nunc
          amet bibendum enim vulputate. Eu orci nec consequat amet. Id cursus
          purus et fringilla molestie a nulla turpis. Lobortis dui rutrum sed
          sit. Mattis quis scelerisque consectetur orci dui est sem nulla.
          Tortor ullamcorper neque, habitant vulputate at in. Vel nulla in
          ornare amet id praesent. Malesuada eu sed volutpat, tristique sed
          laoreet. Ultrices purus ac urna diam tincidunt interdum faucibus
          mauris est. Nec, lacinia eleifend amet, quis turpis et massa duis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in
          pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient
          orci ac etiam congue mi.
        </p>
      </main>

      {/* PULL QUOTE SECTION (From image_5bfb41.jpg) */}
      <section className="relative py-24 px-8 text-center text-white my-12">
        <img
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Quote Background"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="text-8xl opacity-50 font-serif">“</span>
          <p className="text-3xl font-serif italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
            id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc.
          </p>
        </div>
      </section>

      {/* Article Body */}
      <main className="max-w-4xl mx-auto py-20 px-8 space-y-12">
        <p className="text-lg leading-relaxed text-gray-700">
          Elementum pellentesque non hendrerit et pharetra tellus leo tempus
          tellus. Consectetur scelerisque facilisis nunc nunc. Sapien morbi
          dignissim id tortor vel volutpat facilisi. Cras lectus faucibus sed
          donec. Est pulvinar adipiscing eget at nunc amet bibendum enim
          vulputate. Eu orci nec consequat amet. Id cursus purus et fringilla
          molestie a nulla turpis. Lobortis dui rutrum sed sit. Mattis quis
          scelerisque consectetur orci dui est sem nulla. Tortor ullamcorper
          neque, habitant vulputate at in. Vel nulla in ornare amet id praesent.
          Malesuada eu sed volutpat, tristique sed laoreet. Ultrices purus ac
          urna diam tincidunt interdum faucibus mauris est. Nec, lacinia
          eleifend amet, quis turpis et massa duis.
        </p>

        {/* Tags and Author Bio */}
        <div className="flex items-center gap-6 pt-10">
          <span className="font-bold">Tags:</span>
          <div className="flex flex-wrap gap-2">
            {[
              "Design",
              "Photography",
              "Images",
              "Video",
              "Music",
              "Travel",
            ].map((tag) => (
              <button key={tag} className="border px-4 py-1 text-sm">
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 border-y py-8">
          <img
            src="https://i.pravatar.cc/100"
            className="w-20 h-20 rounded-full"
            alt="Author"
          />
          <div>
            <h4 className="font-bold text-xl">Julie Christie</h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              lorem id penatibus imperdiet. Turpis egestas ultricies purus
              auctor tincidunt lacus nunc.
            </p>
          </div>
        </div>
      </main>

      {/* Related Posts Section */}
      <section className="pt-16 pb-8 max-w-4xl mx-auto px-8">
        {/* Added max-w-4xl and mx-auto to center the section */}

        <h3 className="text-3xl font-serif mb-10 text-center">Related Posts</h3>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Related Post 1 */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1610832958506-aa56368176cf"
                className="w-full h-80 object-cover"
                alt="Fruit and vegetables"
              />
              <span className="absolute top-4 left-4 bg-[#6b705c] text-white px-3 py-1 text-xs uppercase tracking-widest">
                Fashion
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <img
                src="https://i.pravatar.cc/40?u=julie"
                className="w-6 h-6 rounded-full"
                alt="Author"
              />
              <span>
                Julie Christie • October 17, 2021 • 3:33 pm • 2 comments
              </span>
            </div>

            {/* Centered/Corrected Title with Dotted Line */}
            <h4 className="font-serif text-2xl leading-tight pb-4 border-b-2 border-dotted border-gray-400">
              Fruit and vegetables and protection against diseases
            </h4>

            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Removed border-b from 'Read More' */}
            <a href="#" className="inline-block font-bold">
              Read More →
            </a>
          </div>

          {/* Related Post 2 */}
          <div className="space-y-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
                className="w-full h-80 object-cover"
                alt="Asparagus Salad"
              />
              <span className="absolute top-4 left-4 bg-[#6b705c] text-white px-3 py-1 text-xs uppercase tracking-widest">
                Fashion
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <img
                src="https://i.pravatar.cc/40?u=dianne"
                className="w-6 h-6 rounded-full"
                alt="Author"
              />
              <span>
                Dianne Russell • October 17, 2021 • 3:33 pm • 2 comments
              </span>
            </div>

            {/* Centered/Corrected Title with Dotted Line */}
            <h4 className="font-serif text-2xl leading-tight pb-4 border-b-2 border-dotted border-gray-400">
              Asparagus Spring Salad with Rocket, Goat's Cheese
            </h4>

            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Removed border-b from 'Read More' */}
            <a href="#" className="inline-block font-bold">
              Read More →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogNoSidebar;
