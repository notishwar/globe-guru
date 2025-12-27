import React from 'react';
import { X, Globe, Printer, Download } from 'lucide-react';

const ReceiptModal = ({ booking, onClose }) => {
    if (!booking) return null;

    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 print:p-0 print:absolute print:inset-0 print:block">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm print:hidden" onClick={onClose}></div>
            <div className="relative bg-white w-full max-w-md rounded-lg overflow-hidden shadow-2xl animate-in zoom-in-95 print:shadow-none print:w-full print:max-w-none print:rounded-none">
                <div className="p-8 bg-slate-50 border-b border-slate-200 flex justify-between items-start print:bg-white print:border-b-2">
                    <div>
                        <div className="text-2xl font-bold text-slate-900 mb-1 flex items-center gap-2"><Globe className="text-blue-600 w-6 h-6"/> Globe Guru</div>
                        <div className="text-xs text-slate-500 uppercase tracking-widest">Official Receipt</div>
                    </div>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600 print:hidden"><X className="w-6 h-6"/></button>
                </div>
                
                <div className="p-8 space-y-6">
                    <div className="text-center">
                        <div className="text-sm text-slate-500 mb-1">Total Paid</div>
                        <div className="text-4xl font-bold text-slate-900">₹{booking.total.toLocaleString('en-IN')}</div>
                        <div className="text-xs text-slate-400 mt-2">Transaction ID: #{booking.id}</div>
                    </div>

                    <div className="border-t border-b border-slate-100 py-6 space-y-4 print:border-slate-300">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600 font-medium">Destination</span>
                            <span className="text-slate-900 font-bold">{booking.title}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600 font-medium">Date</span>
                            <span className="text-slate-900 font-bold">{booking.date}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-600 font-medium">Travelers</span>
                            <span className="text-slate-900 font-bold">{booking.guests} Adults</span>
                        </div>
                    </div>

                    <div className="flex gap-3 print:hidden">
                        <button onClick={handlePrint} className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                            <Printer className="w-4 h-4" /> Print
                        </button>
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                            <Download className="w-4 h-4" /> Save PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReceiptModal;