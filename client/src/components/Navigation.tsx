import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">Aryan Shah</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="nav-link">Home</a>
              <a href="#featured" className="nav-link">Featured</a>
              <a href="#education" className="nav-link">Education</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#projects" className="nav-link">Projects</a>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 z-40">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <a href="#home" className="nav-link" onClick={closeMobileMenu}>Home</a>
            <a href="#featured" className="nav-link" onClick={closeMobileMenu}>Featured</a>
            <a href="#education" className="nav-link" onClick={closeMobileMenu}>Education</a>
            <a href="#experience" className="nav-link" onClick={closeMobileMenu}>Experience</a>
            <a href="#projects" className="nav-link" onClick={closeMobileMenu}>Projects</a>
          </div>
        </div>
      )}
    </>
  );
}
