import React, { useState } from 'react';
import { Calendar, ChevronRight, XCircle } from 'lucide-react';
import { BLOG_DATA } from '../../data/constants';

const Blogs = () => {
    const [activePost, setActivePost] = useState(null);
  
    return (
      <section id="blogs" className="py-20 px-4 max-w-7xl mx-auto bg-slate-900 light:bg-slate-50 transition-colors duration-300 print:hidden">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl text-white light:text-slate-900 mb-4">Travel <span className="text-blue-500 italic">Journals</span></h2>
          <p className="text-slate-400 light:text-slate-600 max-w-2xl mx-auto">Expert tips, detailed itineraries, and inspiring stories.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {BLOG_DATA.map((post) => (
            <div key={post.id} className="bg-slate-800/30 light:bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-slate-700/50 light:border-slate-200 group hover:-translate-y-2 flex flex-col">
              <div className="h-52 overflow-hidden relative flex-shrink-0 bg-slate-800">
                <img src={post.img} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-blue-400 mb-3 gap-2 font-medium">
                  <Calendar className="h-3 w-3" /> {post.date}
                </div>
                <h3 className="text-xl font-bold text-slate-100 light:text-slate-900 mb-3 group-hover:text-blue-500 transition-colors font-playfair">{post.title}</h3>
                <p className="text-slate-400 light:text-slate-600 text-sm mb-6 line-clamp-2 leading-relaxed">{post.desc}</p>
                <div className="mt-auto">
                  <button onClick={() => setActivePost(post)} className="text-sm font-semibold text-white light:text-slate-800 flex items-center gap-2 group-hover:gap-3 transition-all hover:text-blue-400 light:hover:text-blue-600">
                    Read More <ChevronRight className="h-4 w-4 text-blue-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {activePost && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={() => setActivePost(null)}></div>
            <div className="bg-slate-900 light:bg-white border border-slate-700 light:border-slate-200 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl relative z-10 shadow-2xl animate-in zoom-in-95">
              <button onClick={() => setActivePost(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800/50 rounded-full p-2 z-20"><XCircle className="h-8 w-8" /></button>
              <div className="h-64 w-full relative">
                <img src={activePost.img} alt={activePost.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 light:from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                   <h3 className="text-3xl font-playfair font-bold text-white">{activePost.title}</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-slate-300 light:text-slate-700 leading-8 text-lg">{activePost.content}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    );
};

export default Blogs;