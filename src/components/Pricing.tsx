import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiArrowRight, FiZap } from 'react-icons/fi';
import { PRICING_PLANS } from '../data/landingData';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="gradient-badge badge">
            <span>Flexible Plans</span>
          </div>
          <h2>
            Transparent Pricing for <span className="gradient-accent-text">Every Scale</span>
          </h2>
          <p>
            Start with our 14-day free trial. Upgrade or downgrade anytime with no hidden lock-in fees.
          </p>

          {/* Billing Interval Toggle */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'var(--bg-tertiary)',
              padding: '6px',
              borderRadius: '9999px',
              border: '1px solid var(--border-color)',
              marginTop: '2rem',
              gap: '6px'
            }}
          >
            <button
              onClick={() => setIsAnnual(false)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: !isAnnual ? '#ffffff' : 'var(--text-secondary)',
                background: !isAnnual ? 'var(--accent-purple)' : 'transparent',
                transition: 'all 0.25s ease'
              }}
            >
              Monthly Billing
            </button>

            <button
              onClick={() => setIsAnnual(true)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 600,
                color: isAnnual ? '#ffffff' : 'var(--text-secondary)',
                background: isAnnual ? 'var(--accent-purple)' : 'transparent',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span>Annual Billing</span>
              <span
                style={{
                  fontSize: '0.7rem',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  background: '#10b981',
                  color: '#ffffff',
                  fontWeight: 800
                }}
              >
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch'
          }}
        >
          {PRICING_PLANS.map((plan, idx) => {
            const price = typeof plan.monthlyPrice === 'number'
              ? isAnnual ? plan.annualPrice : plan.monthlyPrice
              : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="glass-card"
                style={{
                  padding: '2.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: plan.popular 
                    ? '2px solid var(--accent-purple)' 
                    : '1px solid var(--border-color)',
                  boxShadow: plan.popular 
                    ? '0 0 40px rgba(139, 92, 246, 0.3)' 
                    : 'var(--shadow-sm)',
                  position: 'relative',
                  transform: plan.popular ? 'scale(1.02)' : 'none'
                }}
              >
                {plan.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-14px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--gradient-brand)',
                      color: '#ffffff',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '4px 16px',
                      borderRadius: '9999px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)'
                    }}
                  >
                    ★ Most Popular
                  </div>
                )}

                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--accent-purple-light)', fontWeight: 700, marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                    {plan.badge}
                  </div>
                  <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                    {plan.name}
                  </h3>
                  <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: '1.5' }}>
                    {plan.description}
                  </p>

                  {/* Price Block */}
                  <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                    {typeof price === 'number' ? (
                      <>
                        <span style={{ fontSize: '3.25rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}>
                          ${price}
                        </span>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                          / month {isAnnual && '(billed annually)'}
                        </span>
                      </>
                    ) : (
                      <span style={{ fontSize: '2.75rem', fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1 }}>
                        Custom
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {plan.features.map(feat => (
                      <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.925rem', color: 'var(--text-primary)' }}>
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            background: 'rgba(16, 185, 129, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#10b981',
                            flexShrink: 0
                          }}
                        >
                          <FiCheck style={{ fontSize: '0.8rem' }} />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div style={{ marginTop: '2.25rem' }}>
                  <a
                    href="#contact"
                    className={plan.popular ? 'btn-primary' : 'btn-secondary'}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>{plan.ctaText}</span>
                    <FiArrowRight />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
