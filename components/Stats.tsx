import React from 'react';
import { MEMBERSHIP_PLANS } from '../constants';
import { Check } from 'lucide-react';
import { Button } from './Button';

interface MembershipViewProps {
  onSubscribe: () => void;
}

export const MembershipView: React.FC<MembershipViewProps> = ({ onSubscribe }) => {
  return (
    <div className="py-8">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl font-bold text-white mb-4">Membership Plans</h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Membership provides access to all Codenyl tools and apps. 
          <br />
          <span className="text-red-400 font-medium">All payments are irreversible.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MEMBERSHIP_PLANS.map((plan) => (
          <div 
            key={plan.name}
            className={`
              relative p-6 rounded-2xl border flex flex-col
              ${plan.name === 'Supportership' 
                ? 'bg-indigo-950/20 border-indigo-500/50 shadow-lg shadow-indigo-900/10' 
                : 'bg-slate-900/50 border-slate-800'
              }
            `}
          >
            {plan.name === 'Supportership' && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-indigo-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                Recommended
              </div>
            )}
            
            <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
            <div className="text-3xl font-display font-bold text-indigo-400 mb-6">{plan.price}</div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <Check className="w-4 h-4 text-green-400 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              variant={plan.name === 'Supportership' ? 'primary' : 'outline'}
              size="sm"
              fullWidth
              onClick={onSubscribe}
            >
              Get Membership
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};