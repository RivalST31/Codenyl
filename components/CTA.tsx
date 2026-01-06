import React, { useState } from 'react';
import { Button } from './Button';
import { Loader2, AlertCircle } from 'lucide-react';

interface AuthViewProps {
  mode: 'signup' | 'login';
  onLogin: (username: string) => void;
}

export const AuthView: React.FC<AuthViewProps> = ({ mode, onLogin }) => {
  const [step, setStep] = useState(mode === 'login' ? 2 : 0);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ username: '', goal: '' });

  const handleGoogleMock = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (mode === 'signup') setStep(1);
      else onLogin('User');
    }, 1500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (mode === 'signup') setStep(2); // Success state
      else onLogin(formData.username);
    }, 1500);
  };

  // Sign Up Flow
  if (mode === 'signup') {
    if (step === 0) {
      return (
        <div className="max-w-md mx-auto py-12 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-8">Join the System</h2>
          <Button 
            variant="secondary" 
            fullWidth 
            onClick={handleGoogleMock} 
            className="flex items-center gap-3 justify-center mb-4"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            )}
            Continue with Google
          </Button>
          <p className="text-xs text-slate-500 mt-4">
            By continuing, you agree to our Policies.
          </p>
        </div>
      );
    }
    if (step === 1) {
      return (
        <div className="max-w-md mx-auto py-12">
          <h2 className="text-2xl font-display font-bold text-white mb-6">Complete Setup</h2>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Username</label>
              <input 
                required
                type="text" 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
                placeholder="codenyl_user"
                value={formData.username}
                onChange={e => setFormData({...formData, username: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Where did you hear about us?</label>
              <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500">
                <option>Twitter</option>
                <option>GitHub</option>
                <option>Friend</option>
                <option>Other</option>
              </select>
            </div>
            <div>
               <label className="block text-sm font-medium text-slate-400 mb-2">Interests (Optional)</label>
               <div className="flex gap-3 flex-wrap">
                  {['Development', 'Design', 'AI', 'Gaming'].map(tag => (
                      <label key={tag} className="flex items-center gap-2 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 cursor-pointer hover:border-indigo-500">
                          <input type="checkbox" className="accent-indigo-500" />
                          <span className="text-sm text-slate-300">{tag}</span>
                      </label>
                  ))}
               </div>
            </div>
            <Button fullWidth disabled={loading}>
              {loading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Complete Signup'}
            </Button>
          </form>
        </div>
      );
    }
    if (step === 2) {
      return (
        <div className="max-w-md mx-auto py-12 text-center">
            <div className="w-16 h-16 bg-green-900/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
          <h2 className="text-2xl font-bold text-white mb-2">Account Created</h2>
          <p className="text-slate-400 mb-8">Welcome to the system, {formData.username}.</p>
          <Button fullWidth onClick={() => onLogin(formData.username)}>
            Enter Codenyl Store
          </Button>
        </div>
      );
    }
  }

  // Login Flow
  return (
    <div className="max-w-md mx-auto py-12">
      <h2 className="text-2xl font-display font-bold text-white mb-6 text-center">System Login</h2>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Email or Username</label>
          <input 
            required
            type="text" 
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-400 mb-2">Password</label>
          <input 
            required
            type="password" 
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
          />
        </div>
        <Button fullWidth disabled={loading}>
          {loading ? <Loader2 className="w-5 h-5 animate-spin mx-auto" /> : 'Login'}
        </Button>
        <div className="text-center">
            <span className="text-sm text-slate-500">No account? Switch tab to Signup</span>
        </div>
      </form>
    </div>
  );
};