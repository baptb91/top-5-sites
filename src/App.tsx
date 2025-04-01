
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import BlogPost from "./components/BlogPost";
import { Toaster } from "@/components/ui/toaster";

// Define a ScrollToTop component to handle scrolling to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Create a component that handles potentially serving pre-rendered HTML for bots
const SeoHandler = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Add a specific class to the body to help identify when the SPA is fully loaded
    document.body.classList.add('js-loaded');
    
    // Log navigation for debugging purposes
    console.log(`Navigation to: ${pathname}`);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <SeoHandler />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
