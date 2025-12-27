import React from 'react';
import { Globe, Menu, X, Sun, Moon, LogOut, User } from 'lucide-react';
import { NAV_LINKS } from '../../data/constants';
import { smoothScrollTo } from '../../utils/helpers';

const Navigation = ({ 
  mobileMenuOpen, setMobileMenuOpen, 
  user, onLoginClick, onLogout,
  theme, toggleTheme,
  setView 
}) => {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/90 dark:bg-slate-900/90 light:bg-white/90 border-b border-slate-800 dark:border-slate-800 light:border-slate-200 shadow-lg shadow-black/5 h-20 transition-colors duration-300 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <button 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group focus:outline-none" 
            onClick={() => { setView('home'); smoothScrollTo('home'); }}
          >
            <Globe className="h-8 w-8 text-blue-500 group-hover:rotate-180 transition-transform duration-700" />
            <span className="font-playfair text-2xl font-bold text-slate-100 light:text-slate-900 tracking-wide">
              Globe <span className="text-blue-500">Guru</span>
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setView('home');
                  setTimeout(() => smoothScrollTo(link.id), 100);
                }}
                className="text-slate-300 light:text-slate-600 hover:text-blue-400 light:hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wider relative group py-2"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
              </button>
            ))}

            <div className="h-6 w-px bg-slate-700 light:bg-slate-300 mx-2"></div>

            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-800 light:hover:bg-slate-200 text-slate-300 light:text-slate-600">
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {user ? (
              <div className="flex items-center gap-3 pl-2">
                <button onClick={() => setView('trips')} className="text-sm font-medium text-slate-300 light:text-slate-700 hidden lg:block hover:text-blue-400 transition-colors">
                    My Trips
                </button>
                <div className="relative group">
                    <button onClick={() => setView('profile')} className="focus:outline-none">
                        <img src={user.avatar} alt="User" className="w-9 h-9 rounded-full border border-slate-600 hover:border-blue-500 transition-colors" />
                    </button>
                </div>
                <button onClick={onLogout} className="text-slate-400 hover:text-red-400 ml-2" title="Logout">
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={onLoginClick}
                className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2"
              >
                <User className="h-4 w-4" /> Login
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button onClick={toggleTheme} className="text-slate-300 light:text-slate-600 p-2">
               {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
             </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-slate-300 light:text-slate-800 hover:text-white p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 light:bg-white border-b border-slate-800 light:border-slate-200 absolute top-full left-0 w-full animate-in slide-in-from-top-5 z-50 shadow-2xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {user ? (
               <div className="p-4 border-b border-slate-800 light:border-slate-200 flex items-center gap-3 mb-2">
                 <img src={user.avatar} alt="User" className="w-10 h-10 rounded-full" />
                 <div>
                   <div className="text-white light:text-slate-900 font-bold">{user.name}</div>
                   <div className="flex gap-4 mt-1">
                        <button onClick={() => { setView('trips'); setMobileMenuOpen(false); }} className="text-xs text-blue-400 hover:underline">My Trips</button>
                        <button onClick={() => { setView('profile'); setMobileMenuOpen(false); }} className="text-xs text-blue-400 hover:underline">Profile</button>
                        <button onClick={() => { onLogout(); setMobileMenuOpen(false); }} className="text-xs text-red-400 hover:underline">Log Out</button>
                   </div>
                 </div>
               </div>
             ) : (
               <button onClick={() => { onLoginClick(); setMobileMenuOpen(false); }} className="w-full text-left px-3 py-3 text-blue-400 font-bold border-b border-slate-800 mb-2">Login / Sign Up</button>
             )}
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  setView('home');
                  setTimeout(() => smoothScrollTo(link.id), 100);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-4 text-base font-medium text-slate-300 light:text-slate-700 hover:bg-slate-800 light:hover:bg-slate-100 rounded-md"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;