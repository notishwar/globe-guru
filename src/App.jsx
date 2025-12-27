import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { ToastProvider } from './context/ToastContext';
import { useLocalStorage, useTheme } from './hooks/useCustomHooks';
import { DESTINATIONS_DATA } from './data/constants';

// Layout & Components
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Destinations from './components/sections/Destinations';
import Blogs from './components/sections/Blogs';
import Reviews from './components/sections/Reviews';
import About from './components/sections/About';
import CurrencyConverter from './components/sections/CurrencyConverter';

// Views & Modals
import DestinationDetail from './components/views/DestinationDetail';
import MyTrips from './components/views/MyTrips';
import ProfileView from './components/views/ProfileView';
import AuthModal from './components/modals/AuthModal';
import BookingModal from './components/modals/BookingModal';
import ReceiptModal from './components/modals/ReceiptModal';
import CompareModal from './components/modals/CompareModal';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [view, setView] = useState('home'); 
  const [selectedDestination, setSelectedDestination] = useState(null);
  
  // User State
  const [user, setUser] = useLocalStorage('globeGuruUser', null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [favorites, setFavorites] = useLocalStorage('globeGuruFavorites', []);
  const [bookings, setBookings] = useLocalStorage('globeGuruBookings', []);
  
  // Booking & Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [receiptBooking, setReceiptBooking] = useState(null);
  
  // Compare State
  const [compareList, setCompareList] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

  // Handlers
  const handleLogin = (userData) => setUser(userData);
  const handleLogout = () => { setUser(null); setView('home'); };

  const toggleFavorite = (id) => {
    setFavorites(prev => prev.includes(id) ? prev.filter(fid => fid !== id) : [...prev, id]);
  };

  const toggleCompare = (id, clear = false) => {
    if (clear) { setCompareList([]); return; }
    setCompareList(prev => {
      if (prev.includes(id)) return prev.filter(cid => cid !== id);
      if (prev.length >= 3) return prev; 
      return [...prev, id];
    });
  };

  const handleViewDetail = (destination) => {
    setSelectedDestination(destination);
    setView('detail');
  };

  const handleBookClick = () => {
      if (!user) {
          setAuthModalOpen(true);
      } else {
          setBookingModalOpen(true);
      }
  };

  const confirmBooking = (bookingDetails) => {
      setBookings(prev => [bookingDetails, ...prev]);
  };

  const handleCancelBooking = (id) => {
      if (confirm('Are you sure you want to cancel this trip?')) {
          setBookings(prev => prev.filter(b => b.id !== id));
      }
  };

  const handleUpdateUser = (updatedUser) => {
      setUser(updatedUser);
  };

  const compareItems = DESTINATIONS_DATA.filter(d => compareList.includes(d.id));

  return (
    <ToastProvider>
        <div className={`min-h-screen font-sans selection:bg-blue-500 selection:text-white ${theme}`}>
        
        <Navigation 
            mobileMenuOpen={mobileMenuOpen} 
            setMobileMenuOpen={setMobileMenuOpen}
            user={user}
            onLoginClick={() => setAuthModalOpen(true)}
            onLogout={handleLogout}
            theme={theme}
            toggleTheme={toggleTheme}
            setView={setView}
        />
        
        {/* View Router Logic */}
        {view === 'home' && (
            <main className="bg-slate-900 light:bg-slate-50 transition-colors duration-300 print:hidden">
            <Hero />
            <div className="space-y-12">
                <Destinations 
                destinations={DESTINATIONS_DATA} 
                favorites={favorites} 
                toggleFavorite={toggleFavorite}
                onViewDetail={handleViewDetail}
                compareList={compareList}
                toggleCompare={toggleCompare}
                setShowCompare={setShowCompare}
                />
                <Blogs />
                <Reviews />
                <About />
                <CurrencyConverter />
            </div>
            <Footer />
            </main>
        )}

        {view === 'detail' && selectedDestination && (
            <>
                <DestinationDetail 
                destination={selectedDestination} 
                onBack={() => setView('home')}
                isFavorite={favorites.includes(selectedDestination.id)}
                onToggleFavorite={toggleFavorite}
                onBookClick={handleBookClick}
                />
                <Footer />
            </>
        )}

        {view === 'trips' && user && (
            <>
                <MyTrips 
                    bookings={bookings} 
                    onCancelBooking={handleCancelBooking} 
                    onViewReceipt={(booking) => setReceiptBooking(booking)}
                />
                <Footer />
            </>
        )}

        {view === 'profile' && user && (
            <>
                <ProfileView 
                    user={user} 
                    bookings={bookings} 
                    onUpdateUser={handleUpdateUser} 
                />
                <Footer />
            </>
        )}

        <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} onLogin={handleLogin} />
        
        <BookingModal 
            isOpen={bookingModalOpen} 
            onClose={() => setBookingModalOpen(false)} 
            destination={selectedDestination}
            onConfirm={confirmBooking}
            onNavigateToTrips={() => setView('trips')}
        />

        <ReceiptModal 
            booking={receiptBooking} 
            onClose={() => setReceiptBooking(null)} 
        />

        <CompareModal 
            isOpen={showCompare} 
            onClose={() => setShowCompare(false)} 
            items={compareItems} 
            onRemove={(id) => toggleCompare(id)}
        />

        </div>
        <Analytics />
    </ToastProvider>
  );
}