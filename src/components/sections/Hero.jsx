import React from 'react';
import { smoothScrollTo } from '../../utils/helpers';

const Hero = () => (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden print:hidden">
    <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1491557345352-5929e343eb89?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover animate-ken-burns" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900 light:from-slate-900/40 light:to-white/10"></div>
    </div>
    <div className="relative z-10 text-center px-4 mt-16 animate-fade-in-up">
        <h1 className="font-playfair text-5xl md:text-8xl font-bold text-white mb-6">Amazing Cities <br/><span className="text-blue-400">Near You</span></h1>
        <button onClick={() => smoothScrollTo('destinations')} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-xl shadow-blue-900/50">Explore Now</button>
    </div>
    </section>
);

export default Hero;