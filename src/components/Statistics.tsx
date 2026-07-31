import React from 'react';
import { motion } from 'framer-motion';
import { STATS_DATA } from '../data/landingData';

export const Statistics: React.FC = () => {
  return (
    <section id="stats" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div
          className="glass-card"
          style={{
            padding: '3.5rem 2rem',
            background: 'var(--gradient-brand-subtle)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            boxShadow: '0 0 50px rgba(139, 92, 246, 0.15)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '2.5rem',
              textAlign: 'center'
            }}
          >
            {STATS_DATA.map((stat, idx) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'rgba(139, 92, 246, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-purple-light)',
                      marginBottom: '1rem'
                    }}
                  >
                    <Icon style={{ width: '22px', height: '22px' }} />
                  </div>

                  <div
                    className="gradient-accent-text"
                    style={{
                      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                      marginBottom: '0.5rem',
                      fontFamily: 'var(--font-sans)'
                    }}
                  >
                    {stat.value}
                  </div>

                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                    {stat.label}
                  </div>

                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    {stat.subtext}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
