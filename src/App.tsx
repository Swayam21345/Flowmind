import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedCompanies } from './components/TrustedCompanies';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Statistics } from './components/Statistics';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Hero />
          <TrustedCompanies />
          <Features />
          <HowItWorks />
          <Statistics />
          <Testimonials />
          <Pricing />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
