import React, { useState, useEffect } from 'react';
import { XCircle, CreditCard, Lock, Loader2, Check, ChevronLeft } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

const BookingModal = ({ isOpen, onClose, destination, onConfirm, onNavigateToTrips }) => {
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const { addToast } = useToast();

  const minDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
      if (isOpen) {
          setStep(1);
          setGuests(1);
          setDate('');
      }
  }, [isOpen]);

  if (!isOpen || !destination) return null;

  const total = destination.price * guests;

  const handlePayment = (e) => {
      e.preventDefault();
      setIsProcessing(true);
      
      setTimeout(() => {
          setIsProcessing(false);
          onConfirm({
            id: Date.now(),
            destinationId: destination.id,
            title: destination.title,
            img: destination.img,
            date: date || 'Flexible',
            guests,
            total,
            status: 'Upcoming'
          });
          setStep(3);
          addToast('Booking successful! Enjoy your trip.', 'success');
      }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-slate-900 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 border border-slate-700">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white z-10"><XCircle /></button>
        
        {step === 1 && (
            <div className="p-8">
                <h2 className="text-2xl font-playfair font-bold text-white mb-6">Book Your Trip to <span className="text-blue-400">{destination.title}</span></h2>
                <div className="space-y-6">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Travel Date</label>
                        <input type="date" min={minDate} className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none" onChange={(e) => setDate(e.target.value)} value={date} />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Guests</label>
                        <div className="flex items-center gap-4">
                            <button onClick={() => setGuests(Math.max(1, guests-1))} className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700">-</button>
                            <span className="text-xl font-bold text-white w-8 text-center">{guests}</span>
                            <button onClick={() => setGuests(guests+1)} className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700">+</button>
                        </div>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-xl flex justify-between items-center border border-slate-700">
                        <span className="text-slate-400">Total Estimate</span>
                        <span className="text-2xl font-bold text-white">₹{total.toLocaleString('en-IN')}</span>
                    </div>
                    <button onClick={() => setStep(2)} disabled={!date} className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-colors">Continue to Payment</button>
                </div>
            </div>
        )}

        {step === 2 && (
            <div className="p-8">
                <div className="flex items-center gap-2 mb-6">
                    <button onClick={() => setStep(1)} className="text-slate-400 hover:text-white"><ChevronLeft className="w-5 h-5"/></button>
                    <h2 className="text-2xl font-bold text-white">Payment Details</h2>
                </div>
                <form onSubmit={handlePayment} className="space-y-4">
                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 mb-6">
                        <div className="flex justify-between text-sm mb-1">
                            <span className="text-slate-400">Total Due</span>
                            <span className="text-white font-bold">₹{total.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="text-xs text-slate-500">Secure 256-bit SSL Encryption</div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Card Number</label>
                        <div className="relative">
                            <CreditCard className="absolute left-3 top-3.5 h-5 w-5 text-slate-500" />
                            <input required type="text" placeholder="0000 0000 0000 0000" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 pl-10 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Expiry</label>
                            <input required type="text" placeholder="MM/YY" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">CVV</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3.5 h-4 w-4 text-slate-500" />
                                <input required type="text" placeholder="123" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 pl-10 text-white focus:ring-2 focus:ring-blue-500 outline-none" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" disabled={isProcessing} className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4">
                        {isProcessing ? <Loader2 className="animate-spin" /> : `Pay ₹${total.toLocaleString('en-IN')}`}
                    </button>
                </form>
            </div>
        )}

        {step === 3 && (
            <div className="p-8 text-center animate-in fade-in zoom-in-95">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Booking Confirmed!</h2>
                <p className="text-slate-400 mb-8">Your adventure to <strong>{destination.title}</strong> is locked in.</p>
                <div className="bg-slate-800 p-6 rounded-xl mb-8 text-left border border-slate-700">
                    <div className="flex justify-between mb-3 border-b border-slate-700 pb-3">
                        <span className="text-slate-500">Destination</span>
                        <span className="text-white font-bold">{destination.title}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-slate-500">Date</span>
                        <span className="text-white">{date}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-500">Guests</span>
                        <span className="text-white">{guests}</span>
                    </div>
                </div>
                <button onClick={() => { onClose(); onNavigateToTrips(); }} className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-xl transition-colors">Go to My Trips</button>
            </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;