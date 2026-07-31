import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import { TESTIMONIALS_DATA } from '../data/landingData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <div className="gradient-badge badge">
            <span>Customer Stories</span>
          </div>
          <h2>
            Loved by <span className="gradient-accent-text">Innovators</span> Worldwide
          </h2>
          <p>
            See how forward-thinking technology companies deliver massive productivity gains using FlowMind AI.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}
        >
          {TESTIMONIALS_DATA.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
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
                {/* Rating & Quote Icon Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '4px', color: '#f59e0b' }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} style={{ fill: 'currentColor', fontSize: '1.05rem' }} />
                    ))}
                  </div>
                  <FaQuoteLeft style={{ color: 'var(--accent-purple-light)', fontSize: '1.5rem', opacity: 0.6 }} />
                </div>

                {/* Quote Content */}
                <p style={{ fontSize: '1rem', color: 'var(--text-primary)', lineHeight: '1.65', fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  "{testimonial.quote}"
                </p>

                {/* Highlight Badge */}
                <div
                  style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    color: '#10b981',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}
                >
                  ⚡ {testimonial.highlight}
                </div>
              </div>

              {/* Author Row */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--accent-purple)' }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>{testimonial.name}</div>
                  <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)' }}>{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
