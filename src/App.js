import { BrowserRouter, Routes, Route } from "react-router-dom";
import FullscreenNavigation from "./pages/FullscreenNavigation";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage"; // Import your new page
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogPage2Columns from "./pages/BlogPage2Columns";
import BlogSidebarPage from "./pages/BlogSidebarPage";
import BlogNoSidebar from "./pages/BlogNoSidebar";
import PortfolioGrids from "./pages/PortfolioGrids";
import SinglePortfolioNoSidebar from "./pages/SinglePortfolioNoSidebar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FullscreenNavigation />} />
        <Route path="/home" element={<HomePage />} />
        {/* New route for the menu */}
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:layout" element={<BlogPage />} />
        <Route path="/blog/2-columns" element={<BlogPage2Columns />} />
        <Route path="/blog/sidebar" element={<BlogSidebarPage />} />
        <Route path="/blog/no-sidebar" element={<BlogNoSidebar />} />
        <Route path="/portfolio/grids" element={<PortfolioGrids />} />
        <Route path="/portfolio/no-sidebar" element={<SinglePortfolioNoSidebar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;