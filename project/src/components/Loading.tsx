import { Sparkles } from 'lucide-react';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative inline-block mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-rose-400 via-pink-500 to-rose-600 rounded-full w-24 h-24 flex items-center justify-center shadow-2xl animate-scale-in">
            <Sparkles className="w-12 h-12 text-white animate-pulse" />
          </div>
        </div>
        <p className="text-xl font-semibold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
          Loading...
        </p>
      </div>
    </div>
  );
}

