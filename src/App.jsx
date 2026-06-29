import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Technology from './components/Technology';
import HowItWorks from './components/HowItWorks';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';
import Validators from './components/Validators';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Cinematic Loading Overlay */}
      <LoadingScreen onFinished={() => setLoading(false)} />

      {!loading && (
        <div className="relative min-h-screen bg-[#03000a] text-purple-100 overflow-x-hidden selection:bg-cyan-400/30 selection:text-cyan-200">
          
          {/* Cyber Cursor Tracker */}
          <CustomCursor />

          {/* Background Ambient Visual Grid & Noise */}
          <div className="fixed inset-0 grid-bg opacity-30 z-0 pointer-events-none" />
          <div className="fixed inset-0 noise-overlay pointer-events-none z-10" />

          {/* Glowing Background Blob Vectors */}
          <div className="fixed w-[800px] h-[800px] bg-purple-900/5 rounded-full blur-[160px] top-1/4 -left-1/4 pointer-events-none z-0 animate-blob-slow" />
          <div className="fixed w-[700px] h-[700px] bg-cyan-900/5 rounded-full blur-[140px] bottom-1/4 -right-1/4 pointer-events-none z-0 animate-blob-slow" style={{ animationDelay: '5s' }} />

          {/* Navbar wrapper */}
          <Navbar />

          {/* Section components */}
          <main className="relative z-10">
            <Hero />
            <Stats />
            <Features />
            <Technology />
            <HowItWorks />
            <Roadmap />
            <Tokenomics />
            <Validators />
            <Testimonials />
            <FAQ />
          </main>

          {/* Footer wrapper */}
          <Footer />
        </div>
      )}
    </>
  );
}
