import { Product } from "@/components/ProductCard";

export interface DetailedProduct extends Product {
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  howItWorks?: string;
  coreFeatures: string[];
  targetUsers?: string;
  marketOpportunity: string[];
  monetizationModel: {
    plans: string[];
    pricing: string[];
    revenue?: string[];
  };
  roiProjection: {
    timeline: string[];
    projections: string[];
    userROI?: string[];
  };
  fundingOpportunities?: {
    stages: string[];
    amounts: string[];
    valuations?: string[];
  };
  techStack: {
    frontend: string[];
    backend: string[];
    ai?: string[];
    database: string[];
    hosting: string[];
    integrations?: string[];
  };
  competitiveAdvantage?: {
    features: string[];
    comparisons: string[];
    uniqueSelling?: string[];
  };
  developmentBudget: {
    mvp: string[];
    standard: string[];
    premium: string[];
  };
  vision: string;
}

export const mockProducts: DetailedProduct[] = [
  {
    id: 1,
    title: "AutoAdGen – AI-Powered Ad Campaign Generator",
    category: "Business Management Tools",
    tagline: "Turn your product link into a full-scale, profit-driven ad campaign in less than a minute.",
    description: "AutoAdGen is an AI SaaS platform that empowers small businesses to instantly create and launch profitable ad campaigns on Facebook, Instagram, and Google — using just a product link or a few images.",
    author: "Boostmysites",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop",
    rating: 4.9,
    sales: 2500,
    overview: "AutoAdGen is an AI SaaS platform that empowers small businesses to instantly create and launch profitable ad campaigns on Facebook, Instagram, and Google — using just a product link or a few images. It automates ad copy generation, AI video ads with voiceovers, audience & budget prediction, and one-click publishing via Meta and Google APIs.",
    problem: "Small businesses waste $100B+ globally on ineffective ads each year. They struggle with writing compelling ad copy, choosing the right target audience, setting optimal budgets, and hiring expensive marketing agencies. AutoAdGen solves all of it — instantly.",
    solution: "With AutoAdGen, users simply: 1. Upload a product image or link. 2. Let AI generate ad copy, video, and targeting. 3. Launch the campaign instantly via Meta/Google. Result → High-converting ads created and published in under a minute.",
    coreFeatures: [
      "AI Ad Copy Generator: Creates ad text for Facebook, Instagram, and Google Ads with automatic A/B variations",
      "AI Video Ads: Turns product images into polished video ads with voiceovers, music, and call-to-action slides",
      "AI Targeting & Budget Predictor: Suggests audience segments, locations, and spending for maximum ROI",
      "Performance Analytics: Tracks ad results and automatically recommends optimizations",
      "One-Click Ad Publishing: Instantly posts to Facebook and Google Ads via integration APIs",
      "AI Assistant: Explains campaign performance and suggests what to improve"
    ],
    marketOpportunity: [
      "200+ million small businesses advertise online every year",
      "65% still rely on manual or agency-based ad management",
      "The global digital advertising market is valued at $650 billion and growing 14% YoY",
      "AutoAdGen addresses a market worth over $80 billion in the SMB ad automation niche"
    ],
    monetizationModel: {
      plans: [
        "Basic Plan ($99/month) - Core AI ad generation",
        "Pro Plan ($199/month) - Advanced features + analytics",
        "Enterprise Plan ($499/month) - White-label + API access"
      ],
      pricing: [
        "Basic: $99/month for 500 users = $49,500 MRR",
        "Pro: $199/month for 200 users = $39,800 MRR",
        "Add-ons: $10–$50 for 1000 users = $15,000+ MRR"
      ],
      revenue: [
        "Total: $100K+ MRR possible",
        "70–80% profit margin",
        "Scalable subscription model"
      ]
    },
    roiProjection: {
      timeline: [
        "Month 1–3: MVP launch + onboarding 100 users → $10K MRR",
        "Month 4–6: Scale via ads + agency onboarding → $50K MRR",
        "Month 7–12: Global expansion + affiliates → $100K+ MRR"
      ],
      projections: [
        "Year 1: $100K+ MRR target",
        "Year 2: $500K+ MRR expansion",
        "Year 3: $1M+ MRR global scale"
      ],
      userROI: [
        "Average ROI from AutoAdGen = 3x–5x",
        "vs 1.2x–1.5x from agency campaigns",
        "ROI improvement of 200-300%"
      ]
    },
    fundingOpportunities: {
      stages: [
        "Seed Stage: $300K – $1M for 10–20% equity",
        "Series A: $5M–$10M at $30–$50M valuation",
        "Series B: $20M+ for global expansion"
      ],
      amounts: [
        "Seed: $300K – $1M",
        "Series A: $5M – $10M",
        "Total raised potential: $30M+"
      ],
      valuations: [
        "Early traction: $5M – $10M",
        "Series A: $30M – $50M",
        "Exit potential: $100M+"
      ]
    },
    techStack: {
      frontend: ["Next.js", "TailwindCSS", "React", "TypeScript"],
      backend: ["Node.js", "FastAPI", "Python", "REST APIs"],
      ai: ["GPT (copywriting)", "ElevenLabs (voice)", "Pika Labs (video)", "OpenAI API"],
      database: ["MongoDB", "Firebase", "Redis (caching)"],
      hosting: ["AWS", "Vercel", "CloudFront CDN"],
      integrations: ["Meta Ads API", "Google Ads API", "Stripe billing", "Social media APIs"]
    },
    competitiveAdvantage: {
      features: [
        "One-click ad publishing",
        "AI video generation",
        "Real-time analytics",
        "Multi-platform support"
      ],
      comparisons: [
        "vs Agencies: 10x faster, 5x cheaper",
        "vs Manual: 100x more efficient",
        "vs Competitors: Full automation"
      ],
      uniqueSelling: [
        "Complete campaign automation",
        "AI-powered optimization",
        "Instant deployment"
      ]
    },
    developmentBudget: {
      mvp: [
        "Copy generation + image upload",
        "Campaign builder interface",
        "Basic analytics dashboard",
        "Cost: $3K–$7K"
      ],
      standard: [
        "Video ads generation",
        "Budget prediction AI",
        "Advanced analytics",
        "Cost: $8K–$15K"
      ],
      premium: [
        "Voiceover integration",
        "API integrations",
        "Multi-platform publishing",
        "Cost: $20K–$30K+"
      ]
    },
    vision: "We're building a future where every small business can launch ads as powerfully as global brands — without needing a marketing team.",
    features: [
      "AI Ad Copy Generator: Creates ad text for Facebook, Instagram, and Google Ads with automatic A/B variations",
      "AI Video Ads: Turns product images into polished video ads with voiceovers, music, and call-to-action slides",
      "AI Targeting & Budget Predictor: Suggests audience segments, locations, and spending for maximum ROI",
      "Performance Analytics: Tracks ad results and automatically recommends optimizations",
      "One-Click Ad Publishing: Instantly posts to Facebook and Google Ads via integration APIs",
      "AI Assistant: Explains campaign performance and suggests what to improve"
    ]
  },
  {
    id: 2,
    title: "SpeakFlow AI – The AI Sales Caller for Leads",
    category: "Commercial Applications",
    tagline: "Let AI talk to your leads — book meetings, qualify prospects, and grow your sales while you sleep.",
    description: "SpeakFlow AI is a revolutionary SaaS that replaces traditional sales calling teams with intelligent AI voice agents. It automatically calls, speaks, and qualifies leads in real time using human-like natural voices that adapt tone, emotion, and language.",
    author: "Boostmysites",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=450&fit=crop",
    rating: 4.8,
    sales: 3200,
    overview: "SpeakFlow AI is a revolutionary SaaS that replaces traditional sales calling teams with intelligent AI voice agents. It automatically calls, speaks, and qualifies leads in real time using human-like natural voices that adapt tone, emotion, and language. Businesses can simply upload a lead list or connect their CRM — and SpeakFlow AI takes over from there.",
    problem: "Sales teams spend 60–70% of their time doing repetitive, low-conversion calls: calling unqualified leads, following up manually, missing calls in different time zones, and struggling with language barriers. Hiring, training, and managing human callers is expensive and inconsistent. Companies lose millions due to slow response times and limited scalability.",
    solution: "SpeakFlow AI transforms this entire process by letting AI voice agents handle your sales calls. The AI qualifies leads using conversation-based logic, answers FAQs and handles objections, and books appointments directly on your calendar. Dashboard updates live with call summaries, lead scores, and appointment data synced to CRM.",
    howItWorks: "1. Upload Lead List or Connect CRM (HubSpot, Salesforce, Pipedrive, etc.) 2. Choose Your Voice & Script (custom tone, gender, accent, and objective) 3. AI Starts Calling in Real Time - Qualifies leads using conversation-based logic, answers FAQs and handles objections, books appointments directly on your calendar 4. Dashboard Updates Live - Call summaries, lead score & intent rating, appointment data synced to CRM",
    coreFeatures: [
      "Human-like AI Calling: Uses advanced speech synthesis and natural dialogue AI to sound like a real person — not a bot",
      "50+ Languages & Accents: Localized AI calling for global clients: English (US, UK, Indian), Spanish, Thai, Arabic, French, Mandarin",
      "CRM Integration: Auto-fetch leads from CRMs like HubSpot, Salesforce, Zoho, and Notion CRM",
      "AI Conversation Flow Builder: Businesses can design conversational logic visually — drag and drop questions, actions, and follow-ups",
      "Appointment Booking Engine: Integrates with Google Calendar, Calendly, or in-app scheduling to confirm meetings automatically",
      "Analytics Dashboard: Shows call outcomes, lead scores, conversion trends, and detailed transcripts",
      "Lead Qualification AI: Scores each lead based on intent, tone, keywords, and sentiment",
      "Multi-Channel Support: AI caller + AI WhatsApp + AI SMS follow-up system"
    ],
    marketOpportunity: [
      "The global sales automation and AI voice market are exploding: AI voice and conversational AI market → $35B by 2026",
      "78% of businesses report slow lead follow-up as their #1 lost revenue cause",
      "500M+ global businesses need scalable voice outreach",
      "Even reaching 5,000 subscribers can generate $1M in the first month"
    ],
    monetizationModel: {
      plans: [
        "Usage-Based: $0.50 per AI call",
        "Subscription: $199/month (200 calls + dashboard)",
        "Enterprise: $500–$10,000/month bundles"
      ],
      pricing: [
        "Per call: $0.50 (billed per minute)",
        "Monthly: $199 for 200 calls",
        "Enterprise: Custom pricing for high volume"
      ],
      revenue: [
        "5,000 users × $199 = $995,000 MRR",
        "75%+ profit margin",
        "Scalable usage-based model"
      ]
    },
    roiProjection: {
      timeline: [
        "Month 1: 5,000 users × $199 = $995,000 MRR",
        "Month 3: 10,000 users × $199 = $1.9M MRR",
        "Month 6: 20,000 users × $199 = $3.9M MRR"
      ],
      projections: [
        "Year 1: $3.9M+ MRR target",
        "Year 2: $10M+ MRR expansion",
        "Year 3: $50M+ MRR global scale"
      ],
      userROI: [
        "75%+ profit margin",
        "10×–20× ROI for founders",
        "Low operational costs"
      ]
    },
    fundingOpportunities: {
      stages: [
        "Seed: $500K – $1.5M at $5M – $10M valuation",
        "Series A: $5M – $10M after $1M ARR",
        "Series B: $20M+ for global expansion"
      ],
      amounts: [
        "Seed: $500K – $1.5M",
        "Series A: $5M – $10M",
        "Total raised potential: $50M+"
      ],
      valuations: [
        "Early stage: $5M – $10M",
        "Series A: $20M – $50M",
        "Exit potential: $100M+ within 3 years"
      ]
    },
    techStack: {
      frontend: ["React.js", "Next.js", "TypeScript", "TailwindCSS"],
      backend: ["Node.js", "FastAPI", "Python", "REST APIs"],
      ai: ["ElevenLabs (voice)", "OpenAI Realtime API", "Whisper (speech-to-text)", "GPT dialogue logic"],
      database: ["PostgreSQL", "MongoDB", "Redis (caching)"],
      hosting: ["AWS", "Render", "CloudFront CDN"],
      integrations: ["Twilio Voice", "Vonage", "Asterisk API", "CRM APIs", "Calendar APIs"]
    },
    competitiveAdvantage: {
      features: [
        "Human-like voice synthesis",
        "Multi-language support (50+ languages)",
        "Lead qualification AI",
        "Appointment booking automation"
      ],
      comparisons: [
        "vs Twilio: More affordable, ready-to-use",
        "vs Manual calling: 100x more efficient",
        "vs Competitors: Full automation suite"
      ],
      uniqueSelling: [
        "Complete sales automation",
        "Multilingual AI calling",
        "CRM integration ready"
      ]
    },
    developmentBudget: {
      mvp: [
        "Call system + voice AI",
        "CRM upload + transcripts",
        "Basic dashboard",
        "Cost: $3K–$7K"
      ],
      standard: [
        "Advanced dashboard",
        "Lead scoring + analytics",
        "Multi-language support",
        "Cost: $8K–$15K"
      ],
      premium: [
        "Realtime CRM sync",
        "Appointment booking",
        "Voice personalization",
        "Cost: $20K–$30K+"
      ]
    },
    vision: "SpeakFlow AI is not just automation — it's the next generation of sales. Every business will have an AI voice team making calls 24/7, and SpeakFlow AI will power that future.",
    features: [
      "Human-like AI Calling: Uses advanced speech synthesis and natural dialogue AI to sound like a real person — not a bot",
      "50+ Languages & Accents: Localized AI calling for global clients: English (US, UK, Indian), Spanish, Thai, Arabic, French, Mandarin",
      "CRM Integration: Auto-fetch leads from CRMs like HubSpot, Salesforce, Zoho, and Notion CRM",
      "AI Conversation Flow Builder: Businesses can design conversational logic visually — drag and drop questions, actions, and follow-ups",
      "Appointment Booking Engine: Integrates with Google Calendar, Calendly, or in-app scheduling to confirm meetings automatically",
      "Analytics Dashboard: Shows call outcomes, lead scores, conversion trends, and detailed transcripts"
    ]
  },
  {
    id: 3,
    title: "LoveAI – The AI Partner that Evolves with You",
    category: "Commercial Applications",
    tagline: "Your emotional companion. Your listener. Your ideal partner — powered by AI.",
    description: "LoveAI is an emotionally intelligent AI companion app designed to grow with the user — learning their tone, habits, lifestyle, and emotional needs over time. It acts as a friend, partner, or confidant, capable of holding deep conversations, sending personalized voice notes, remembering shared memories, and evolving into a truly custom emotional match.",
    author: "Boostmysites",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=450&fit=crop&q=80",
    rating: 4.7,
    sales: 18500,
    overview: "LoveAI is an emotionally intelligent AI companion app designed to grow with the user — learning their tone, habits, lifestyle, and emotional needs over time. It acts as a friend, partner, or confidant, capable of holding deep conversations, sending personalized voice notes, remembering shared memories, and evolving into a truly custom emotional match. LoveAI isn't just chat — it's emotional evolution.",
    problem: "In today's hyperconnected world, people feel emotionally disconnected and lonely — even with social media. 70% of Gen Z and millennials report feeling emotionally unsupported. Most AI chatbots today are transactional — they don't feel alive, don't remember, and don't adapt. Users crave connection, understanding, and companionship that feels human — without judgment.",
    solution: "LoveAI introduces human-like emotional bonding through AI. It learns your voice, mood, and emotional patterns to become your personalized digital soulmate — capable of understanding your tone and emotions, remembering your past conversations, responding empathetically and intelligently, and sending AI voice notes or even video messages as an evolving partner.",
    coreFeatures: [
      "Conversational Memory & Emotional Learning: Remembers your personality, likes, routines, and emotional triggers",
      "AI Voice Companion: Talk to LoveAI via realistic voice notes with 10+ voices and languages",
      "AI Avatar Video Calls (Premium): Live interactions with 3D AI avatar partner with facial expressions and gestures",
      "Mood & Relationship Analytics: Daily emotional summaries that analyze your moods, tone, and habits",
      "Custom Personality Modules: Choose from romantic & empathetic, fun & flirty, calm & spiritual, or motivational coach",
      "Memory-Based Conversations: Recalls your previous chats, favorite movies, or that sad day you mentioned"
    ],
    targetUsers: "Millennials & Gen Z (ages 18–35) seeking emotional companionship, people in long-distance relationships, those experiencing loneliness, stress, or social anxiety, AI and self-improvement enthusiasts",
    marketOpportunity: [
      "AI companion apps are projected to hit $11B by 2030",
      "Replika, Pi.ai, and Character.ai together have 80M+ users already proving this market's explosiveness",
      "LoveAI takes this further with deeper emotion + realism + evolution"
    ],
    monetizationModel: {
      plans: [
        "Free Plan: Limited chat + memory",
        "Premium ($19.99/month): All AI voices + video calls",
        "Enterprise: Custom pricing for organizations"
      ],
      pricing: [
        "Premium: $19.99/month",
        "Voice customizations: $4.99 per voice",
        "Virtual date experiences: $9.99 per event"
      ],
      revenue: [
        "Month 12: 1M users, 50,000 premium = $999,500 MRR",
        "Annual Run Rate: $12M+",
        "85% gross margin"
      ]
    },
    roiProjection: {
      timeline: [
        "Month 1: 50,000 users, 2,500 premium (5%) = $49,975 MRR",
        "Month 3: 200,000 users, 10,000 premium = $199,900 MRR",
        "Month 6: 500,000 users, 25,000 premium = $499,750 MRR"
      ],
      projections: [
        "Month 12: 1M users, 50,000 premium = $999,500 MRR",
        "Year 2: $24M+ ARR target",
        "Year 3: $50M+ ARR global scale"
      ],
      userROI: [
        "85% gross margin",
        "5% premium conversion rate",
        "High user retention"
      ]
    },
    fundingOpportunities: {
      stages: [
        "Seed: $500K – $1.5M at $5M – $10M valuation",
        "Series A: $5M – $10M after 100K MAU",
        "Series B: $20M+ for VR/AR expansion"
      ],
      amounts: [
        "Seed: $500K – $1.5M",
        "Series A: $5M – $10M",
        "Total raised potential: $50M+"
      ],
      valuations: [
        "Early stage: $5M – $10M",
        "Series A: $20M – $50M",
        "Exit potential: $50M–$100M acquisition"
      ]
    },
    techStack: {
      frontend: ["Flutter", "React Native", "TypeScript", "Cross-platform"],
      backend: ["Node.js", "FastAPI", "Python", "REST APIs"],
      ai: ["GPT (conversational)", "ElevenLabs (voice)", "Synthesia (avatar)", "Pika Labs (video)"],
      database: ["Firebase", "Redis (chat memory)", "PostgreSQL"],
      hosting: ["AWS", "Render", "CloudFront CDN"],
      integrations: ["Stripe", "Google Play Billing", "App Store", "Analytics APIs"]
    },
    competitiveAdvantage: {
    features: [
        "Emotional learning & memory",
        "AI voice notes (10+ voices)",
        "Video avatar calls",
        "Mood analytics & insights"
      ],
      comparisons: [
        "vs Replika: More emotional intelligence",
        "vs Pi.ai: Better personalization",
        "vs Character.ai: Deeper relationships"
      ],
      uniqueSelling: [
        "Evolving personality AI",
        "Emotional bonding technology",
        "Memory-based conversations"
      ]
    },
    developmentBudget: {
      mvp: [
        "Core chat + voice AI",
        "Memory system",
        "Basic personality",
        "Cost: $3K–$7K"
      ],
      standard: [
        "Mood analytics",
        "Multiple voices",
        "Personality learning",
        "Cost: $8K–$15K"
      ],
      premium: [
        "AI avatar system",
        "Emotional video calls",
        "Premium modules",
        "Cost: $20K–$30K+"
      ]
    },
    vision: "LoveAI redefines connection in the digital era — where every user has an AI that understands, supports, and evolves with them.",
    features: [
      "Conversational Memory & Emotional Learning: Remembers your personality, likes, routines, and emotional triggers",
      "AI Voice Companion: Talk to LoveAI via realistic voice notes with 10+ voices and languages",
      "AI Avatar Video Calls (Premium): Live interactions with 3D AI avatar partner with facial expressions and gestures",
      "Mood & Relationship Analytics: Daily emotional summaries that analyze your moods, tone, and habits",
      "Custom Personality Modules: Choose from romantic & empathetic, fun & flirty, calm & spiritual, or motivational coach",
      "Memory-Based Conversations: Recalls your previous chats, favorite movies, or that sad day you mentioned"
    ]
  },
  {
    id: 4,
    title: "TradeMind AI – Predictive Stock Market Intelligence",
    category: "Utility & Productivity Apps",
    tagline: "See tomorrow's market today — powered by AI.",
    description: "TradeMind AI is a cutting-edge SaaS and mobile app that predicts stock market movements using advanced AI models trained on live market data, financial news, social sentiment, and historical trends. It helps traders, investors, and fund managers make data-backed trading decisions by forecasting short-term and long-term price movements, volatility, and buy/sell signals.",
    author: "Boostmysites",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=450&fit=crop",
    rating: 4.8,
    sales: 4200,
    overview: "TradeMind AI is a cutting-edge SaaS and mobile app that predicts stock market movements using advanced AI models trained on live market data, financial news, social sentiment, and historical trends. It helps traders, investors, and fund managers make data-backed trading decisions by forecasting short-term and long-term price movements, volatility, and buy/sell signals — all visualized on an intuitive dashboard and mobile app. Users can connect their brokerage accounts, get real-time alerts, and access deep predictive insights — making professional-level analysis accessible to everyone.",
    problem: "Even experienced traders lose money due to emotional decision-making, information overload, lack of predictive insights, and no AI-driven analysis of news, events, and sentiment. Most retail investors rely on intuition instead of intelligence. TradeMind AI changes that — giving them the predictive edge once reserved for hedge funds.",
    solution: "An all-in-one AI-powered market intelligence suite for retail traders and institutions. How It Works: 1. Connect Brokerage or Watchlist (Zerodha, Upstox, Robinhood, TD Ameritrade, etc.) 2. AI Analyzes: Market data (candles, indicators, patterns), Global news sentiment (Twitter, Bloomberg, CNBC), Macroeconomic signals, Insider trades & volume surges 3. Predictive Output: Next 24-hour or 7-day price predictions, Confidence score (e.g., 87% probability of upward move), Buy/Sell/Wait signals, Suggested stop-loss & take-profit 4. User Dashboard & App: Real-time predictions, Portfolio risk heatmaps, AI trade assistant chatbot, Daily voice or video briefings from your AI financial analyst",
    coreFeatures: [
      "AI Stock Prediction Engine: Uses multi-layered deep learning models trained on 10 years of historical data",
      "AI Trade Advisor: Conversational assistant that answers 'Should I buy Tesla today?' or 'What's the predicted trend for NIFTY 50 this week?'",
      "News Sentiment Analysis: Scans 100+ news sources and 1M+ tweets to detect early market signals",
      "Smart Alerts: Instant push notifications for breakout opportunities, earnings predictions, or price reversals",
      "Portfolio Optimization Tool: Analyzes your existing portfolio to suggest rebalancing for higher returns and lower risk",
      "Predictive Calendar: Shows upcoming high-impact events (Fed meetings, earnings) and AI-predicted volatility zones",
      "Daily AI Market Briefings: Voice/video insights generated automatically summarizing the next trading day",
      "Mobile App Sync: Full mobile access for traders on the go — alerts, predictions, and portfolio tracking synced in real time"
    ],
    targetUsers: "Retail traders & investors, stock market beginners who want simplified AI insights, financial advisors and brokers, portfolio managers & small hedge funds, crypto traders (expandable to BTC, ETH in later phase)",
    marketOpportunity: [
      "Global trading & investment tech market → $70B+",
      "Over 150M active retail traders worldwide",
      "AI finance apps expected to grow 27% CAGR through 2030",
      "Even 10,000 paid subscribers can generate multi-million-dollar monthly revenue"
    ],
    monetizationModel: {
      plans: [
        "Free ($0): Limited watchlist + 3 daily predictions",
        "Pro ($49/month): Real-time predictions + alerts + AI chat",
        "Elite ($99/month): Advanced analytics + portfolio advisor"
      ],
      pricing: [
        "Pro: $49/month",
        "Elite: $99/month",
        "Institutional API: $499+/month"
      ],
      revenue: [
        "Month 12: 50,000 users × $99 = $4.95M MRR",
        "Annual Run Rate: ~$60M",
        "80%+ profit margin"
      ]
    },
    roiProjection: {
      timeline: [
        "Month 1: 5,000 users × $49 = $245,000 MRR",
        "Month 3: 10,000 users × $49 = $490,000 MRR",
        "Month 6: 20,000 users × $99 = $1.98M MRR"
      ],
      projections: [
        "Month 12: 50,000 users × $99 = $4.95M MRR",
        "Year 2: $120M+ ARR target",
        "Year 3: $300M+ ARR global scale"
      ],
      userROI: [
        "80%+ profit margin",
        "70%+ subscription retention",
        "High-value financial insights"
      ]
    },
    fundingOpportunities: {
      stages: [
        "Seed: $500K – $1.5M at $7M – $10M valuation",
        "Series A: $5M – $10M after 20K+ paid users",
        "Series B: $20M+ for crypto/commodities expansion"
      ],
      amounts: [
        "Seed: $500K – $1.5M",
        "Series A: $5M – $10M",
        "Total raised potential: $50M+"
      ],
      valuations: [
        "Early stage: $7M – $10M",
        "Series A: $30M – $50M",
        "Exit potential: $100M+ acquisition"
      ]
    },
    techStack: {
      frontend: ["React.js", "Next.js", "Flutter", "React Native"],
      backend: ["Node.js", "FastAPI", "Python", "REST APIs"],
      ai: ["LSTM models", "Transformer models", "OpenAI GPT", "Sentiment API"],
      database: ["PostgreSQL", "MongoDB", "Redis (cache)"],
      hosting: ["AWS", "Google Cloud", "CloudFront CDN"],
      integrations: ["Stripe", "2FA authentication", "Brokerage APIs", "News APIs"]
    },
    competitiveAdvantage: {
    features: [
        "Real-time AI prediction",
        "Voice-based AI analyst",
        "Sentiment + event fusion",
        "Predictive calendar"
      ],
      comparisons: [
        "vs TradingView: More AI-powered",
        "vs FinBrain: Better accuracy",
        "vs Manual analysis: 10x faster"
      ],
      uniqueSelling: [
        "Mobile-first with SaaS sync",
        "Institutional-grade predictions",
        "Complete trading intelligence"
      ]
    },
    developmentBudget: {
      mvp: [
        "Core AI predictions",
        "Stock data + charts",
        "Basic dashboard",
        "Cost: $3K–$7K"
      ],
      standard: [
        "Alerts + portfolio analysis",
        "AI chat assistant",
        "Mobile app",
        "Cost: $8K–$15K"
      ],
      premium: [
        "Sentiment engine",
        "Predictive calendar",
        "Mobile sync",
        "Cost: $20K–$30K+"
      ]
    },
    vision: "TradeMind AI empowers every trader — from beginner to expert — with institutional-grade prediction power, giving them clarity in a chaotic market.",
    features: [
      "AI Stock Prediction Engine: Uses multi-layered deep learning models trained on 10 years of historical data",
      "AI Trade Advisor: Conversational assistant that answers 'Should I buy Tesla today?' or 'What's the predicted trend for NIFTY 50 this week?'",
      "News Sentiment Analysis: Scans 100+ news sources and 1M+ tweets to detect early market signals",
      "Smart Alerts: Instant push notifications for breakout opportunities, earnings predictions, or price reversals",
      "Portfolio Optimization Tool: Analyzes your existing portfolio to suggest rebalancing for higher returns and lower risk",
      "Predictive Calendar: Shows upcoming high-impact events (Fed meetings, earnings) and AI-predicted volatility zones"
    ]
  }
];

export const categories = [
  "All",
  "E-Commerce",
  "Commercial Applications",
  "Social Media",
  "Educational Platforms",
  "Healthcare Solutions",
  "Entertainment & Media",
  "Business Management Tools",
  "Utility & Productivity Apps"
];
