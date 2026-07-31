import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES_DATA } from '../data/landingData';

export const Features: React.FC = () => {
  return (
    <section id="features" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="gradient-badge badge">
            <span>Core Capabilities</span>
          </div>
          <h2>
            Engineered for <span className="gradient-accent-text">Unrivaled Power</span> and Simplicity
          </h2>
          <p>
            FlowMind AI combines cutting-edge large language models with enterprise workflow orchestrations to automate your most complex business operations.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {FEATURES_DATA.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card"
                style={{
                  padding: '2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.5rem'
                }}
              >
                <div>
                  {/* Card Top Row */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '16px',
                        background: `rgba(${parseInt(feature.color.slice(1,3),16)}, ${parseInt(feature.color.slice(3,5),16)}, ${parseInt(feature.color.slice(5,7),16)}, 0.15)`,
                        border: `1px solid ${feature.color}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: feature.color,
                        boxShadow: `0 0 20px ${feature.color}30`
                      }}
                    >
                      <Icon style={{ width: '26px', height: '26px' }} />
                    </div>

                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-color)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {feature.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.975rem', lineHeight: '1.6' }}>
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Metric Pill */}
                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--border-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)'
                  }}
                >
                  <span>Impact Benchmark</span>
                  <span style={{ fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                    {feature.metrics}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
