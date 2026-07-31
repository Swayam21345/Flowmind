import React from 'react';
import { TRUSTED_COMPANIES } from '../data/landingData';

export const TrustedCompanies: React.FC = () => {
  return (
    <section style={{ padding: '3.5rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <p style={{ textAlign: 'center', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '2rem' }}>
          Trusted by Engineering & Operations Teams at World-Class Companies
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.85
          }}
        >
          {TRUSTED_COMPANIES.map(company => (
            <div
              key={company.name}
              style={{
                textAlign: 'center',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: 'var(--text-secondary)',
                letterSpacing: '-0.02em',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
