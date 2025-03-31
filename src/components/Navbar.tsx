
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-4 md:px-8 lg:px-16 bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-viral-purple font-bold text-2xl">Viral<span className="text-viral-black">Boost</span></span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-viral-black hover:text-viral-purple transition-colors">Features</a>
          <a href="#testimonials" className="text-viral-black hover:text-viral-purple transition-colors">Testimonials</a>
          <a href="#pricing" className="text-viral-black hover:text-viral-purple transition-colors">Pricing</a>
          <a href="#faq" className="text-viral-black hover:text-viral-purple transition-colors">FAQ</a>
          <Button className="bg-viral-purple hover:bg-viral-dark-purple text-white">Get Started</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-viral-black focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-50 animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            <a 
              href="#features" 
              className="text-viral-black hover:text-viral-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-viral-black hover:text-viral-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              className="text-viral-black hover:text-viral-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#faq" 
              className="text-viral-black hover:text-viral-purple transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              className="bg-viral-purple hover:bg-viral-dark-purple text-white w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
