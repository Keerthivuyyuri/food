import { Link } from "react-router-dom";

function NavigationMenu() {
  return (
    <div className="text-white font-serif pl-8 ">
      <ul className="space-y-6 text-4xl md:text-3xl">
        {/* HOME */}
        <li>
          <Link to="/home" className="hover:text-yellow-400 transition-colors">
            • HOME
          </Link>
        </li>

        {/* MENU - This is the trigger for your MenuPage */}
        <li>
          <Link to="/menu" className="hover:text-yellow-400 transition-colors">
            • MENU
          </Link>
        </li>

        {/* BLOGS */}
        <li>
          • BLOGS
          <div className="ml-8 mt-4 space-y-3 text-lg text-white font-sans font-light">
            <Link to="/blog/1-column" className="block hover:text-yellow-400">1 Column</Link>
            <Link to="/blog/2-columns" className="block hover:text-yellow-400">2 Columns</Link>
            <Link to="/blog/sidebar" className="block hover:text-yellow-400">Sidebar Post</Link>
          </div>
        </li>

        <li>
          <Link to="/about" className="hover:text-yellow-400 transition-colors">• ABOUT</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-400 transition-colors">• CONTACT</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;