import React, { useState, useEffect } from 'react';
import { ChevronLeft, MapPin, Heart, Thermometer, Calendar, Wallet } from 'lucide-react';
import { Star } from 'lucide-react';

const DestinationDetail = ({ destination, onBack, onToggleFavorite, isFavorite, onBookClick }) => {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20 bg-slate-900 light:bg-slate-50 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-blue-500 mb-6 transition-colors group">
          <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" /> Back to Destinations
        </button>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
               <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-600/30">{destination.region}</span>
               <div className="flex items-center gap-1 text-amber-400">
                 <Star className="h-4 w-4 fill-current" /> <span className="font-bold">{destination.rating}</span>
               </div>
            </div>
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white light:text-slate-900 mb-2">{destination.title}</h1>
            <p className="text-slate-400 light:text-slate-600 flex items-center gap-2"><MapPin className="h-4 w-4" /> {destination.region}</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => onToggleFavorite(destination.id)}
              className={`p-4 rounded-full border transition-all ${isFavorite ? 'bg-red-500/10 border-red-500/50 text-red-500' : 'border-slate-600 text-slate-400 hover:text-white hover:border-white'}`}
            >
              <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            <button 
                onClick={onBookClick}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-900/40 transition-all hover:-translate-y-1"
            >
              Book Now from ₹{destination.price.toLocaleString('en-IN')}
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[500px] mb-12">
          <div className="md:col-span-2 h-full rounded-2xl overflow-hidden relative group">
            <img src={destination.images?.[activeImage] || destination.img} alt="Main" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
               {(destination.images || [destination.img]).map((_, idx) => (
                 <button key={idx} onClick={() => setActiveImage(idx)} className={`w-2 h-2 rounded-full transition-all ${idx === activeImage ? 'bg-white w-6' : 'bg-white/50 hover:bg-white'}`} />
               ))}
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-4 h-full">
            {(destination.images || [destination.img]).slice(0, 2).map((img, idx) => (
              <div key={idx} className={`h-1/2 rounded-2xl overflow-hidden cursor-pointer border-2 ${activeImage === idx ? 'border-blue-500' : 'border-transparent'}`} onClick={() => setActiveImage(idx)}>
                  <img src={img} alt="Gallery" className="w-full h-full object-cover hover:opacity-80 transition-opacity" />
              </div>
            ))}
            <div className="bg-slate-800 light:bg-slate-200 rounded-2xl flex-1 flex items-center justify-center cursor-pointer hover:bg-slate-700 light:hover:bg-slate-300 transition-colors">
              <span className="text-slate-400 light:text-slate-600 font-bold">+ View Gallery</span>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-slate-800/50 light:bg-white p-8 rounded-2xl border border-slate-700 light:border-slate-200">
               <h3 className="font-playfair text-2xl font-bold text-white light:text-slate-900 mb-4">Overview</h3>
               <p className="text-slate-300 light:text-slate-600 leading-relaxed text-lg">{destination.desc || "Experience the magic of this destination with our curated guide."}</p>
            </div>

            <div>
              <h3 className="font-playfair text-2xl font-bold text-white light:text-slate-900 mb-6">3-Day Itinerary</h3>
              <div className="space-y-6">
                {(destination.itinerary || ["Day 1: Arrival & Exploration", "Day 2: Cultural Deep Dive", "Day 3: Adventure & Departure"]).map((day, i) => (
                  <div key={i} className="flex gap-6 group">
                      <div className="flex flex-col items-center">
                         <div className="w-10 h-10 rounded-full bg-blue-900/50 text-blue-400 flex items-center justify-center font-bold border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-colors">{i+1}</div>
                         {i !== 2 && <div className="w-px h-full bg-slate-700 light:bg-slate-300 my-2"></div>}
                      </div>
                      <div className="pb-8">
                        <h4 className="text-xl font-bold text-slate-200 light:text-slate-800 mb-2">{day.split(':')[0]}</h4>
                        <p className="text-slate-400 light:text-slate-600">{day.split(':')[1] || "Explore the local wonders."}</p>
                      </div>
                   </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
             <div className="bg-slate-800/50 light:bg-white p-6 rounded-2xl border border-slate-700 light:border-slate-200">
               <h4 className="font-bold text-white light:text-slate-900 mb-6 uppercase tracking-wider text-sm border-b border-slate-700 light:border-slate-200 pb-4">Key Details</h4>
               
               <div className="space-y-6">
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center"><Thermometer className="h-5 w-5" /></div>
                   <div>
                     <div className="text-slate-400 light:text-slate-500 text-xs uppercase">Weather</div>
                     <div className="text-white light:text-slate-900 font-semibold">{destination.weather || '20°C'}</div>
                   </div>
                 </div>
                 
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center"><Calendar className="h-5 w-5" /></div>
                   <div>
                     <div className="text-slate-400 light:text-slate-500 text-xs uppercase">Best Time</div>
                     <div className="text-white light:text-slate-900 font-semibold">{destination.bestTime || 'Year-round'}</div>
                   </div>
                 </div>

                 <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center"><Wallet className="h-5 w-5" /></div>
                   <div>
                     <div className="text-slate-400 light:text-slate-500 text-xs uppercase">Daily Budget</div>
                     <div className="text-white light:text-slate-900 font-semibold">₹{destination.dailyBudget.toLocaleString('en-IN')} / day</div>
                   </div>
                 </div>
               </div>
             </div>
             
             <div className="bg-blue-600 p-6 rounded-2xl text-center">
                <h4 className="text-white font-bold text-xl mb-2">Need Help Planning?</h4>
                <p className="text-blue-100 text-sm mb-4">Our travel experts are ready to customize your trip.</p>
                <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-lg w-full hover:bg-blue-50 transition-colors">Chat with Expert</button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;