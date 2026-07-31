import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheckCircle, FiMail, FiUser, FiBriefcase, FiMessageSquare } from 'react-icons/fi';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    companySize: '10-50 employees',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div
            className="glass-card"
            style={{
              padding: '3.5rem 2.5rem',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              boxShadow: '0 0 50px rgba(139, 92, 246, 0.15)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div className="gradient-badge badge" style={{ marginBottom: '1rem' }}>
                <span>Get In Touch</span>
              </div>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                Ready to Automate Your Workflows?
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
                Speak with our AI automation engineers to discuss custom enterprise integrations or request a live platform demonstration.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  textAlign: 'center',
                  padding: '3rem 1.5rem',
                  background: 'rgba(16, 185, 129, 0.1)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}
              >
                <FiCheckCircle style={{ fontSize: '3.5rem', color: '#10b981', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  Demo Request Received!
                </h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
                  Thank you, <strong>{formData.name}</strong>. Our solutions team will reach out to <strong>{formData.email}</strong> within 2 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', companySize: '10-50 employees', message: '' }); }}
                  className="btn-secondary"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                  {/* Name Input */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Full Name *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <FiUser style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1rem 0.85rem 2.75rem',
                          borderRadius: 'var(--radius-md)',
                          background: 'var(--bg-tertiary)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-primary)',
                          outline: 'none',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Work Email *
                    </label>
                    <div style={{ position: 'relative' }}>
                      <FiMail style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1rem 0.85rem 2.75rem',
                          borderRadius: 'var(--radius-md)',
                          background: 'var(--bg-tertiary)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-primary)',
                          outline: 'none',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
                  {/* Company Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Company Name
                    </label>
                    <div style={{ position: 'relative' }}>
                      <FiBriefcase style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={e => setFormData({ ...formData, company: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1rem 0.85rem 2.75rem',
                          borderRadius: 'var(--radius-md)',
                          background: 'var(--bg-tertiary)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-primary)',
                          outline: 'none',
                          fontSize: '0.95rem'
                        }}
                      />
                    </div>
                  </div>

                  {/* Company Size */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Company Size
                    </label>
                    <select
                      value={formData.companySize}
                      onChange={e => setFormData({ ...formData, companySize: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        fontSize: '0.95rem'
                      }}
                    >
                      <option value="1-10 employees">1-10 employees</option>
                      <option value="10-50 employees">10-50 employees</option>
                      <option value="50-250 employees">50-250 employees</option>
                      <option value="250+ employees">250+ enterprise employees</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    What would you like to automate?
                  </label>
                  <div style={{ position: 'relative' }}>
                    <FiMessageSquare style={{ position: 'absolute', left: '1rem', top: '1rem', color: 'var(--text-muted)' }} />
                    <textarea
                      rows={4}
                      placeholder="Tell us about your current workflow bottlenecks or AI automation goals..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1rem 0.85rem 2.75rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'var(--bg-tertiary)',
                        border: '1px solid var(--border-color)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                        fontSize: '0.95rem',
                        resize: 'vertical'
                      }}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: '100%', padding: '1rem', marginTop: '0.5rem', fontSize: '1.05rem' }}
                >
                  {loading ? (
                    <span>Processing Demo Request...</span>
                  ) : (
                    <>
                      <span>Book Live Demo</span>
                      <FiSend />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
