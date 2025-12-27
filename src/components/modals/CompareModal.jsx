import React from 'react';
import { ArrowLeftRight, XCircle, X, Star } from 'lucide-react';

const CompareModal = ({ isOpen, onClose, items, onRemove }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 print:hidden">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-slate-900 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-8 flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950">
           <h2 className="text-2xl font-playfair font-bold text-white flex items-center gap-2"><ArrowLeftRight className="text-blue-500" /> Compare Destinations</h2>
           <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white"><XCircle /></button>
        </div>
        
        <div className="overflow-auto p-8">
           {items.length === 0 ? (
             <div className="text-center py-20 text-slate-500">
               <p>No destinations selected for comparison.</p>
             </div>
           ) : (
             <div className="grid grid-cols-[150px_repeat(auto-fit,minmax(200px,1fr))] gap-8 min-w-[800px]">
               <div className="space-y-8 pt-[282px] text-slate-500 font-bold text-sm uppercase tracking-wider">
                 <div className="h-10 flex items-center">Rating</div>
                 <div className="h-10 flex items-center">Price</div>
                 <div className="h-10 flex items-center">Region</div>
                 <div className="h-10 flex items-center">Weather</div>
                 <div className="h-10 flex items-center">Best Time</div>
                 <div className="h-10 flex items-center">Daily Budget</div>
               </div>

               {items.map(place => (
                 <div key={place.id} className="space-y-8 relative">
                    <button onClick={() => onRemove(place.id)} className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-red-500 p-1 rounded-full text-white transition-colors"><X className="h-4 w-4" /></button>
                    <div className="h-[250px] rounded-2xl overflow-hidden relative mb-8">
                       <img src={place.img} className="w-full h-full object-cover" alt={place.title} />
                       <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                          <h3 className="text-xl font-bold text-white font-playfair">{place.title}</h3>
                       </div>
                    </div>
                    
                    <div className="h-10 flex items-center text-amber-400 font-bold text-lg"><Star className="fill-current w-4 h-4 mr-1"/> {place.rating}</div>
                    <div className="h-10 flex items-center text-white font-semibold">₹{place.price.toLocaleString('en-IN')}</div>
                    <div className="h-10 flex items-center text-blue-400 bg-blue-900/20 px-3 rounded-lg w-fit">{place.region}</div>
                    <div className="h-10 flex items-center text-slate-300">{place.weather}</div>
                    <div className="h-10 flex items-center text-slate-300">{place.bestTime}</div>
                    <div className="h-10 flex items-center text-green-400 font-mono">₹{place.dailyBudget.toLocaleString('en-IN')}/day</div>
                 </div>
               ))}
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

export default CompareModal;