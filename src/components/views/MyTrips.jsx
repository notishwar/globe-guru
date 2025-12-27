import React from 'react';
import { Briefcase, Clock, Check, Trash2, CreditCard, FileText } from 'lucide-react';

const MyTrips = ({ bookings, onCancelBooking, onViewReceipt }) => {
    const todayStr = new Date().toISOString().split('T')[0];
    
    const upcoming = bookings
        .filter(b => b.date >= todayStr)
        .sort((a,b) => a.date.localeCompare(b.date));
        
    const past = bookings
        .filter(b => b.date < todayStr)
        .sort((a,b) => b.date.localeCompare(a.date));

    const TripCard = ({ booking, isPast }) => (
        <div className={`bg-slate-800 light:bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row border border-slate-700 light:border-slate-200 shadow-lg ${isPast ? 'opacity-70 grayscale-[0.5]' : ''}`}>
            <div className="md:w-64 h-48 md:h-auto relative">
                <img src={booking.img} alt={booking.title} className="w-full h-full object-cover" />
                <div className={`absolute top-2 left-2 text-white text-xs font-bold px-2 py-1 rounded ${isPast ? 'bg-slate-500' : 'bg-green-500'}`}>
                    {isPast ? 'Completed' : 'Upcoming'}
                </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white light:text-slate-900">{booking.title}</h3>
                    {!isPast && (
                        <button 
                            onClick={() => onCancelBooking(booking.id)} 
                            className="text-red-400 hover:text-red-300 p-1 rounded hover:bg-red-500/10 transition-colors"
                            title="Cancel Booking"
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>
                    )}
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                        <span className="text-slate-500 block text-xs uppercase font-bold">Date</span>
                        <span className="text-slate-300 light:text-slate-700">{booking.date}</span>
                    </div>
                    <div>
                        <span className="text-slate-500 block text-xs uppercase font-bold">Guests</span>
                        <span className="text-slate-300 light:text-slate-700">{booking.guests} People</span>
                    </div>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                    <CreditCard className="w-4 h-4" /> Total Paid: <span className="text-white light:text-slate-900 font-bold">₹{booking.total.toLocaleString('en-IN')}</span>
                </div>
            </div>
            <div className="bg-slate-900/50 light:bg-slate-100 p-6 flex items-center justify-center md:border-l border-slate-700 light:border-slate-200">
                <button 
                    onClick={() => onViewReceipt(booking)}
                    className="text-blue-400 font-bold hover:underline flex items-center gap-2"
                >
                    <FileText className="w-4 h-4" /> View Receipt
                </button>
            </div>
        </div>
    );

    return (
        <div className="pt-24 pb-20 bg-slate-900 light:bg-slate-50 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500 print:hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="font-playfair text-4xl font-bold text-white light:text-slate-900 mb-8">My Trips</h1>
                
                {bookings.length === 0 ? (
                    <div className="bg-slate-800/50 light:bg-white p-12 rounded-2xl border border-slate-700 light:border-slate-200 text-center">
                        <Briefcase className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white light:text-slate-900 mb-2">No Bookings Yet</h3>
                        <p className="text-slate-400 mb-6">Looks like you haven't planned any adventures yet.</p>
                        <button onClick={() => window.location.reload()} className="text-blue-400 hover:underline">Explore Destinations</button>
                    </div>
                ) : (
                    <div className="space-y-12">
                        {upcoming.length > 0 && (
                            <section>
                                <h2 className="text-xl font-bold text-white light:text-slate-900 mb-4 flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-blue-400" /> Upcoming Adventures
                                </h2>
                                <div className="space-y-6">
                                    {upcoming.map(b => <TripCard key={b.id} booking={b} />)}
                                </div>
                            </section>
                        )}

                        {past.length > 0 && (
                            <section>
                                <h2 className="text-xl font-bold text-slate-400 mb-4 flex items-center gap-2">
                                    <Check className="w-5 h-5" /> Past Trips
                                </h2>
                                <div className="space-y-6 opacity-80">
                                    {past.map(b => <TripCard key={b.id} booking={b} isPast={true} />)}
                                </div>
                            </section>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MyTrips;