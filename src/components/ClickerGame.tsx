import React from 'react';
import { MousePointer, Trophy } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

export const ClickerGame = () => {
  const { clicks, incrementClicks, walletConnected } = useGameStore();

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-6xl font-bold text-blue-600">{clicks}</div>
      
      <button
        onClick={incrementClicks}
        disabled={!walletConnected}
        className={`
          relative group w-48 h-48 rounded-full
          ${walletConnected 
            ? 'bg-blue-500 hover:bg-blue-600 active:scale-95' 
            : 'bg-gray-400 cursor-not-allowed'}
          transition-all duration-200 ease-in-out
          flex items-center justify-center
        `}
      >
        <MousePointer 
          size={64} 
          className={`text-white ${walletConnected ? 'group-hover:scale-110' : ''} transition-transform`}
        />
        {!walletConnected && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full">
            <span className="text-white text-center px-4">
              Connect wallet to play
            </span>
          </div>
        )}
      </button>

      <div className="flex flex-col items-center gap-2">
        <Trophy className="text-yellow-500" size={32} />
        <div className="text-lg font-semibold">
          Your high score: {clicks}
        </div>
      </div>
    </div>
  );
};