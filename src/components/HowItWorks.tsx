import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMessageSquare, 
  FiCpu, 
  FiGitPullRequest, 
  FiDatabase, 
  FiCheckCircle, 
  FiArrowRight, 
  FiArrowDown,
  FiTerminal
} from 'react-icons/fi';
import { HOW_IT_WORKS_STEPS } from '../data/landingData';

export const HowItWorks: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  const stepIcons = [FiMessageSquare, FiCpu, FiGitPullRequest, FiDatabase, FiCheckCircle];

  return (
    <section id="how-it-works" className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="gradient-badge badge">
            <span>Seamless Architecture</span>
          </div>
          <h2>
            How <span className="gradient-accent-text">FlowMind AI</span> Operates
          </h2>
          <p>
            From simple webhook triggers to autonomous LLM multi-step execution and final database persistence—experience zero friction.
          </p>
        </div>

        {/* Horizontal & Vertical Flow Stepper */}
        <div style={{ position: 'relative', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.25rem',
              position: 'relative',
              zIndex: 1
            }}
          >
            {HOW_IT_WORKS_STEPS.map((stepItem, idx) => {
              const IconComponent = stepIcons[idx];
              const isSelected = selectedStep === idx;

              return (
                <div key={stepItem.step} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    onClick={() => setSelectedStep(idx)}
                    className="glass-card"
                    style={{
                      width: '100%',
                      padding: '1.5rem 1.25rem',
                      textAlign: 'center',
                      cursor: 'pointer',
                      border: isSelected ? '1px solid var(--accent-purple)' : '1px solid var(--border-color)',
                      background: isSelected ? 'rgba(139, 92, 246, 0.12)' : 'var(--bg-card)',
                      boxShadow: isSelected ? '0 0 25px rgba(139, 92, 246, 0.3)' : 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        margin: '0 auto 1rem auto',
                        background: isSelected ? 'var(--gradient-brand)' : 'var(--bg-tertiary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isSelected ? '#ffffff' : stepItem.color,
                        boxShadow: isSelected ? '0 0 20px rgba(139, 92, 246, 0.4)' : 'none'
                      }}
                    >
                      <IconComponent style={{ width: '22px', height: '22px' }} />
                    </div>

                    <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-purple-light)', fontFamily: 'var(--font-mono)' }}>
                      STEP {stepItem.step}
                    </span>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0.35rem 0' }}>
                      {stepItem.title}
                    </h4>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                      {stepItem.description}
                    </p>
                  </motion.div>

                  {/* Animated Down Arrow indicator for mobile view */}
                  {idx < HOW_IT_WORKS_STEPS.length - 1 && (
                    <div style={{ display: 'none', margin: '0.75rem 0' }} className="mobile-arrow">
                      <FiArrowDown style={{ color: 'var(--accent-purple)', fontSize: '1.25rem' }} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Deep-Dive Inspector Box */}
        <motion.div
          key={selectedStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="glass-card"
          style={{
            padding: '2rem',
            maxWidth: '920px',
            margin: '0 auto',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            background: 'var(--bg-card)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--accent-purple-light)', fontWeight: 700, fontSize: '0.9rem' }}>
            <FiTerminal style={{ fontSize: '1.2rem' }} />
            <span>Interactive Inspector — Step {HOW_IT_WORKS_STEPS[selectedStep].step}: {HOW_IT_WORKS_STEPS[selectedStep].title}</span>
          </div>

          <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            {HOW_IT_WORKS_STEPS[selectedStep].description}
          </p>

          <div
            style={{
              background: 'var(--bg-tertiary)',
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.875rem',
              color: '#38bdf8',
              overflowX: 'auto'
            }}
          >
            <code>{HOW_IT_WORKS_STEPS[selectedStep].detail}</code>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-arrow {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};
