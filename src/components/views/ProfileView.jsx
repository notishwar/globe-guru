import React, { useState } from 'react';
import { Settings, Mail } from 'lucide-react';
import { useToast } from '../../context/ToastContext';

const ProfileView = ({ user, bookings, onUpdateUser }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const { addToast } = useToast();

    const handleSave = (e) => {
        e.preventDefault();
        onUpdateUser({ ...user, name, email });
        addToast("Profile updated successfully!", 'success');
    };

    return (
        <div className="pt-24 pb-20 bg-slate-900 light:bg-slate-50 min-h-screen animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="font-playfair text-4xl font-bold text-white light:text-slate-900 mb-8">My Profile</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Stats Card */}
                    <div className="bg-slate-800 light:bg-white p-6 rounded-2xl border border-slate-700 light:border-slate-200 shadow-lg text-center h-fit">
                        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-slate-700 light:border-slate-200">
                            <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <h2 className="text-xl font-bold text-white light:text-slate-900 mb-1">{user.name}</h2>
                        <p className="text-slate-400 text-sm mb-6">{user.email}</p>
                        
                        <div className="grid grid-cols-2 gap-4 border-t border-slate-700 light:border-slate-200 pt-4">
                            <div>
                                <div className="text-2xl font-bold text-blue-400">{bookings.length}</div>
                                <div className="text-xs text-slate-500 uppercase font-bold">Trips</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-amber-400">0</div>
                                <div className="text-xs text-slate-500 uppercase font-bold">Reviews</div>
                            </div>
                        </div>
                    </div>

                    {/* Edit Form */}
                    <div className="md:col-span-2 bg-slate-800 light:bg-white p-8 rounded-2xl border border-slate-700 light:border-slate-200 shadow-lg">
                        <h3 className="text-xl font-bold text-white light:text-slate-900 mb-6 flex items-center gap-2">
                            <Settings className="w-5 h-5 text-slate-400" /> Account Settings
                        </h3>
                        <form onSubmit={handleSave} className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Full Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-slate-900 light:bg-slate-100 border border-slate-700 light:border-slate-300 rounded-lg p-3 text-white light:text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3.5 h-5 w-5 text-slate-500" />
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-slate-900 light:bg-slate-100 border border-slate-700 light:border-slate-300 rounded-lg p-3 pl-10 text-white light:text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                            </div>
                            <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileView;