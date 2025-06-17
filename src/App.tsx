import React, { useState, useEffect } from 'react';
import { Zap, TrendingUp, Users, DollarSign, Sparkles, RefreshCw, Twitter, Linkedin, ArrowRight } from 'lucide-react';

const buzzwords = [
  'AI-powered', 'Blockchain-enabled', 'IoT-connected', 'Machine Learning', 'Deep Learning',
  'Quantum-ready', 'Cloud-native', 'Serverless', 'Microservices-based', 'API-first',
  'Mobile-first', 'Voice-activated', 'AR/VR-enhanced', 'Cryptocurrency', 'NFT-backed'
];

const products = [
  'social network', 'productivity app', 'fitness tracker', 'dating platform', 'food delivery service',
  'ride-sharing app', 'meditation app', 'investment platform', 'learning management system',
  'project management tool', 'communication platform', 'e-commerce marketplace', 'streaming service',
  'virtual assistant', 'gaming platform', 'healthcare platform', 'sustainability tracker'
];

const targets = [
  'millennials', 'Gen Z', 'remote workers', 'digital nomads', 'entrepreneurs', 'influencers',
  'pet owners', 'gamers', 'fitness enthusiasts', 'foodies', 'travelers', 'students',
  'parents', 'seniors', 'investors', 'developers', 'content creators'
];

const metrics = [
  { value: '420%', label: 'User Growth' },
  { value: '$69M', label: 'Series A Raised' },
  { value: '1.3M', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime SLA' }
];

const testimonials = [
  {
    name: 'Chad Techbro',
    role: 'CEO, DisruptCorp',
    quote: 'This is literally going to change everything. I\'ve never seen anything like it.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Madison Venture',
    role: 'Partner, Innovation Capital',
    quote: 'We\'re seeing 10x potential here. This is the future of human interaction.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
  },
  {
    name: 'Blake Startup',
    role: 'Founder, NextGen Solutions',
    quote: 'I wish I had thought of this first. Pure genius meets execution.',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop&crop=face'
  }
];

function App() {
  const [currentIdea, setCurrentIdea] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateIdea = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const buzzword = buzzwords[Math.floor(Math.random() * buzzwords.length)];
      const product = products[Math.floor(Math.random() * products.length)];
      const target = targets[Math.floor(Math.random() * targets.length)];
      
      setCurrentIdea(`${buzzword} ${product} for ${target}`);
      setIsGenerating(false);
    }, 800);
  };

  useEffect(() => {
    generateIdea();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-yellow-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              StartupBullshit.today
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#generator" className="hover:text-yellow-400 transition-colors">Generator</a>
            <a href="#metrics" className="hover:text-yellow-400 transition-colors">Metrics</a>
            <a href="#testimonials" className="hover:text-yellow-400 transition-colors">Success Stories</a>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105">
              Get Funded
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Revolutionary Ideas
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                That Don't Exist Yet
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Generate the next billion-dollar startup idea with our proprietary algorithm. 
              Because innovation is just buzzwords + randomness.
            </p>
          </div>

          {/* Main Generator */}
          <div id="generator" className="mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-white/20 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Your Next Unicorn:</h2>
              
              <div className="bg-black/30 rounded-xl p-8 mb-8 min-h-[120px] flex items-center justify-center">
                {isGenerating ? (
                  <div className="flex items-center space-x-3">
                    <RefreshCw className="h-8 w-8 animate-spin text-yellow-400" />
                    <span className="text-xl">Disrupting reality...</span>
                  </div>
                ) : (
                  <h3 className="text-2xl md:text-4xl font-bold text-center leading-relaxed">
                    {currentIdea}
                  </h3>
                )}
              </div>

              <button
                onClick={generateIdea}
                disabled={isGenerating}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 mx-auto"
              >
                <Zap className="h-5 w-5" />
                <span>{isGenerating ? 'Generating...' : 'Generate New Idea'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section id="metrics" className="px-6 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Completely Real Metrics</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all">
                <div className="text-4xl font-bold text-yellow-400 mb-2">{metric.value}</div>
                <div className="text-blue-200">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our Bullshit?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all group">
              <TrendingUp className="h-12 w-12 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Exponential Growth</h3>
              <p className="text-blue-200">Our proprietary algorithm ensures hockey stick growth that defies all logic and market conditions.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all group">
              <Users className="h-12 w-12 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Viral by Design</h3>
              <p className="text-blue-200">Every idea is engineered for maximum shareability and minimum actual utility.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all group">
              <DollarSign className="h-12 w-12 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-4">Investor Magnet</h3>
              <p className="text-blue-200">Guaranteed to attract Series A funding or your credibility back.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="px-6 py-20 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">What Thought Leaders Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-yellow-400/50 transition-all">
                <p className="text-blue-200 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-blue-300">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Disrupt Everything?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Join thousands of entrepreneurs who have already revolutionized nothing with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>Start Disrupting Now</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center space-x-2">
              <span>Schedule Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sparkles className="h-6 w-6 text-yellow-400" />
              <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                StartupBullshit.today
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-blue-300 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-yellow-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <span className="text-sm text-blue-300">© 2024 StartupBullshit.today - Disrupting Reality Since Yesterday</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;