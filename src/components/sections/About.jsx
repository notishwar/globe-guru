import React from 'react';

const About = () => (
    <section id="about" className="py-24 max-w-7xl mx-auto px-4 bg-slate-900 light:bg-slate-50 transition-colors duration-300 print:hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group">
           <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team" className="rounded-2xl shadow-2xl relative z-10 grayscale group-hover:grayscale-0 transition-all duration-700 w-full" />
        </div>
        <div>
          <span className="text-blue-500 font-semibold tracking-wider text-sm uppercase mb-2 block">Who We Are</span>
          <h2 className="font-playfair text-4xl text-white light:text-slate-900 mb-6">We curate memories, <br/>not just vacations.</h2>
          <p className="text-slate-400 light:text-slate-600 leading-relaxed text-lg mb-6">At Globe Guru, we believe travel is the only thing you buy that makes you richer.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 light:bg-white p-5 rounded-xl border border-slate-700 light:border-slate-200">
               <h3 className="text-white light:text-slate-900 font-bold mb-1">Global Network</h3>
               <p className="text-sm text-slate-400 light:text-slate-600">Local guides in 50+ countries.</p>
            </div>
            <div className="bg-slate-800/50 light:bg-white p-5 rounded-xl border border-slate-700 light:border-slate-200">
               <h3 className="text-white light:text-slate-900 font-bold mb-1">24/7 Support</h3>
               <p className="text-sm text-slate-400 light:text-slate-600">We are with you every step.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default About;