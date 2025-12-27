import React, { useState, useEffect } from 'react';
import { useExchangeRates } from '../../hooks/useCustomHooks';
import { CURRENCIES } from '../../data/constants';

const CurrencyConverter = () => {
    const [amount, setAmount] = useState(100);
    const [fromCurr, setFromCurr] = useState('USD');
    const [toCurr, setToCurr] = useState('INR');
    const [result, setResult] = useState(null);
    const { rates, loading } = useExchangeRates(fromCurr);
  
    useEffect(() => {
      if (loading || !rates[toCurr]) return;
      setResult((amount * rates[toCurr]).toFixed(2));
    }, [amount, toCurr, rates, loading]);
  
    return (
      <section id="converter" className="py-24 px-4 bg-slate-900 light:bg-slate-50 flex justify-center transition-colors duration-300 print:hidden">
        <div className="w-full max-w-4xl bg-gradient-to-br from-slate-800 to-slate-900 light:from-white light:to-slate-100 rounded-3xl p-1 shadow-2xl border border-slate-700/50 light:border-slate-200">
          <div className="bg-slate-900/80 light:bg-white/80 backdrop-blur-xl rounded-[20px] p-8 md:p-12 border border-slate-800 light:border-slate-100 text-center">
            <h2 className="font-playfair text-3xl text-white light:text-slate-900 mb-8">Quick Currency Converter</h2>
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
               <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="bg-slate-800 light:bg-slate-200 text-white light:text-slate-900 p-4 rounded-xl w-full md:w-48" />
               <select value={fromCurr} onChange={(e) => setFromCurr(e.target.value)} className="bg-slate-800 light:bg-slate-200 text-white light:text-slate-900 p-4 rounded-xl">{CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}</select>
               <span className="text-slate-500">to</span>
               <select value={toCurr} onChange={(e) => setToCurr(e.target.value)} className="bg-slate-800 light:bg-slate-200 text-white light:text-slate-900 p-4 rounded-xl">{CURRENCIES.map(c => <option key={c.code} value={c.code}>{c.code}</option>)}</select>
            </div>
            <div className="mt-8 text-4xl font-bold text-blue-400">{result ? `${result} ${toCurr}` : '...'}</div>
          </div>
        </div>
      </section>
    );
};

export default CurrencyConverter;