import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Tiko } from './components/Tiko';
import { HomeView } from './components/Hero';
import { ProductsView } from './components/Ecosystem';
import { TextView } from './components/ReadingSection';
import { MembershipView } from './components/Stats';
import { NewsView } from './components/Features';
import { AuthView } from './components/CTA';
import { PAGE_TEXT } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showTiko, setShowTiko] = useState(false);
  const [user, setUser] = useState<{name: string} | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleLogin = (username: string) => {
    setUser({ name: username });
    setActiveTab('products'); // Redirect to products or store
  };

  const handleProductClick = () => {
    if (!user) {
      setModalMessage("Connect to Codenyl to continue.");
      setShowLoginModal(true);
    } else {
      // Logic to open product (mock)
      console.log("Opening product...");
    }
  };

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return <HomeView onNavigate={setActiveTab} />;
      case 'origin':
        return <TextView title={PAGE_TEXT.origin.title} content={PAGE_TEXT.origin.content} />;
      case 'products':
        return <ProductsView onProductClick={handleProductClick} />;
      case 'creator':
        return <TextView title={PAGE_TEXT.creator.title} content={PAGE_TEXT.creator.content} />;
      case 'philosophy':
        return <TextView title={PAGE_TEXT.philosophy.title} content={PAGE_TEXT.philosophy.content} />;
      case 'policies':
        return <TextView title={PAGE_TEXT.policies.title} content={PAGE_TEXT.policies.content} />;
      case 'membership':
        return <MembershipView onSubscribe={() => setActiveTab('signup')} />;
      case 'news':
        return <NewsView />;
      case 'signup':
        return <AuthView mode="signup" onLogin={handleLogin} />;
      case 'login':
        return <AuthView mode="login" onLogin={handleLogin} />;
      default:
        return <HomeView onNavigate={setActiveTab} />;
    }
  };

  // Reset scroll on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="bg-slate-950 min-h-screen text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} onTikoClick={() => setShowTiko(true)} />
      <Tiko isOpen={showTiko} onClose={() => setShowTiko(false)} />
      
      <main className="pt-32 pb-20 min-h-[calc(100vh-200px)] animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {renderContent()}
        </div>
      </main>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-sm">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl max-w-sm w-full text-center shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Access Restricted</h3>
            <p className="text-slate-400 mb-8">{modalMessage}</p>
            <div className="flex gap-4 justify-center">
              <button 
                onClick={() => setShowLoginModal(false)}
                className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => { setShowLoginModal(false); setActiveTab('signup'); }}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition-colors font-medium"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer activeTab={activeTab} />
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;