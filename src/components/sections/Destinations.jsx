import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Star, Heart, ArrowLeftRight, XCircle } from 'lucide-react';

const Destinations = React.memo(({ 
  destinations, favorites, toggleFavorite, 
  onViewDetail, compareList, toggleCompare, setShowCompare 
}) => {
  // Advanced Filter States
  const [filterOpen, setFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState(300000);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle Region Selection
  const toggleRegion = (region) => {
    setSelectedRegions(prev => 
      prev.includes(region) ? prev.filter(r => r !== region) : [...prev, region]
    );
  };

  // Filter & Sort Logic
  const filtered = useMemo(() => {
    let result = destinations.filter(d => {
       const matchesSearch = d.title.toLowerCase().includes(searchQuery.toLowerCase());
       const matchesPrice = d.price <= priceRange;
       const matchesRating = d.rating >= minRating;
       const matchesRegion = selectedRegions.length === 0 || selectedRegions.includes(d.region);
       return matchesSearch && matchesPrice && matchesRating && matchesRegion;
    });

    if (sortBy === 'price-asc') result.sort((a,b) => a.price - b.price);
    if (sortBy === 'price-desc') result.sort((a,b) => b.price - a.price);
    if (sortBy === 'rating') result.sort((a,b) => b.rating - a.rating);
    
    return result;
  }, [destinations, searchQuery, priceRange, minRating, selectedRegions, sortBy]);

  return (
    <section id="destinations" className="py-24 px-4 max-w-7xl mx-auto bg-slate-900 light:bg-slate-50 transition-colors duration-300 print:hidden">
      
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
        <div>
          <h2 className="font-playfair text-4xl text-white light:text-slate-900 mb-2">Explore Destinations</h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
             <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
             <input 
               type="text" 
               placeholder="Search..." 
               className="bg-slate-800 light:bg-white text-white light:text-slate-900 pl-10 pr-4 py-2.5 rounded-lg border border-slate-700 light:border-slate-300 w-full focus:ring-2 focus:ring-blue-500 outline-none"
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
             />
          </div>
          <button 
             onClick={() => setFilterOpen(!filterOpen)} 
             className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border transition-all ${filterOpen ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-700 text-slate-400 hover:border-blue-500 hover:text-blue-500'}`}
          >
             <SlidersHorizontal className="h-4 w-4" /> Filters
          </button>
        </div>
      </div>

      {/* Advanced Filter Panel */}
      {filterOpen && (
        <div className="mb-10 bg-slate-800/50 light:bg-white p-6 rounded-2xl border border-slate-700 light:border-slate-200 animate-in slide-in-from-top-4">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             <div>
                 <label className="text-xs font-bold text-slate-500 uppercase mb-3 block">Max Price: ₹{priceRange.toLocaleString('en-IN')}</label>
                 <input type="range" min="10000" max="300000" step="5000" value={priceRange} onChange={(e) => setPriceRange(Number(e.target.value))} className="w-full accent-blue-500 h-1 bg-slate-600 rounded-lg appearance-none cursor-pointer" />
                 <div className="flex justify-between text-xs text-slate-500 mt-2"><span>₹10k</span><span>₹3L+</span></div>
             </div>
             
             <div>
                 <label className="text-xs font-bold text-slate-500 uppercase mb-3 block">Regions</label>
                 <div className="flex flex-wrap gap-2">
                    {['Asia', 'Europe', 'America', 'Oceania', 'Africa'].map(r => (
                       <button key={r} onClick={() => toggleRegion(r)} className={`px-3 py-1 rounded-full text-xs border ${selectedRegions.includes(r) ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-600 text-slate-400'}`}>{r}</button>
                    ))}
                 </div>
             </div>

             <div>
                 <label className="text-xs font-bold text-slate-500 uppercase mb-3 block">Min Rating</label>
                 <div className="flex gap-2">
                    {[3, 4, 4.5].map(r => (
                       <button key={r} onClick={() => setMinRating(prev => prev === r ? 0 : r)} className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs border ${minRating === r ? 'bg-amber-500/20 border-amber-500 text-amber-500' : 'border-slate-600 text-slate-400'}`}>
                          {r}+ <Star className="h-3 w-3" />
                       </button>
                    ))}
                 </div>
             </div>

             <div>
                 <label className="text-xs font-bold text-slate-500 uppercase mb-3 block">Sort By</label>
                 <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="w-full bg-slate-900 light:bg-slate-100 border border-slate-700 rounded-lg p-2 text-sm text-white light:text-slate-900 outline-none">
                    <option value="popular">Popularity</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                 </select>
             </div>
           </div>
        </div>
      )}

      {/* Floating Compare Bar */}
      {compareList.length > 0 && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 bg-blue-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-4 animate-in slide-in-from-bottom-10 print:hidden">
           <span className="font-bold">{compareList.length} Selected</span>
           <button onClick={() => setShowCompare(true)} className="bg-white text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold hover:bg-blue-50">Compare Now</button>
           <button onClick={() => toggleCompare(null, true)} className="hover:text-blue-200"><XCircle className="h-5 w-5"/></button>
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((place, idx) => (
            <div 
              key={place.id} 
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-black/40 light:shadow-slate-300/50 bg-slate-800"
              onClick={() => onViewDetail(place)}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img src={place.img} alt={place.title} loading="lazy" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
              </div>
              
              {/* Card Actions */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
                 <button 
                   onClick={(e) => { e.stopPropagation(); toggleFavorite(place.id); }}
                   className="p-2 rounded-full bg-black/40 backdrop-blur-md hover:bg-black/60 transition-all"
                 >
                   <Heart className={`h-5 w-5 ${favorites.includes(place.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                 </button>
                 <button 
                   onClick={(e) => { e.stopPropagation(); toggleCompare(place.id); }}
                   className={`p-2 rounded-full backdrop-blur-md transition-all ${compareList.includes(place.id) ? 'bg-blue-600 text-white' : 'bg-black/40 text-white hover:bg-black/60'}`}
                   title="Compare"
                 >
                   <ArrowLeftRight className="h-5 w-5" />
                 </button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-amber-400 flex items-center gap-1 text-sm font-bold bg-black/30 backdrop-blur-md px-2 py-1 rounded-lg">
                    <Star className="h-3 w-3 fill-current" /> {place.rating}
                  </span>
                  <span className="text-blue-300 text-xs font-bold uppercase tracking-wider bg-blue-900/40 px-2 py-1 rounded backdrop-blur-sm border border-blue-500/20">
                    {place.region}
                  </span>
                </div>
                <h3 className="font-playfair text-2xl text-white mb-1">{place.title}</h3>
                <p className="text-slate-400 text-sm">Packages from ₹{place.price.toLocaleString('en-IN')}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
});

export default Destinations;