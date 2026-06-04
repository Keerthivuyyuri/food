// // src/components/Footer.jsx
// function Footer() {
//   return (
//     <footer className="bg-[#243600] text-white py-20 px-6">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
//         {/* Branding */}
//         <div>
//           <h2 className="text-4xl font-serif mb-6">Food Zero.</h2>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="font-bold mb-4">Contact</h4>
//           <p className="text-sm text-gray-300">
//             +86 852 346 000
//             <br />
//             info@foodzero.com
//             <br />
//             234 Beijing Road, Cyber City CA, 10230
//           </p>
//         </div>

//         {/* Newsletter Subscription */}
//         <div>
//           <h4 className="font-bold mb-4">Never Miss a Recipe</h4>
//           <div className="flex">
//             <input
//               placeholder="Email Address"
//               className="bg-transparent border-b border-white p-2 w-full focus:outline-none"
//             />
//             <button className="bg-white text-[#243600] px-6 py-2 hover:bg-gray-200 transition">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Copyright */}
//       <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#3c5200] text-sm text-gray-400">
//         © 2026 Zero Inc. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#243600] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Branding */}
        <div>
          <h2 className="text-4xl font-serif">Food Zero.</h2>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <p className="text-sm text-gray-300">
            +1+86 852 346 000
            <br />
            info@foodzero.com
            <br />
            <br />
            1959 Sepulveda Blvd.
            <br />
            Culver City, CA, 90230
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h4 className="font-bold mb-4">Never Miss a Recipe</h4>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                placeholder="Email Address"
                className="bg-transparent border border-white p-3 flex-1 min-w-0 focus:outline-none placeholder:text-gray-400"
              />
              <button className="bg-[#5a6b33] text-white px-8 py-3 hover:bg-[#6c7d44] transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400">
              Join our subscribers and get best recipe delivered each week!
            </p>
          </div>
        </div>
      </div>

      {/* Copyright & Socials */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-dotted border-[#3c5200] flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2020 Zero Inc. All rights Reserved</p>

        {/* Social Icons */}
        <div className="flex gap-6 mt-4 md:mt-0 text-white text-xl">
          <FaInstagram
            size={24}
            className="hover:text-gray-400 cursor-pointer"
          />
          <FaTwitter size={24} className="hover:text-gray-400 cursor-pointer" />
          <FaFacebookF
            size={24}
            className="hover:text-gray-400 cursor-pointer"
          />
          <FaYoutube size={24} className="hover:text-gray-400 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
