import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { Wallet, LogOut } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

export const WalletConnect = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const setWalletConnected = useGameStore((state) => state.setWalletConnected);

  React.useEffect(() => {
    setWalletConnected(isConnected);
  }, [isConnected, setWalletConnected]);

  if (isConnected) {
    return (
      <button
        onClick={() => disconnect()}
        className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        <LogOut size={20} />
        <span className="hidden sm:inline">
          {address?.slice(0, 6)}...{address?.slice(-4)}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={() => connect({ connector: injected() })}
      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
    >
      <Wallet size={20} />
      <span>Connect Wallet</span>
    </button>
  );
};