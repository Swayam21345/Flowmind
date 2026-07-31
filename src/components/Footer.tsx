import React from 'react';
import { FiCpu, FiGithub, FiTwitter, FiLinkedin, FiDisc, FiCheckCircle, FiArrowRight } from 'react-icons/fi';

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '5rem',
        paddingBottom: '3rem',
        position: 'relative'
      }}
    >
      <div className="container">
        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem'
          }}
        >
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 2' }}>
            <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontWeight: 800, fontSize: '1.4rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '12px',
                  background: 'var(--gradient-brand)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <FiCpu style={{ width: '20px', height: '20px' }} />
              </div>
              <span className="gradient-text">FlowMind AI</span>
            </a>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', maxWidth: '340px' }}>
              Next-generation AI workflow automation platform empowering businesses to automate complex operational pipelines in seconds.
            </p>

            {/* Live Status Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '6px 14px', borderRadius: '9999px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#10b981', fontSize: '0.825rem', fontWeight: 600 }}>
              <FiCheckCircle />
              <span>All Systems Operational (99.99%)</span>
            </div>
          </div>

          {/* Column 1: Product */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Product
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li><a href="#features">AI Autonomous Agents</a></li>
              <li><a href="#features">Visual Workflow Builder</a></li>
              <li><a href="#features">500+ API Connectors</a></li>
              <li><a href="#features">Real-Time Analytics</a></li>
              <li><a href="#pricing">Enterprise Security</a></li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li><a href="#">Lead Qualification</a></li>
              <li><a href="#">Customer Support AI</a></li>
              <li><a href="#">Data ETL Pipelines</a></li>
              <li><a href="#">Financial Operations</a></li>
              <li><a href="#">Developer SDKs</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers (We're Hiring!)</a></li>
              <li><a href="#">Blog & News</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          style={{
            borderTop: '1px solid var(--border-color)',
            paddingTop: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            color: 'var(--text-muted)',
            fontSize: '0.875rem'
          }}
        >
          <div>
            © {new Date().getFullYear()} FlowMind AI Inc. All rights reserved. Designed for linear precision.
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', gap: '1.25rem', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
            <a href="#" aria-label="GitHub"><FiGithub /></a>
            <a href="#" aria-label="Twitter"><FiTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="#" aria-label="Discord"><FiDisc /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};
