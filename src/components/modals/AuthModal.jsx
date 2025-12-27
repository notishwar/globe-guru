import React, { useState } from 'react';
import { XCircle } from 'lucide-react';
import FocusTrap from '../common/FocusTrap';
import { useToast } from '../../context/ToastContext';

const AuthModal = ({ isOpen, onClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const { addToast } = useToast();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      onLogin({ 
        name: isLogin ? 'Demo User' : formData.name, 
        email: formData.email,
        id: 'u123',
        avatar: `https://i.pravatar.cc/150?u=${formData.email}`
      });
      addToast(`Welcome back, ${isLogin ? 'Demo User' : formData.name}!`, 'success');
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <FocusTrap isActive={isOpen} onClose={onClose}>
        <div className="relative bg-slate-900 border border-slate-700 w-full max-w-md p-8 rounded-2xl shadow-2xl animate-in zoom-in-95">
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white"><XCircle /></button>
          <h2 className="text-2xl font-playfair font-bold text-white mb-2">{isLogin ? 'Welcome Back' : 'Join Globe Guru'}</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Name</label>
                <input required type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none" 
                  value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
            )}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Email</label>
              <input required type="email" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none" 
                value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Password</label>
              <input required type="password" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 outline-none" 
                value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-colors">
              {isLogin ? 'Log In' : 'Sign Up'}
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-slate-400">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={() => setIsLogin(!isLogin)} className="text-blue-400 font-semibold hover:underline">
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </div>
        </div>
      </FocusTrap>
    </div>
  );
};

export default AuthModal;