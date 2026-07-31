import { 
  FiCpu, 
  FiGitPullRequest, 
  FiLayers, 
  FiPieChart, 
  FiMessageSquare, 
  FiShield, 
  FiZap,
  FiTrendingUp,
  FiUsers,
  FiClock,
  FiCheckCircle,
  FiServer
} from 'react-icons/fi';

// Trusted Logos
export const TRUSTED_COMPANIES = [
  { name: 'OpenAI', logo: '⚡ OpenAI' },
  { name: 'Stripe', logo: '💳 Stripe' },
  { name: 'Vercel', logo: '▲ Vercel' },
  { name: 'Supabase', logo: '⚡ Supabase' },
  { name: 'Linear', logo: '📐 Linear' },
  { name: 'Datadog', logo: '🐶 Datadog' },
  { name: 'Notion', logo: '📝 Notion' },
  { name: 'Figma', logo: '🎨 Figma' }
];

// Features List
export const FEATURES_DATA = [
  {
    id: 'ai-agents',
    title: 'Autonomous AI Agents',
    description: 'Deploy multi-modal AI agents capable of reasoning, execution, decision-making, and self-correction across complex task chains.',
    icon: FiCpu,
    tag: 'Popular',
    metrics: '99.4% Task Accuracy',
    color: '#8b5cf6'
  },
  {
    id: 'workflow-automation',
    title: 'Visual Workflow Builder',
    description: 'Construct multi-step parallel logic pipelines, loops, and fallback paths using an intuitive node-based visual editor.',
    icon: FiGitPullRequest,
    tag: 'Low-Code',
    metrics: '10x Faster Deployment',
    color: '#3b82f6'
  },
  {
    id: 'api-integrations',
    title: '500+ Instant API Connectors',
    description: 'Connect seamlessly to Salesforce, HubSpot, GitHub, Slack, Postgres, Snowflake, and custom REST/GraphQL endpoints.',
    icon: FiLayers,
    tag: 'Ecosystem',
    metrics: 'Zero Maintenance',
    color: '#06b6d4'
  },
  {
    id: 'analytics-dashboard',
    title: 'Real-Time Analytics & ROI',
    description: 'Track token usage, API latency, agent performance, cost optimization, and overall business time saved in real time.',
    icon: FiPieChart,
    tag: 'Insights',
    metrics: 'Live Observability',
    color: '#a855f7'
  },
  {
    id: 'ai-chat-assistant',
    title: 'Copilot Chat Assistant',
    description: 'Prompt in natural human language to instantly generate workflows, debug pipeline errors, or generate API schemas.',
    icon: FiMessageSquare,
    tag: 'Generative',
    metrics: 'Natural Language',
    color: '#ec4899'
  },
  {
    id: 'enterprise-security',
    title: 'Enterprise-Grade Security',
    description: 'SOC2 Type II certified, GDPR & HIPAA compliant with RBAC, hardware isolation, and zero-data retention commitments.',
    icon: FiShield,
    tag: 'Enterprise',
    metrics: '256-bit AES Security',
    color: '#10b981'
  }
];

// How It Works Steps
export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'User Request',
    description: 'Triggers originate from webhooks, Slack messages, scheduled CRONs, or incoming user emails.',
    detail: '{"source": "Slack/Webhook", "event": "customer_lead_received", "priority": "high"}',
    color: '#3b82f6'
  },
  {
    step: '02',
    title: 'AI Analysis',
    description: 'LLM agents parse intent, extract entity metadata, evaluate parameters, and choose execution paths.',
    detail: 'LLM reasoning engine selected: GPT-4o / Claude 3.5 Sonnet. Intent: Lead Enrichment & Qualification',
    color: '#8b5cf6'
  },
  {
    step: '03',
    title: 'Workflow Automation',
    description: 'Executes parallel micro-tasks, calls external APIs, evaluates conditions, and handles error retries.',
    detail: 'Executing: 1. Enrich clearbit 2. Score lead (Score: 94/100) 3. Draft personalized pitch',
    color: '#a855f7'
  },
  {
    step: '04',
    title: 'CRM / Email / Database',
    description: 'Dispatches payload directly to HubSpot CRM, updates PostgreSQL, and notifies team on Slack.',
    detail: 'POST /crm/v1/deals -> Created deal #9842. Sent Slack alert to #sales-vip',
    color: '#06b6d4'
  },
  {
    step: '05',
    title: 'Task Completed',
    description: 'Automation logs performance metrics, updates dashboard analytics, and closes execution lifecycle.',
    detail: 'Status: SUCCESS | Total Latency: 420ms | Cost: $0.0031 | Time Saved: 15 minutes',
    color: '#10b981'
  }
];

// Statistics Data
export const STATS_DATA = [
  {
    value: '500+',
    label: 'Global Enterprises & Startups',
    subtext: 'Trust FlowMind AI daily',
    icon: FiUsers
  },
  {
    value: '2M+',
    label: 'Automations Executed',
    subtext: 'Per month seamlessly',
    icon: FiZap
  },
  {
    value: '99.9%',
    label: 'Uptime SLA',
    subtext: 'Enterprise durability',
    icon: FiServer
  },
  {
    value: '80%',
    label: 'Avg. Time Saved',
    subtext: 'Across operational teams',
    icon: FiClock
  }
];

// Testimonials Data
export const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Elena Rostova',
    role: 'VP of Engineering at FinScale',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote: 'FlowMind AI transformed our customer onboarding process. Tasks that took 4 hours of manual data entry are now completed automatically in less than 5 seconds.',
    company: 'FinScale',
    rating: 5,
    highlight: 'Saved 200+ engineering hours/month'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Head of Operations at NovaStack',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote: 'The visual node builder coupled with natural language AI prompting is pure wizardry. We built an end-to-end invoice processing pipeline in under 30 minutes.',
    company: 'NovaStack',
    rating: 5,
    highlight: 'Built complex flows in 30 mins'
  },
  {
    id: 3,
    name: 'Sarah Jenkins',
    role: 'Chief Technology Officer at CloudPulse',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    quote: 'Security was our top priority when evaluating AI automation platforms. FlowMind’s SOC2 compliance and zero-retention guarantee made adoption seamless for our risk team.',
    company: 'CloudPulse',
    rating: 5,
    highlight: 'Enterprise SOC2 Certified'
  }
];

// Pricing Plans
export const PRICING_PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    badge: 'For Individuals & Builders',
    monthlyPrice: 29,
    annualPrice: 24,
    description: 'Perfect for small teams and solo developers automating core business tasks.',
    features: [
      'Up to 10,000 executions/mo',
      '5 Active AI Agents',
      'Standard API Connectors',
      'Visual Workflow Builder',
      'Community Support & Discord',
      '14-day Execution History'
    ],
    ctaText: 'Start Free Trial',
    popular: false
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Most Popular Choice',
    monthlyPrice: 79,
    annualPrice: 63,
    description: 'For growing teams requiring advanced multi-step AI agents and custom APIs.',
    features: [
      'Up to 100,000 executions/mo',
      'Unlimited AI Agents',
      '500+ Premium API Connectors',
      'AI Chat Assistant Copilot',
      'Real-Time Analytics & Cost Dashboard',
      'Priority 24/7 Support',
      'Custom Webhooks & Parallel Loops',
      '90-day Execution History'
    ],
    ctaText: 'Get Started with Pro',
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    badge: 'Custom Scale & Security',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    description: 'Custom SLA, dedicated infrastructure, compliance guarantees, and dedicated TAM.',
    features: [
      'Unlimited Executions',
      'Dedicated LLM VPC & GPU Cluster',
      'SOC2 Type II, HIPAA & GDPR Compliance',
      'Custom SSO, SAML & RBAC',
      'Dedicated Solutions Architect',
      '1-Hour SLA Guarantee',
      'Custom On-Prem Connector SDK',
      'Unlimited Audit Logs'
    ],
    ctaText: 'Talk to Sales',
    popular: false
  }
];

// FAQ Data
export const FAQ_DATA = [
  {
    question: 'What is FlowMind AI and how does it work?',
    answer: 'FlowMind AI is an intelligent workflow automation platform. It allows businesses to connect APIs, LLMs (like OpenAI GPT-4, Anthropic Claude), databases, and business tools into automated visual pipelines using AI Agents.'
  },
  {
    question: 'Do I need coding experience to build workflows?',
    answer: 'No! FlowMind AI features a no-code visual drag-and-drop workflow editor alongside a Natural Language AI Copilot. You can literally type "Create a workflow that reads incoming emails and posts qualified leads to Slack" and FlowMind will build it for you.'
  },
  {
    question: 'How secure is my data on FlowMind AI?',
    answer: 'We prioritize security with SOC2 Type II certification, end-to-end 256-bit AES encryption, HIPAA compliance, and strict Zero Data Retention agreements with LLM model providers.'
  },
  {
    question: 'Can I connect my own custom APIs or private databases?',
    answer: 'Yes! FlowMind AI supports custom OpenAPI/Swagger spec imports, generic REST/GraphQL endpoints, Webhooks, and direct connections to PostgreSQL, MySQL, MongoDB, and Snowflake.'
  },
  {
    question: 'What happens if a step in my workflow fails?',
    answer: 'FlowMind AI includes automatic AI self-healing and error retry policies. You can configure fallback paths, alert notifications, or manual human-in-the-loop approvals.'
  },
  {
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day unlimited free trial on all plans with no credit card required.'
  }
];
