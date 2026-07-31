import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FiPlay, 
  FiZap, 
  FiArrowRight, 
  FiCpu, 
  FiCheckCircle, 
  FiGitCommit, 
  FiActivity, 
  FiLayers, 
  FiShield 
} from 'react-icons/fi';
import Lottie from 'lottie-react';

// Sleek lightweight fallback vector animation data for Lottie component
const lottieAnimationData = {
  v: "5.7.1",
  fr: 30,
  ip: 0,
  op: 60,
  w: 100,
  h: 100,
  nm: "AI Workflow",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Pulse Ring",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [100] }, { t: 30, s: [30] }, { t: 60, s: [100] }] },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [50, 50, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [80, 80] }, { t: 30, s: [110, 110] }, { t: 60, s: [80, 80] }] }
      },
      shapes: [
        {
          ty: "el",
          d: 1,
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [60, 60] }
        },
        {
          ty: "st",
          c: { a: 0, k: [0.54, 0.36, 0.96, 1] },
          w: { a: 0, k: 4 }
        }
      ]
    }
  ]
};

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'flow' | 'json' | 'logs'>('flow');
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const workflowSteps = [
    { id: 0, label: 'Trigger Event', sub: 'Incoming Webhook / Email', icon: FiZap, status: 'Completed', latency: '12ms' },
    { id: 1, label: 'LLM Agent Logic', sub: 'GPT-4o Reasoning Chain', icon: FiCpu, status: 'Active', latency: '140ms' },
    { id: 2, label: 'API Connectors', sub: 'Fetch HubSpot & Stripe', icon: FiLayers, status: 'Pending', latency: '45ms' },
    { id: 3, label: 'Action & Response', sub: 'Slack Alert & PostgreSQL', icon: FiCheckCircle, status: 'Pending', latency: '18ms' }
  ];

  return (
    <section style={{ position: 'relative', overflow: 'hidden', paddingTop: '4rem', paddingBottom: '6rem' }}>
      <div className="bg-ambient-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.75rem' }}
        >
          <div className="gradient-badge">
            <FiZap style={{ width: '14px', height: '14px' }} />
            <span>Next-Gen Autonomous AI Workflows 2.0</span>
          </div>
        </motion.div>

        {/* Main Headline & Subheading */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '1.5rem'
            }}
          >
            Automate Your Business <br />
            <span className="gradient-accent-text">with Intelligent AI Workflows</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              maxWidth: '740px',
              margin: '0 auto 2.5rem auto'
            }}
          >
            Build intelligent workflows, AI agents, and automations without complexity. Connect APIs, LLMs, and enterprise tools in seconds.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}
          >
            <a href="#pricing" className="btn-primary" style={{ padding: '1rem 2.25rem', fontSize: '1.05rem' }}>
              <span>Get Started Free</span>
              <FiArrowRight style={{ fontSize: '1.1rem' }} />
            </a>

            <a href="#how-it-works" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}>
              <FiPlay style={{ fill: 'currentColor', fontSize: '0.9rem' }} />
              <span>Book Demo</span>
            </a>
          </motion.div>
        </div>

        {/* Interactive Dashboard / Vector Lottie Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ marginTop: '4.5rem', position: 'relative' }}
        >
          <div
            className="glass-card"
            style={{
              padding: '1.75rem',
              border: '1px solid rgba(139, 92, 246, 0.25)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(139, 92, 246, 0.15)',
              maxWidth: '1080px',
              margin: '0 auto'
            }}
          >
            {/* Dashboard Header Bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                </div>
                <div style={{ height: '16px', width: '1px', background: 'var(--border-color)' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <FiActivity style={{ color: '#10b981' }} /> flowmind://agent-pipeline-live
                </span>
              </div>

              {/* View Tabs */}
              <div style={{ display: 'flex', background: 'var(--bg-tertiary)', padding: '4px', borderRadius: '8px', gap: '4px' }}>
                {(['flow', 'json', 'logs'] as const).map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                      padding: '0.35rem 0.85rem',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: activeTab === tab ? '#ffffff' : 'var(--text-secondary)',
                      background: activeTab === tab ? 'var(--accent-purple)' : 'transparent',
                      transition: 'all 0.2s ease',
                      textTransform: 'uppercase'
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Display */}
            {activeTab === 'flow' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    <Lottie animationData={lottieAnimationData} style={{ width: '28px', height: '28px' }} loop={true} />
                    <span>Real-Time Autonomous Execution Pipeline</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#10b981', background: 'rgba(16, 185, 129, 0.15)', padding: '2px 10px', borderRadius: '12px', border: '1px solid rgba(16, 185, 129, 0.3)', fontWeight: 600 }}>
                    ● Live Streaming (215ms)
                  </span>
                </div>

                {/* Nodes Canvas */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', position: 'relative' }}>
                  {workflowSteps.map((step, idx) => {
                    const Icon = step.icon;
                    const isActive = activeStep === idx;
                    const isPassed = activeStep > idx;

                    return (
                      <div
                        key={step.id}
                        onClick={() => setActiveStep(idx)}
                        style={{
                          padding: '1.25rem',
                          borderRadius: 'var(--radius-md)',
                          background: isActive 
                            ? 'rgba(139, 92, 246, 0.15)' 
                            : isPassed 
                            ? 'rgba(16, 185, 129, 0.08)' 
                            : 'var(--bg-tertiary)',
                          border: isActive 
                            ? '1px solid var(--accent-purple)' 
                            : isPassed 
                            ? '1px solid rgba(16, 185, 129, 0.4)' 
                            : '1px solid var(--border-color)',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: isActive ? '0 0 20px rgba(139, 92, 246, 0.3)' : 'none'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                          <div
                            style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '10px',
                              background: isActive ? 'var(--gradient-brand)' : 'rgba(255, 255, 255, 0.08)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#ffffff'
                            }}
                          >
                            <Icon style={{ width: '18px', height: '18px' }} />
                          </div>
                          <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                            {step.latency}
                          </span>
                        </div>
                        <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                          {step.label}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.3' }}>
                          {step.sub}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'json' && (
              <pre
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: '#38bdf8',
                  background: 'var(--bg-tertiary)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  overflowX: 'auto'
                }}
              >
{`{
  "workflow_id": "wf_flowmind_8921",
  "status": "RUNNING",
  "trigger": "webhook.stripe.invoice_created",
  "agent_execution": {
    "model": "gpt-4o-2026-v2",
    "prompt_tokens": 420,
    "completion_tokens": 128,
    "reasoning_steps": [
      "Extracted user subscription metadata",
      "Triggered automated Slack notification",
      "Synchronized record to PostgreSQL database"
    ]
  },
  "latency_ms": 182
}`}
              </pre>
            )}

            {activeTab === 'logs' && (
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.825rem', color: 'var(--text-secondary)', background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ color: '#10b981' }}>[12:44:02.102 INFO] Trigger received: webhook.stripe.invoice_created</div>
                <div style={{ color: '#38bdf8' }}>[12:44:02.145 DEBUG] Initiating GPT-4o autonomous reasoning chain...</div>
                <div style={{ color: '#c084fc' }}>[12:44:02.288 INFO] Multi-step agent decision: Action [POST_SLACK_ALERT, UPDATE_POSTGRES]</div>
                <div style={{ color: '#10b981' }}>[12:44:02.344 SUCCESS] Pipeline execution completed. Status 200 OK.</div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
