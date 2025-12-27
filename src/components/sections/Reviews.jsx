import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS_DATA } from '../../data/constants';

const Reviews = () => {
    return (
      <section id="reviews" className="py-24 bg-slate-800 light:bg-slate-100 transition-colors duration-300 print:hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-playfair text-4xl text-white light:text-slate-900 mb-12 text-center">Traveler <span className="text-amber-400">Stories</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REVIEWS_DATA.map((review) => (
                  <div key={review.id} className="bg-white/5 light:bg-white backdrop-blur-md border border-white/10 light:border-slate-200 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                      <div className="flex justify-between items-start mb-6">
                          <div className="flex gap-1 text-amber-400">
                              {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                          </div>
                      </div>
                      <p className="text-slate-300 light:text-slate-600 mb-8 italic">"{review.text}"</p>
                      <div className="flex items-center gap-4 pt-6 border-t border-white/10 light:border-slate-200">
                          <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full" />
                          <div>
                              <h4 className="text-white light:text-slate-900 font-semibold">{review.name}</h4>
                              <p className="text-blue-400 light:text-blue-600 text-xs font-medium">{review.role}</p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
        </div>
      </section>
    );
};

export default Reviews;