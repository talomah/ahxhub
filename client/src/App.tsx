import React from 'react';
import { Router, Route, Switch } from 'wouter';

function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-red-500/20 bg-black/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-red-500" style={{ fontFamily: 'Orbitron, monospace' }}>
              AHX HUB
            </h1>
            <nav className="flex space-x-6">
              <a href="/" className="text-white hover:text-red-500 transition-colors">Home</a>
              <a href="/products" className="text-white hover:text-red-500 transition-colors">Products</a>
              <a href="/discord" className="text-white hover:text-red-500 transition-colors">Discord</a>
              <a href="/services" className="text-white hover:text-red-500 transition-colors">Services</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Orbitron, monospace' }}>
            Premium <span className="text-red-500">Roblox Assets</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover elite Roblox premium assets, scripts, and tools. 
            Join thousands of developers who trust AHX Hub for quality content.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Browse Products
            </button>
            <button className="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Join Discord
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-900/50 border border-red-500/20 rounded-lg p-6 text-center">
            <div className="text-red-500 text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-400">Hand-picked, tested assets that meet our high standards</p>
          </div>
          <div className="bg-gray-900/50 border border-red-500/20 rounded-lg p-6 text-center">
            <div className="text-red-500 text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure Delivery</h3>
            <p className="text-gray-400">Instant delivery through our automated Discord system</p>
          </div>
          <div className="bg-gray-900/50 border border-red-500/20 rounded-lg p-6 text-center">
            <div className="text-red-500 text-4xl mb-4">💎</div>
            <h3 className="text-xl font-semibold mb-2">Elite Community</h3>
            <p className="text-gray-400">Join our exclusive community of top Roblox developers</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-red-500/20 bg-black/90 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-gray-400">© 2025 AHX Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route>
          <div className="min-h-screen bg-black text-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
              <p className="text-gray-400">Page not found</p>
              <a href="/" className="text-red-500 hover:underline mt-4 inline-block">
                Go back home
              </a>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;