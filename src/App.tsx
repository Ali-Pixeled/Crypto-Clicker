// src/App.tsx

import React from "react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "./config/wagmi";
import { WalletConnect } from "./components/WalletConnect";
import { ClickerGame } from "./components/ClickerGame";
import { Coins } from "lucide-react";

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
          <header className="fixed top-0 w-full bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Coins className="text-blue-500" size={32} />
                <h1 className="text-2xl font-bold text-gray-800">
                  Crypto Clicker
                </h1>
              </div>
              <WalletConnect />
            </div>
          </header>

          <main className="pt-24 pb-12 px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Click to Earn Tokens
                </h2>
                <p className="text-gray-600">
                  Connect your wallet and start clicking! Tokens will be
                  airdropped on listing date.
                </p>
              </div>

              <ClickerGame />

              <div className="mt-12 text-center text-sm text-gray-500">
                <p>More features coming soon:</p>
                <ul className="mt-2">
                  <li>• Telegram integration</li>
                  <li>• Token multipliers</li>
                  <li>• Leaderboard system</li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App; // Ensure this line is present
