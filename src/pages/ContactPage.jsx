import Header from "../components/Header";
import Footer from "../components/Footer";

function ContactPage() {
  return (
    <div className="bg-[#fcfcf9] min-h-screen">
      <Header />

      {/* Hero Section
      <div className="relative h-[400px] flex items-center justify-center text-white">
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Contact Hero" 
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-6xl font-serif">Get in Touch</h1>
        <p className="text-lg opacity-90">The freshest ingredients for you every day</p>

        {/* Open Time Box */}
      {/* <div className="mt-8 md:mt-0 w-full md:w-80">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-serif">Open Time</h3>
              <span className="text-sm">Sunday - Friday</span>
            </div>
            <div className="border-t border-dashed border-white pt-4 flex justify-between text-sm">
              <div>
                <p className="font-bold">Brunch</p>
                <p>11:00–12:00</p>
              </div>
              <div>
                <p className="font-bold">Lunch</p>
                <p>13:00–17:00</p>
              </div>
              <div>
                <p className="font-bold">Dinner</p>
                <p>18:00–20:00</p>
              </div>
            </div>
          </div>
      </div>  */}
      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center px-12 md:px-24 text-white">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Contact Hero"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 w-full flex flex-col md:flex-row justify-between md:items-end">
          {/* Left: Heading */}
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-8xl font-serif mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl font-light opacity-90">
              The freshest ingredients for you every day
            </p>
          </div>

          {/* Right: Open Time Box */}
          <div className="mt-12 md:mt-0 w-full md:w-[350px]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-serif">Open Time</h3>
              <span className="text-xs uppercase tracking-widest">
                Sunday - Friday
              </span>
            </div>

            {/* Dashed Separator */}
            <div className="border-t border-dashed border-white/50 mb-6"></div>

            {/* Time Grid */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xs uppercase tracking-wider mb-1">Brunch</p>
                <p className="text-sm font-light">11:00–12:00</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1">Lunch</p>
                <p className="text-sm font-light">13:00–17:00</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1">Dinner</p>
                <p className="text-sm font-light">18:00–20:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-24 px-8 max-w-6xl mx-auto">
      {/* Row 1: Contact via Email/Phone */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <img 
          src="https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1200&q=80" 
          alt="Food table setting" 
          className="w-full h-[400px] object-cover rounded-sm shadow-md"
        />
        <div className="space-y-4">
          <p className="text-gray-600 leading-relaxed">
            We can be contacted via <br />
            <span className="text-[#243600] font-bold">email info@foodzero.com</span> <br />
            or telephone on <span className="text-[#243600] font-bold">+86 852 346 000</span>
          </p>
        </div>
      </div>

      {/* Row 2: Location/Map */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <p className="text-gray-600 leading-relaxed">
            We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230
          </p>
          <button className="border border-[#243600] px-8 py-3 hover:bg-[#243600] hover:text-white transition uppercase tracking-widest text-sm">
            View in maps
          </button>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80" 
          alt="Restaurant interior" 
          className="order-1 md:order-2 w-full h-[400px] object-cover rounded-sm shadow-md"
        />
      </div>
    </section>

    <section className="bg-[#eef2e6] py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif mb-4">Make a Reservation</h2>
          <p className="text-gray-600 font-sans">Get in touch with the restaurant</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="First Name" className="p-4 border border-gray-300 bg-transparent" />
          <input type="text" placeholder="Last Name" className="p-4 border border-gray-300 bg-transparent" />
          <input type="email" placeholder="Email" className="md:col-span-2 p-4 border border-gray-300 bg-transparent" />
          <input type="tel" placeholder="Phone" className="md:col-span-2 p-4 border border-gray-300 bg-transparent" />
          <input type="date" className="p-4 border border-gray-300 bg-transparent" />
          <select className="p-4 border border-gray-300 bg-transparent text-gray-500">
            <option>6:00 pm</option>
            <option>7:00 pm</option>
            <option>8:00 pm</option>
          </select>
          <select className="md:col-span-2 p-4 border border-gray-300 bg-transparent text-gray-500">
            <option>2 Persons</option>
            <option>3 Persons</option>
            <option>4 Persons</option>
          </select>
          <button type="submit" className="md:col-span-2 bg-[#243600] text-white py-4 font-bold hover:bg-[#3c5200] transition">
            Book Now
          </button>
        </form>
      </div>
    </section>

      <Footer />
    </div>
  );
}

export default ContactPage;
