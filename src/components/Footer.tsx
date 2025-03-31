
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-viral-black text-white pt-16 pb-8 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <span className="text-viral-purple font-bold text-2xl">Sales<span className="text-white">Bang</span></span>
            </a>
            <p className="text-gray-400 mb-6 max-w-md">
              SalesBang helps businesses harness the power of viral marketing to drive exponential growth through customer referrals and social sharing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-viral-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-viral-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-viral-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-viral-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-viral-purple transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="#use-cases" className="text-gray-400 hover:text-viral-purple transition-colors">For E-commerce</a></li>
              <li><a href="#use-cases" className="text-gray-400 hover:text-viral-purple transition-colors">For Fintech & Banks</a></li>
              <li><a href="#use-cases" className="text-gray-400 hover:text-viral-purple transition-colors">For IT Companies</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-viral-purple transition-colors">Features</a></li>
              <li><a href="#integration" className="text-gray-400 hover:text-viral-purple transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-viral-purple transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-viral-purple transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-viral-purple transition-colors">Blog</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-viral-purple transition-colors">Customer Stories</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-viral-purple transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-viral-purple transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-viral-purple transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-viral-purple transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-viral-purple transition-colors">Webinars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-viral-purple transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SalesBang. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-viral-purple text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-viral-purple text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-viral-purple text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
