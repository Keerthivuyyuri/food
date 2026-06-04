import {
  Fish,
  Carrot,
  Apple,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function HomePage() {
  const menuItems = [
    {
      price: "$20",
      title: "Deep Sea Snow White Cod Fillet",
    },
    {
      price: "$22",
      title: "Steak With Rosemary Butter",
    },
    {
      price: "$18",
      title: "Cucumber Salad",
    },
    {
      price: "$90",
      title: "Natural Wine Pairing",
    },
  ];

  return (
    <div className="bg-[#f7f7f2]">
      <Header />

      {/* Hero Section */}

      <section className="bg-[#233500] text-white px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Side */}
            <div>
              <h1 className="text-6xl lg:text-8xl font-serif leading-none">
                Healthy Eating
                <br />
                is important
                <br />
                part of lifestyle
              </h1>

              <p className="mt-8 max-w-sm text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                congue arcu.
              </p>

              <div className="mt-20 flex flex-col items-start">
                <span className="text-3xl font-serif rotate-180 [writing-mode:vertical-rl]">
                  Scroll
                </span>

                <div className="h-40 border-l border-dashed border-gray-400 mt-4"></div>
              </div>
            </div>

            {/* Right Side */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
                alt="Gourmet plated dish"
                className="w-full h-[550px] object-cover"
              />
            </div>
          </div>

          {/* Spice Images */}
          <div className="flex justify-center gap-5 -mt-16 relative z-10">
            <img
              src="https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=400&q=80"
              alt="Spices in bowls"
              className="w-28 h-28 rounded-full border-4 border-white object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=400&q=80"
              alt="Fresh herbs in bowl"
              className="w-28 h-28 rounded-full border-4 border-white object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
              alt="Fresh ingredients"
              className="w-28 h-28 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>
      </section>

      {/* Diet section */}
      <section className="bg-[#233500] text-white px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=900&q=80"
                alt="Healthy soup bowl"
                className="w-full h-[350px] object-cover"
              />

              <h2 className="text-5xl font-serif mt-8">
                Start to plan
                <br />
                your diet today
              </h2>

              <p className="mt-4 text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="flex flex-col justify-end">
              <p className="mb-6 text-gray-300 max-w-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                congue arcu.
              </p>

              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
                alt="Diet ingredients on a tray"
                className="w-full max-w-md border-4 border-yellow-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu */}

      <section className="bg-[#f7f7f2] py-24 px-6 relative overflow-hidden">
        {/* Leaf Decoration */}
        <img
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80"
          alt="Light leaf decoration"
          className="absolute top-0 right-0 w-72 opacity-90"
        />

        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif text-black">Our Menu</h2>

          <p className="text-gray-500 mt-3 max-w-sm">
            This is a section of your menu. Give your section a brief
            description.
          </p>

          <div className="grid md:grid-cols-2 gap-16 mt-20">
            {menuItems.map((item, index) => (
              <div key={index}>
                <div className="flex justify-end">
                  <span className="text-3xl font-serif text-black">
                    {item.price}
                  </span>
                </div>

                <div className="border-t border-dotted border-gray-700 mt-2 pt-5">
                  <h3 className="text-4xl font-serif text-black leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}

      <section className="bg-[#e5eadf] py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80"
                alt="Chef cooking"
                className="w-full"
              />
            </div>

            {/* Content */}
            <div className="relative">
              <h2 className="text-6xl font-serif text-black">
                Excellent
                <br />
                cook
              </h2>

              <p className="mt-6 text-gray-600 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                lorem id euismod imperdiet. Turpis egestas ultricies purus
                auctor tincidunt lacus nunc.
              </p>

              {/* Leaf Decoration */}
              <img
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=500&q=80"
                alt="Leaf decoration"
                className="absolute -bottom-24 right-0 w-56 opacity-50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* 1. Features Grid */}
          <div className="grid md:grid-cols-3 gap-12 mb-24">
            {[
              { icon: Fish, title: "Premium Quality" },
              { icon: Carrot, title: "Seasonal Vegetables" },
              { icon: Apple, title: "Fresh Fruit" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="bg-[#eef2eb] p-8 rounded-full mb-6">
                  <item.icon size={40} className="text-[#243600]" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 max-w-[250px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
                  congue arcu
                </p>
              </div>
            ))}
          </div>

          {/* 2. Blog Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                img: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80",
                title: "Fruit and vegetables and protection against diseases",
              },
              {
                img: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=1200&q=80",
                title: "Asparagus Spring Salad with Rocket, Goat's Cheese",
              },
            ].map((blog, idx) => (
              <div key={idx} className="group">
                {/* Image */}
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-[400px] object-cover"
                  />
                  <span className="absolute top-4 right-4 bg-[#6b7c2a] text-white text-xs px-4 py-1 uppercase tracking-widest font-bold">
                    Fashion
                  </span>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                  <div className="w-6 h-6 rounded-full bg-gray-300" />
                  <span>Name • October 17, 2021 • 3:33 pm • 2 comments</span>
                </div>

                {/* Title & Desc */}
                <h2 className="text-3xl font-serif font-medium mb-3">
                  {blog.title}
                </h2>
                <div className="w-full border-b border-dashed border-gray-400 mb-4" />
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <button
                  type="button"
                  className="font-semibold flex items-center gap-2 hover:text-[#243600] transition"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Calories Energy Balance Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-4">
              Calories Energy Balance
            </h2>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starters',
                img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80',
              },
              {
                name: 'Mains',
                img: 'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=1200&q=80',
              },
              {
                name: 'Soups',
                img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80',
              },
            ].map((item) => (
              <div
                key={item.name}
                className="relative group cursor-pointer overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute top-8 left-8 flex items-center justify-between w-[calc(100%-4rem)]">
                  <h3 className="text-3xl font-serif text-white">{item.name}</h3>
                  <ArrowRight className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6 bg-[#fcfcfb]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl font-serif italic mb-10">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            lorem id penatibus imperdiet. Turpis egestas ultricies purus."
          </p>
          <div className="flex flex-col items-center gap-4">
            <img
              src="https://i.pravatar.cc/100"
              alt="Avatar"
              className="w-16 h-16 rounded-full"
            />
            <h4 className="font-bold">John Doe</h4>
            <div className="flex gap-4 mt-4">
              <ChevronLeft className="cursor-pointer" /> <span>2 / 3</span>{" "}
              <ChevronRight className="cursor-pointer" />
            </div>
          </div>
        </div>
      </section>

        <Footer />
    </div>
  );
}

export default HomePage;
