import { Play } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutPage() {
   const processes = [
  {
    id: "01",
    title: "Slice",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla sagittis.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "02",
    title: "Pickled",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80"
  },
  {
    id: "03",
    title: "Bake",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet.",
    img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1400&q=80"
  }
];
  return (
    <div className="bg-[#fcfcf9] min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-end text-right text-white">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"
        alt="Restaurant interior"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-3xl">
        <h1 className="text-6xl md:text-8xl font-serif mb-6">Who We Are</h1>
        <p className="text-lg md:text-xl font-light max-w-2xl mx-auto md:ml-auto">
          The most important thing for us is to give you the comfortable dining experience
        </p>
      </div>
    </section>

      {/* Our Story Section */}
      <section className="max-w-6xl mx-auto py-20 px-8 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-serif mb-6">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc.
          </p>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d" 
          alt="Chef cooking" 
          className="w-full h-[400px] object-cover rounded-sm shadow-md"
        />
      </section>

      {/* Restaurant Manager & Executive Chef Section */}
      <section className="max-w-6xl mx-auto py-20 px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Manager Section */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-serif">Restaurant Manager</h2>
            <p className="font-semibold">Carson Hugn</p>
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80" 
              alt="Restaurant Manager portrait" 
              className="w-full h-[500px] object-cover rounded-sm shadow-md"
            />
          </div>

          {/* Chef Section */}
          <div className="flex flex-col gap-6 pt-20 items-center text-center">
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl.
            </p>
            <h2 className="text-4xl font-serif mt-10">Executive Chef</h2>
            <p className="font-semibold">Jane Cooper</p>
            <img 
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80" 
              alt="Executive Chef" 
              className="w-full h-[500px] object-cover rounded-sm shadow-md"
            />
            <p className="text-gray-600 leading-relaxed mt-4 self-start text-left max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi.
            </p>
          </div>
        </div>
      </section>

      <section className="relative h-[400px] w-full flex items-center justify-center text-white">
      {/* Background Image */}
      <img 
        src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1400&q=80" 
        alt="Delicious food" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-[#243600]/60"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-5xl font-serif mb-4">It looks delicious</h2>
        <p className="mb-8 font-light italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        {/* Play Button */}
        <button className="w-20 h-20 mx-auto border-2 border-white rounded-full flex items-center justify-center hover:bg-white/20 transition duration-300">
          <Play size={32} fill="white" />
        </button>
      </div>
    </section>


      {/* Sophisticated Process Section */}
      <section className="py-24 px-8 bg-[#fcfcf9]">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-24 relative">
          <h2 className="text-6xl font-serif text-[#243600]">Sophisticated Process</h2>
          {/* Decorative Leaf Icon (Placeholder) */}
          <div className="absolute -top-10 right-0 opacity-20">
             {/* You can insert a leaf icon/SVG here */}
          </div>
        </div>

        {/* Process Items Grid */}
        <div className="space-y-24">
          {processes.map((item, index) => (
            <div 
              key={item.id} 
              className="grid md:grid-cols-2 gap-16 items-center"
            >
              {/* Image Column */}
              <div className={`w-full h-[320px] md:h-[380px] overflow-hidden shadow-xl ${index === 1 ? "md:order-2" : ""}`}>
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Column */}
              <div className={`space-y-4 ${index === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-5xl font-serif text-left">
                  <span className="text-gray-300">{item.id}.</span>{item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg font-light text-left">
                  {item.text}
                </p>
              </div>
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
      <Footer />
    </div>
  );
}
export default AboutPage;