import React from 'react';
import { Globe } from 'lucide-react';

const Footer = () => (
    <footer className="bg-slate-950 light:bg-slate-900 border-t border-slate-800 pt-20 pb-10 px-4 transition-colors duration-300 print:hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Globe className="h-6 w-6 text-blue-400" />
            <span className="font-playfair text-2xl font-bold text-white">Globe Guru</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">Crafting unforgettable journeys for the modern traveler. Experience the world in high definition.</p>
        </div>
        <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
                <li className="hover:text-blue-400 cursor-pointer">About Us</li>
                <li className="hover:text-blue-400 cursor-pointer">Careers</li>
                <li className="hover:text-blue-400 cursor-pointer">Press & Media</li>
            </ul>
        </div>
        <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
                <li className="hover:text-blue-400 cursor-pointer">Contact</li>
                <li className="hover:text-blue-400 cursor-pointer">Safety</li>
                <li className="hover:text-blue-400 cursor-pointer">Sitemap</li>
            </ul>
        </div>
        <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-4">Get the latest travel trends.</p>
            <div className="flex gap-2">
                <input type="email" placeholder="Email" className="bg-slate-900 border border-slate-700 text-white px-3 py-2 rounded text-sm w-full outline-none focus:border-blue-400" />
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded text-sm font-bold">Join</button>
            </div>
        </div>
      </div>
      <div className="text-center text-slate-600 text-xs pt-8 border-t border-slate-900">
        © 2025 Globe Guru Inc. All rights reserved.
      </div>
    </footer>
);

export default Footer;