import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function BlogSidebarPage() {
  const tags = ["Food", "Recipes", "Healthy", "Lifestyle", "Vegan", "Kitchen"];

  const recentPosts = [
    { id: 1, slug: "vegan-baked-oatmeal", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80", title: "Vegan baked oatmeal with fresh berries" },
    { id: 2, slug: "summer-harvest-quinoa-salad", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80", title: "Summer harvest quinoa salad" },
    { id: 3, slug: "warm-roasted-vegetable-bowl", img: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=400&q=80", title: "Warm roasted vegetable bowl" },
    { id: 4, slug: "delicious-brunch-toast-ideas", img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=400&q=80", title: "Delicious brunch toast ideas" },
  ];

  const commentsData = [
    {
      id: 1,
      name: "Leslie Alexander",
      date: "March 12,2020,7:08 pm",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.",
      img: "https://i.pravatar.cc/150?u=1",
    },
    {
      id: 2,
      name: "Jenifer Lopez",
      date: "March 12,2020,7:08 pm",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.",
      img: "https://i.pravatar.cc/150?u=2",
      reply: true,
    },
    {
      id: 3,
      name: "Jane Cooper",
      date: "March 12,2020,7:08 pm",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.",
      img: "https://i.pravatar.cc/150?u=3",
    },
    {
      id: 4,
      name: "Jenny Wilson",
      date: "March 12,2020,7:08 pm",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.",
      img: "https://i.pravatar.cc/150?u=4",
    },
  ];

  return (
    <div className="bg-[#fcfcf9] min-h-screen">
      <Header />

      {/* Updated Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center text-white text-center">
        {/* Full-width Background Image */}
        <img
          src="https://images.unsplash.com/photo-1516727003284-a96541e51e9c?w=1200"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Hero"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Container */}
        <div className="relative z-10 px-4 space-y-4">
          {/* Category Badge */}
          <span className="inline-block border border-white px-6 py-1 text-xs uppercase tracking-widest mb-4">
            Fashion
          </span>

          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl font-serif max-w-3xl mx-auto">
            Three Ideas for Cooking Goat Meat at Home
          </h1>

          {/* Author & Metadata Row */}
          <div className="flex items-center justify-center gap-4 text-sm mt-6">
            <img
              src="https://i.pravatar.cc/40" // Placeholder for author avatar
              className="w-8 h-8 rounded-full"
              alt="Author"
            />
            <span>Julie Christie</span>
            <span>• October 17, 2021</span>
            <span>• 3:33 pm</span>
            <span>• 2 comments</span>
          </div>
        </div>
      </section>
      <section className="py-20 px-8 max-w-6xl mx-auto grid lg:grid-cols-3 gap-16">
        {/* LEFT: Main Content (2/3 width) */}
        <main className="lg:col-span-2 space-y-8">
          <p className="text-gray-600 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
            id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc.
          </p>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              className="col-span-1 h-96 w-full object-cover"
              alt="Main Dish"
            />
            <div className="grid gap-4">
              <img
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80"
                className="h-44 w-full object-cover"
                alt="Detail 1"
              />
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
                className="h-44 w-full object-cover"
                alt="Detail 2"
              />
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
            id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc. Convallis pellentesque quis fringilla
            sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* Pull Quote */}
          <blockquote className="py-10 text-3xl font-serif italic text-[#243600] border-y border-gray-200">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc."
          </blockquote>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem
            id penatibus imperdiet. Turpis egestas ultricies purus auctor
            tincidunt lacus nunc. Convallis pellentesque quis fringilla
            sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </main>

        {/* RIGHT: Sidebar (1/3 width) */}
        <aside className="space-y-12">
          <input
            type="text"
            placeholder="Search...."
            className="w-full border-b border-gray-300 py-2 focus:outline-none"
          />

          {/* Categories */}
          <div>
            <h4 className="font-serif text-xl mb-4">Categories</h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex justify-between">
                <span>Fashion</span> <span>16</span>
              </li>
              <li className="flex justify-between">
                <span>Food</span> <span>20</span>
              </li>
              <li className="flex justify-between">
                <span>Music</span> <span>12</span>
              </li>
            </ul>
          </div>

          {/* Recent Comments */}
          <div>
            <h4 className="font-serif text-xl mb-4">Recent Comments</h4>
            <div className="border-t border-black w-full mb-4"></div>
            <div className="space-y-4 text-sm text-gray-600">
              <p>
                <span className="font-bold">John McCain</span> on Vegan baked
                oatmeal
              </p>
              <p>
                <span className="font-bold">Ana</span> on 50 Foods That Are
                Super Healthy
              </p>
              <p>
                <span className="font-bold">Camilla</span> on How Many Carbs
                Should You Eat?
              </p>
            </div>
          </div>

          {/* Archives */}
          <div>
            <h4 className="font-serif text-xl mb-4">Archives</h4>
            <div className="border-t border-black w-full mb-4"></div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex justify-between">
                <span>October 2021</span> <span>12</span>
              </li>
              <li className="flex justify-between">
                <span>September 2021</span> <span>6</span>
              </li>
              <li className="flex justify-between">
                <span>August 2021</span> <span>23</span>
              </li>
            </ul>
          </div>
        </aside>
      </section>
      <section className="py-20 px-8 max-w-6xl mx-auto grid lg:grid-cols-3 gap-16">
        {/* Main Content Column */}
        <main className="lg:col-span-2 space-y-12">
          {/* ... (Keep your existing content images and pull quotes here) ... */}

          {/* Tags and Author Bio Section */}
          <div className="flex items-center gap-6 pt-10">
            <span className="font-bold text-lg">Tags:</span>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="border px-4 py-1 text-sm hover:bg-black hover:text-white transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-6 border-t border-b py-8">
            <img
              src="https://i.pravatar.cc/100"
              className="w-20 h-20 rounded-full"
              alt="Author"
            />
            <div>
              <h4 className="font-serif text-2xl font-bold">Julie Christie</h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id penatibus imperdiet.
              </p>
            </div>
          </div>
        </main>

        {/* Sidebar Column */}
        <aside className="space-y-12">
          {/* ... (Include your Search, Categories, Comments, Archives here) ... */}

          {/* Recent Posted Section with Link Navigation */}
          <div>
            <h4 className="font-serif text-xl mb-4">Recent Posted</h4>
            <div className="border-t border-black w-full mb-4"></div>
            <div className="space-y-6">
              {recentPosts.map((post) => (
                <Link
                  to={`/blog/${post.slug}`} // Navigates to dynamic route
                  key={post.id}
                  className="flex gap-4 group"
                >
                  <img
                    src={post.img}
                    className="w-16 h-16 object-cover"
                    alt="Post"
                  />
                  <div>
                    <p className="font-bold text-sm group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </p>
                    <span className="text-xs text-gray-400">October 17, 2021</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* Tags Widget */}
          <div>
            <h4 className="font-serif text-xl mb-4">Tags</h4>
            <div className="border-b border-dotted border-gray-400 mt-4"></div>
            <div className="flex flex-wrap gap-4 mt-4">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="border px-3 py-1 text-xs hover:bg-black hover:text-white transition"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="grid md:grid-cols-2 mt-16 border-t border-b border-gray-200">
        {/* Previous Post */}
        <div className="relative group p-12 flex flex-col items-center justify-center text-center text-white border-r border-gray-200 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1557800636-894a64c1696f"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            alt="Prev"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 space-y-2">
            <span className="text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              ← Previous Post
            </span>
            <h3 className="text-2xl font-serif">
              7 Reasons to Start Your Day With Lemon Water
            </h3>
          </div>
        </div>

        {/* Next Post */}
        <div className="relative group p-12 flex flex-col items-center justify-center text-center text-white overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            alt="Next"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 space-y-2">
            <span className="text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              Next Post →
            </span>
            <h3 className="text-2xl font-serif">
              12 Sparkling Wines We're Loving This Summer
            </h3>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-16 px-8">
        <h3 className="text-3xl font-serif mb-12 text-center">5 Comments</h3>

        <div className="space-y-10">
          {commentsData.map((comment) => (
            <div
              key={comment.id}
              className={`flex gap-4 ${comment.reply ? "ml-16" : ""}`}
            >
              <img
                src={comment.img}
                className="w-12 h-12 rounded-full object-cover"
                alt={comment.name}
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-lg">{comment.name}</h4>
                    <span className="text-sm text-gray-400">
                      {comment.date}
                    </span>
                  </div>
                  <button className="font-bold hover:underline">Reply</button>
                </div>
                <p className="text-gray-600 mt-2">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-b border-gray-300 mt-16 border-dashed"></div>
      </section>

      <section className="max-w-4xl mx-auto py-16 px-8">
        <h3 className="text-3xl font-serif mb-10 text-center">Leave a Reply</h3>

        <form className="space-y-6">
          {/* Comment Textarea */}
          <div className="flex flex-col">
            <label className="font-bold mb-2">Comment</label>
            <textarea className="w-full border border-gray-300 p-4 h-48 focus:outline-none focus:border-black"></textarea>
          </div>

          {/* Input Fields */}
          <div className="grid md:grid-cols-1 gap-6">
            {["Name*", "Email*", "Website"].map((label) => (
              <div key={label} className="flex flex-col">
                <label className="font-bold mb-2">{label}</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black"
                />
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="border border-black px-10 py-3 font-bold hover:bg-black hover:text-white transition"
          >
            Post Comment
          </button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default BlogSidebarPage;
