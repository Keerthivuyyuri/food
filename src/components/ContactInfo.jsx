import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="text-white max-w-xs mt-10 md:mt-0">
      {/* Title */}
      <h3 className="text-lg font-bold mb-4">Contact</h3>
      <div className="border-b border-dotted border-white mb-6"></div>

      {/* Details - using text-gray-300 for better contrast */}
      <div className="text-sm text-gray-300 space-y-2 mb-6">
        <p>+86 852 346 000</p>
        <p>info@foodzero.com</p>
        <p className="leading-relaxed">
          1959 Sepulveda Blvd. <br />
          Culver City, CA 90230
        </p>
      </div>

      {/* Social Icons - added hover effects */}
      <div className="flex gap-5">
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
          <FaInstagram size={18} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
          <FaTwitter size={18} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
          <FaFacebook size={18} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
          <FaYoutube size={18} />
        </a>
      </div>
      <div className="mt-6">
        <a href="/coming-soon" className="hover:text-gray-400 transition-colors">
          Coming Soon
        </a>
      </div>
    </div>
  );
}

export default ContactInfo;