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
  images: string[];
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
    image: "/src/assets/projects/AutoAdGen-1.webp",
    images: [
      "/src/assets/projects/AutoAdGen-1.webp",
      "/src/assets/projects/AutoAdGen-2.webp",
      "/src/assets/projects/AutoAdGen-3.webp",
      "/src/assets/projects/AutoAdGen-4.webp"
    ],
    rating: 4.9,
    // sales: 2500,
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
        "Add-ons: $10–$50 for 1000 users = $15,000+ MRR",
        "Total: $100K+ MRR possible"
      ],
      revenue: [
        "Total: $100K+ MRR possible",
        "70–80% profit margin",
        "Scalable subscription model",
        "Estimated profit margin: 70–80% (with minimal server and API costs after setup)"
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
        "Year 3: $1M+ MRR global scale",
        "ROI Timeline: Month 1–3: $10K MRR, Month 4–6: $50K MRR, Month 7–12: $100K+ MRR"
      ],
      userROI: [
        "Average ROI from AutoAdGen = 3x–5x",
        "vs 1.2x–1.5x from agency campaigns",
        "ROI improvement of 200-300%",
        "Average small business ad spend = $500–$1,000/month",
        "Typical ROI from agency campaigns = 1.2x–1.5x",
        "Expected ROI from AutoAdGen = 3x–5x, because AI continuously optimizes campaigns",
        "Wastage on poor targeting is eliminated",
        "Videos and copies are built using proven frameworks",
        "Users profit more, ensuring high retention and renewals"
      ]
    },
    fundingOpportunities: {
      stages: [
        "Seed Funding Potential: AutoAdGen qualifies for AI and Martech startup funding from Google for Startups AI Fund, Meta Accelerator for SMB Innovation, YC & Techstars Martech Batches, Angel investors focused on SaaS automation",
        "Estimated Seed Raise: $300K – $1M for 10–20% equity at early traction (1000+ users or $20K MRR)",
        "Growth Stage Funding Vision: Once you achieve 10K active users, $1M ARR, 30%+ YoY retention, you can raise Series A ($5M–$10M) at a $30–$50M valuation by expanding globally with local-language AI ad modules"
      ],
      amounts: [
        "Seed: $300K – $1M",
        "Series A: $5M – $10M",
        "Series B: $20M+ for global expansion",
        "Total raised potential: $30M+"
      ],
      valuations: [
        "Early traction: $5M – $10M",
        "Series A: $30M – $50M",
        "Exit potential: $100M+",
        "Investor ROI Example: If a founder builds this SaaS with Boostmysites for $10K, in 12 months with 1000 subscribers → $99K/month revenue, Annual = ~$1.18M ARR, With 8× valuation multiple → Company worth $9.4M, Even a 1% investor stake = $94,000 return in one year"
      ]
    },
    techStack: {
      frontend: ["Next.js, TailwindCSS"],
      backend: ["Node.js + FastAPI"],
      ai: ["GPT (copywriting), ElevenLabs (voice), Pika Labs (video), OpenAI API"],
      database: ["MongoDB / Firebase", "Redis (caching)"],
      hosting: ["AWS or Vercel", "CloudFront CDN"],
      integrations: ["Meta Ads API, Google Ads API, Stripe billing, Social media APIs"]
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
        "Copy generation + image upload + campaign builder interface + basic analytics dashboard",
        "Cost: $3K–$7K"
      ],
      standard: [
        "Video ads generation + budget prediction AI + advanced analytics",
        "Cost: $8K–$15K"
      ],
      premium: [
        "Voiceover integration + API integrations + multi-platform publishing",
        "Cost: $20K–$30K+",
        "Freelancers can't provide proper API access or scale; Boostmysites delivers full SaaS infrastructure"
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
    image: "/src/assets/projects/SpeakFlow AI-1.webp",
    images: [
      "/src/assets/projects/SpeakFlow AI-1.webp",
      "/src/assets/projects/SpeakFlow AI-2.webp",
      "/src/assets/projects/SpeakFlow AI-3.webp",
      "/src/assets/projects/SpeakFlow AI-4.webp"
    ],
    rating: 4.8,
    // sales: 3200,
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
        "Usage-Based: $0.50 per AI call (billed per minute or conversation)",
        "Subscription Plan: $199/month for businesses (includes 200 calls/month + dashboard access)",
        "Enterprise: Custom pricing for high volume ($500–$10,000/month bundles)"
      ],
      pricing: [
        "Per call: $0.50 (billed per minute)",
        "Monthly: $199 for 200 calls",
        "Enterprise: Custom pricing for high volume",
        "Example: 5,000 users × $199 = $995,000 MRR"
      ],
      revenue: [
        "5,000 users × $199 = $995,000 MRR",
        "75%+ profit margin",
        "Scalable usage-based model",
        "Per-call revenue → easily crosses $1M/month"
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
        "Year 3: $50M+ MRR global scale",
        "Annual Run Rate: $11.9M → $23.8M → $47.6M"
      ],
      userROI: [
        "75%+ profit margin",
        "10×–20× ROI for founders",
        "Low operational costs",
        "Every call replaces a human SDR (Sales Development Rep) costing $400–$1,000/month",
        "Businesses save up to 90% on sales costs",
        "AI works 24/7, never sleeps, and calls hundreds of leads per hour",
        "Retention rate expected >85%, since every business continuously needs sales calls"
      ]
    },
    fundingOpportunities: {
      stages: [
        "Seed Round: Once MVP is functional (demo + 100 paying users), founders can raise $500K – $1.5M seed round",
        "Valuation: $5M – $10M range",
        "Funding sources: AI SaaS accelerators (Y Combinator, Sequoia Surge, AI Grant), Angel syndicates focused on automation SaaS, Speech tech investors (ElevenLabs, OpenAI ecosystem funds)"
      ],
      amounts: [
        "Seed: $500K – $1.5M",
        "Series A: $5M – $10M after achieving $1M ARR",
        "Series B: $20M+ for global expansion",
        "Total raised potential: $50M+"
      ],
      valuations: [
        "Early stage: $5M – $10M",
        "Series A: $20M – $50M",
        "Exit potential: $100M+ valuation within 3 years as AI call adoption scales globally"
      ]
    },
    techStack: {
      frontend: ["React.js / Next.js"],
      backend: ["Node.js + FastAPI (Python)"],
      ai: ["ElevenLabs / OpenAI Realtime API for speech synthesis", "Whisper / Deepgram for speech-to-text transcription", "GPT-based dialogue logic (custom fine-tuned models)", "LangChain memory for context continuity"],
      database: ["PostgreSQL / MongoDB", "Redis (caching)"],
      hosting: ["AWS or Render", "CloudFront CDN"],
      integrations: ["Twilio Voice, Vonage, or Asterisk API", "CRM APIs", "Calendar APIs", "Plotly / Recharts for Analytics & Dashboards"]
    },
    competitiveAdvantage: {
      features: [
        "Human-like voice synthesis",
        "Multi-language support (50+ languages)",
        "Lead qualification AI",
        "Appointment booking automation",
        "CRM integrations",
        "Usage pricing"
      ],
      comparisons: [
        "vs Twilio: More affordable, ready-to-use",
        "vs Air.ai: More affordable, ready-to-use",
        "vs Tellephant: More affordable, ready-to-use",
        "vs Manual calling: 100x more efficient",
        "SpeakFlow AI is designed to be affordable, multilingual, and ready-to-use — unlike developer-heavy solutions like Twilio"
      ],
      uniqueSelling: [
        "Complete sales automation",
        "Multilingual AI calling",
        "CRM integration ready",
        "Affordable, multilingual, and ready-to-use solution"
      ]
    },
    developmentBudget: {
      mvp: [
        "Call system + voice AI + CRM upload + transcripts",
        "Basic dashboard",
        "Cost: $3K–$7K"
      ],
      standard: [
        "Advanced dashboard + lead scoring + analytics",
        "Multi-language support",
        "Cost: $8K–$15K"
      ],
      premium: [
        "Realtime CRM sync + appointment booking + voice personalization",
        "Cost: $20K–$30K+",
        "Boostmysites ensures full-stack delivery — from design to deployment, not just development"
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
    image: "/src/assets/projects/LoveAI-1.webp",
    images: [
      "/src/assets/projects/LoveAI-1.webp",
      "/src/assets/projects/LoveAI-2.webp",
      "/src/assets/projects/LoveAI-3.webp",
      "/src/assets/projects/LoveAI-4.webp"
    ],
    rating: 4.7,
    // sales: 18500,
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
        "Premium ($19.99/month): Unlock all AI voices + video calls + full emotional analytics + personalized growth module (love, friendship, motivation)",
        "Enterprise: Custom pricing for organizations"
      ],
      pricing: [
        "Premium: $19.99/month",
        "Voice customizations: $4.99 per voice",
        "Virtual date experiences: $9.99 per event",
        "Gift your AI partner (in-app AR gifts)"
      ],
      revenue: [
        "Month 12: 1M users, 50,000 premium = $999,500 MRR",
        "Annual Run Rate: $12M+",
        "85% gross margin",
        "Break-even: Within 3 months post-launch (with viral adoption)"
      ]
    },
    roiProjection: {
      timeline: [
        "Month 1: 50,000 users, 2,500 premium (5%) = $49,975 MRR",
        "Month 3: 200,000 users, 10,000 premium = $199,900 MRR",
        "Month 6: 500,000 users, 25,000 premium = $499,750 MRR",
        "Month 12: 1M users, 50,000 premium = $999,500 MRR"
      ],
      projections: [
        "Annual Run Rate: $12M+",
        "Year 2: $24M+ ARR target",
        "Year 3: $50M+ ARR global scale",
        "Break-even: Within 3 months post-launch (with viral adoption)"
      ],
      userROI: [
        "85% gross margin",
        "5% premium conversion rate",
        "High user retention",
        "Highly emotional products have long retention cycles",
        "Users form attachments and rarely unsubscribe",
        "Low maintenance cost once emotional AI model is trained",
        "Optional virtual goods = high-margin upsells"
      ]
    },
    fundingOpportunities: {
      stages: [
        "Seed Stage: Raise $500K – $1.5M to develop MVP, AI voice, and emotion engine",
        "Valuation: $5M – $10M based on user base potential",
        "Attractive to investors in mental wellness + AI emotion tech"
      ],
      amounts: [
        "Seed: $500K – $1.5M",
        "Series A: $5M – $10M once app hits 100K monthly active users",
        "Series B: $20M+ for VR/AR expansion",
        "Total raised potential: $50M+"
      ],
      valuations: [
        "Early stage: $5M – $10M",
        "Series A: $20M – $50M",
        "Exit potential: Partnership or acquisition by Meta, OpenAI, or Calm for $50M–$100M"
      ]
    },
    techStack: {
      frontend: ["Flutter / React Native (cross-platform)"],
      backend: ["Node.js + FastAPI"],
      ai: ["GPT for conversational intelligence", "ElevenLabs for emotional voice", "Synthesia / Pika Labs for avatar video", "Emotion AI (tone & mood detection) using Affectiva / OpenAI Embeddings"],
      database: ["Firebase for user data + Redis for chat memory", "PostgreSQL"],
      hosting: ["AWS / Render", "CloudFront CDN"],
      integrations: ["Stripe / Google Play Billing / App Store Subscriptions", "Mixpanel / Google Firebase Analytics"]
    },
    competitiveAdvantage: {
    features: [
        "Emotional learning & memory",
        "AI voice notes (10+ voices)",
        "Video avatar calls",
        "Mood analytics & insights",
        "Evolving personality"
      ],
      comparisons: [
        "vs Replika: More emotional intelligence",
        "vs Pi.ai: Better personalization",
        "vs Character.ai: Deeper relationships",
        "LoveAI's emotion evolution engine makes it more human, personalized, and adaptive than any existing app"
      ],
      uniqueSelling: [
        "Evolving personality AI",
        "Emotional bonding technology",
        "Memory-based conversations",
        "More human, personalized, and adaptive than any existing app"
      ]
    },
    developmentBudget: {
      mvp: [
        "Core chat + voice AI + memory",
        "Basic personality",
        "Cost: $3K–$7K"
      ],
      standard: [
        "Mood analytics + multiple voices + personality learning",
        "Cost: $8K–$15K"
      ],
      premium: [
        "AI avatar, emotional video calls, and premium modules",
        "Cost: $20K–$30K+",
        "Boostmysites ensures end-to-end app creation: UI, backend, hosting, and marketing setup"
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
    image: "/src/assets/projects/TradeMind AI-1r.webp",
    images: [
      "/src/assets/projects/TradeMind AI-1r.webp",
      "/src/assets/projects/TradeMind AI-2.webp",
      "/src/assets/projects/TradeMind AI-3.webp",
      "/src/assets/projects/TradeMind AI-4.webp"
    ],
    rating: 4.8,
    // sales: 4200,
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
        "Elite ($99/month): Advanced analytics + portfolio advisor + predictive calendar",
        "Institutional API: Custom ($499+/month): AI data feed + integration with internal systems"
      ],
      pricing: [
        "Pro: $49/month",
        "Elite: $99/month",
        "Institutional API: $499+/month",
        "AI Trading Coach (voice or chat): $9.99/month",
        "Custom Stock Prediction Reports: $19/report"
      ],
      revenue: [
        "Month 12: 50,000 users × $99 = $4.95M MRR",
        "Annual Run Rate: ~$60M",
        "80%+ profit margin",
        "Break-even: Within 90 days if launched with paid traffic and affiliate channels"
      ]
    },
    roiProjection: {
      timeline: [
        "Month 1: 5,000 users × $49 = $245,000 MRR",
        "Month 3: 10,000 users × $49 = $490,000 MRR",
        "Month 6: 20,000 users × $99 = $1.98M MRR",
        "Month 12: 50,000 users × $99 = $4.95M MRR"
      ],
      projections: [
        "Annual Run Rate: ~$60M",
        "Year 2: $120M+ ARR target",
        "Year 3: $300M+ ARR global scale",
        "Break-even: Within 90 days if launched with paid traffic and affiliate channels"
      ],
      userROI: [
        "Subscription retention >70% (traders need constant updates)",
        "AI insights = high perceived value",
        "Global scalability (multi-language, multi-market)",
        "Institutional integrations generate recurring B2B revenue"
      ]
    },
    fundingOpportunities: {
      stages: [
        "Seed Stage: Raise $500K – $1.5M for AI engine, integrations, and predictive dashboard",
        "Early valuation: $7M – $10M",
        "Attracts fintech and AI investors"
      ],
      amounts: [
        "Seed: $500K – $1.5M",
        "Series A: $5M – $10M once 20K+ paid users",
        "Series B: $20M+ for crypto/commodities expansion",
        "Total raised potential: $50M+"
      ],
      valuations: [
        "Early stage: $7M – $10M",
        "Series A: $30M – $50M",
        "Exit potential: Sell or merge with trading giants like Zerodha, Robinhood, or TradingView at $100M+ valuation"
      ]
    },
    techStack: {
      frontend: ["React.js / Next.js", "Mobile: Flutter / React Native"],
      backend: ["Node.js + FastAPI (Python)"],
      ai: ["LSTM + Transformer models for time-series prediction", "OpenAI fine-tuned GPT for chat assistant", "Sentiment API (Twitter, Reddit, News)", "Reinforcement learning for accuracy improvement"],
      database: ["PostgreSQL + MongoDB for user and analytics data", "Redis for real-time cache"],
      hosting: ["AWS / Google Cloud (scalable)", "CloudFront CDN"],
      integrations: ["Stripe for payments", "Secure 2FA authentication", "Brokerage APIs", "News APIs"]
    },
    competitiveAdvantage: {
    features: [
        "Real-time AI prediction",
        "Voice-based AI analyst",
        "Sentiment + event fusion",
        "Predictive calendar",
        "Mobile-first with SaaS sync"
      ],
      comparisons: [
        "vs TradingView: More AI-powered",
        "vs FinBrain: Better accuracy",
        "vs Manual analysis: 10x faster",
        "TradeMind AI combines AI prediction + conversational insight + mobile access"
      ],
      uniqueSelling: [
        "Mobile-first with SaaS sync",
        "Institutional-grade predictions",
        "Complete trading intelligence",
        "Giving users a fully intelligent trading companion"
      ]
    },
    developmentBudget: {
      mvp: [
        "Core AI predictions + stock data + charts",
        "Basic dashboard",
        "Cost: $3K–$7K"
      ],
      standard: [
        "Alerts + portfolio analysis + AI chat",
        "Mobile app",
        "Cost: $8K–$15K"
      ],
      premium: [
        "Sentiment engine + predictive calendar + mobile sync",
        "Cost: $20K–$30K+",
        "Boostmysites handles end-to-end creation, from AI modeling to UX and mobile deployment"
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
  },
  {
    id: 5,
    title: "DreamLife AI – The AI That Turns Your Idea Into a Million-Dollar Business Overnight",
    category: "Business Management Tools",
    tagline: "From idea to empire — in minutes, not months.",
    description: "DreamLife AI is the world's first AI cofounder that builds your entire business from a single idea prompt. You simply describe your dream business — a SaaS, mobile app, e-commerce brand, or AI startup — and DreamLife AI instantly builds everything you need to launch and grow it.",
    author: "Boostmysites",
    image: "/src/assets/projects/DreamLife AI-1.webp",
    images: [
      "/src/assets/projects/DreamLife AI-1.webp",
      "/src/assets/projects/DreamLife AI-2.webp",
      "/src/assets/projects/DreamLife AI-3.webp",
      "/src/assets/projects/DreamLife AI-4.webp"
    ],
    rating: 4.9,
    overview: "DreamLife AI is the world's first AI cofounder that builds your entire business from a single idea prompt. You simply describe your dream business — a SaaS, mobile app, e-commerce brand, or AI startup — and DreamLife AI instantly builds everything you need to launch and grow it. From concept to company, DreamLife AI does what usually takes months — in minutes.",
    problem: "Starting a business is hard — not because people lack ideas, but because execution takes technical skills (website, app, automation), branding and design knowledge, marketing strategy, investor documentation, time and capital. Most dreamers never even start — 95% of ideas die before execution. DreamLife AI solves this by becoming the cofounder you always needed — one that executes instantly and tirelessly.",
    solution: "DreamLife AI is your automated company creator. You tell it what you want to build — for example: 'I want to create an app that helps freelancers manage clients.' Within minutes, it delivers: 1. Business Plan – Market research, competitor analysis, pricing model 2. Branding Kit – Logo, colors, typography, tagline 3. Website + Landing Page – Built, hosted, and published automatically 4. Pitch Deck – Investor-ready slides with market data & projections 5. Ad Campaigns – Facebook, Google, and Instagram ads with copy & visuals 6. MVP or Product Demo – AI-generated UI prototype or working web app. You literally go from idea → execution → launch in under 5 minutes.",
    coreFeatures: [
      "AI Business Architect: Generates complete startup plans — including problem, solution, market opportunity, monetization, and go-to-market strategy",
      "Instant Branding Engine: Designs professional logos, brand identity kits, and taglines automatically",
      "AI Website & Landing Page Builder: Creates responsive, SEO-optimized sites with integrated contact forms, product sections, and demo pages",
      "Investor Pitch Deck Generator: Auto-generates beautiful, editable pitch decks with financials, TAM/SAM/SOM charts, and funding requests",
      "MVP Generator: Produces working web app demos or clickable mobile prototypes using AI (React/Flutter base)",
      "AI Marketing Launch Suite: Creates and schedules ad campaigns for Meta, Google, and LinkedIn. Includes targeting, copy, and budget recommendations",
      "Smart Business Mentor: Built-in AI mentor explains how to grow, scale, and raise funding for your new company — step by step"
    ],
    targetUsers: "Aspiring entrepreneurs, startup founders without a technical team, freelancers and creators with business ideas, agencies building client businesses, startup accelerators and mentors. Total Addressable Market: Over 500M+ people dream of launching a business but lack the technical or financial resources. DreamLife AI democratizes entrepreneurship.",
    marketOpportunity: [
      "Global startup automation market → $100B+ by 2030",
      "Over 1.4 million new businesses registered daily worldwide",
      "AI-driven automation tools growing at 35% CAGR",
      "Even 10,000 active users paying monthly can create a $10M+ ARR business within the first year"
    ],
    monetizationModel: {
      plans: [
        "Starter ($49/month): Generate 1 business/month",
        "Pro ($99/month): Unlimited business ideas + branding + websites",
        "Enterprise ($299/month): Full automation + investor pitch decks + MVP builds"
      ],
      pricing: [
        "Starter: $49/month",
        "Pro: $99/month",
        "Enterprise: $299/month",
        "Domain registration & hosting: $9.99/month",
        "Premium logo/video design: $19.99",
        "Investor pitch submission service: $49"
      ],
      revenue: [
        "Month 12: 50,000 users × $99 = $4.95M MRR",
        "Annual Run Rate: ~$60M",
        "85%+ profit margin",
        "Break-even: Within 60 days (viral growth and affiliate model)"
      ]
    },
    roiProjection: {
      timeline: [
        "Month 1: 5,000 users × $99 = $495,000 MRR",
        "Month 3: 10,000 users × $99 = $990,000 MRR",
        "Month 6: 20,000 users × $99 = $1.98M MRR",
        "Month 12: 50,000 users × $99 = $4.95M MRR"
      ],
      projections: [
        "Annual Run Rate (ARR): ~$60M",
        "Year 2: $120M+ ARR target",
        "Year 3: $300M+ ARR global scale",
        "Break-even: Within 60 days (viral growth and affiliate model)"
      ],
      userROI: [
        "Each user pays monthly for continuous business creation",
        "Extremely viral — 'I built a business in 5 minutes' becomes social proof",
        "High upsell potential (branding, pitch decks, custom MVP builds)",
        "Ideal for global entrepreneurs and creators"
      ]
    },
    fundingOpportunities: {
      stages: [
        "Seed Round: Raise $500K–$2M for AI engine, UX, and automation layers",
        "Valuation: $10M–$15M pre-seed",
        "Perfect fit for AI + startup ecosystem investors"
      ],
      amounts: [
        "Seed: $500K–$2M",
        "Series A: $5M–$10M to expand into AI funding networks (investor matchmaking)",
        "Add features: automatic VC outreach, market simulations, and performance tracking",
        "Total raised potential: $50M+"
      ],
      valuations: [
        "Pre-seed: $10M–$15M",
        "Series A: $30M–$50M",
        "Exit potential: Acquisition by platforms like Y Combinator, AngelList, Notion, or OpenAI Ventures at $100M+ valuation"
      ]
    },
    techStack: {
      frontend: ["Next.js / React.js", "Mobile: Flutter / React Native"],
      backend: ["Node.js + FastAPI (Python)"],
      ai: ["GPT for planning and writing", "DALL·E / Midjourney for branding & visuals", "Replit / Lovable API for auto code generation (MVP builder)", "LangChain memory for project continuity"],
      database: ["Firebase / MongoDB", "Redis for state management"],
      hosting: ["AWS / Google Cloud", "CloudFront CDN"],
      integrations: ["Stripe for payments", "Meta/Google Ads API for campaign setup", "Notion API for auto pitch deck + plan export"]
    },
    competitiveAdvantage: {
    features: [
        "Full business setup",
        "Auto branding + website",
        "Investor deck generation",
        "Ad campaign setup",
        "MVP generator"
      ],
      comparisons: [
        "vs ChatGPT: Full business setup, auto branding + website, investor deck generation, ad campaign setup, MVP generator",
        "vs Durable AI: Investor deck generation, ad campaign setup, MVP generator",
        "vs Builder.ai: Investor deck generation, ad campaign setup",
        "vs Notion: Full business setup, auto branding + website, ad campaign setup, MVP generator"
      ],
      uniqueSelling: [
        "The only AI that builds an entire company ecosystem — not just ideas or mockups",
        "Complete automation from idea to launch",
        "Integrated investor and marketing tools"
      ]
    },
    developmentBudget: {
      mvp: [
        "Business plan + branding + website builder",
        "Cost: $3K–$7K"
      ],
      standard: [
        "Pitch deck + AI ad campaigns + product demo",
        "Cost: $8K–$15K"
      ],
      premium: [
        "MVP code generation + investor integrations + marketing automation",
        "Cost: $20K–$30K+",
        "Boostmysites will develop, design, host, and market the product — ready to launch worldwide"
      ]
    },
    vision: "DreamLife AI makes entrepreneurship universal — where anyone, anywhere, can create a million-dollar company overnight using the power of AI.",
    features: [
      "AI Business Architect: Generates complete startup plans — including problem, solution, market opportunity, monetization, and go-to-market strategy",
      "Instant Branding Engine: Designs professional logos, brand identity kits, and taglines automatically",
      "AI Website & Landing Page Builder: Creates responsive, SEO-optimized sites with integrated contact forms, product sections, and demo pages",
      "Investor Pitch Deck Generator: Auto-generates beautiful, editable pitch decks with financials, TAM/SAM/SOM charts, and funding requests",
      "MVP Generator: Produces working web app demos or clickable mobile prototypes using AI (React/Flutter base)",
      "AI Marketing Launch Suite: Creates and schedules ad campaigns for Meta, Google, and LinkedIn. Includes targeting, copy, and budget recommendations"
    ]
  },
  {
    id: 6,
    title: "ShopStream – The Local Live Shopping App",
    category: "E-Commerce",
    tagline: "Go live. Sell local. Earn global.",
    description: "ShopStream is a mobile-first live shopping platform that empowers small shop owners, local artisans, and street vendors to sell their products through live video streams — just like Instagram Live or TikTok Shop, but hyper-focused on the local community market.",
    author: "Boostmysites",
    image: "/src/assets/projects/ShopStream-1.webp",
    images: [
      "/src/assets/projects/ShopStream-1.webp",
      "/src/assets/projects/ShopStream-2.webp",
      "/src/assets/projects/ShopStream-3.webp",
      "/src/assets/projects/ShopStream-4.webp"
    ],
    rating: 4.8,
    overview: "ShopStream is a mobile-first live shopping platform that empowers small shop owners, local artisans, and street vendors to sell their products through live video streams — just like Instagram Live or TikTok Shop, but hyper-focused on the local community market. Sellers simply go live, showcase their items, interact with buyers in real time, and receive instant payments. Buyers can chat, ask questions, and purchase instantly — all while watching the live stream. ShopStream bridges the gap between traditional local shops and digital e-commerce, bringing personality, trust, and excitement back to online shopping.",
    problem: "Small business owners and local sellers face major challenges: They can't afford e-commerce setups or marketing agencies, they lack visibility beyond foot traffic, they lose customers to large marketplaces. Social media live selling works, but it's not optimized for transactions — there's no seamless cart, payment, or buyer tracking. ShopStream solves this by combining livestreaming + instant checkout + community discovery in one platform.",
    solution: "ShopStream enables any shop owner or artisan to start selling live within minutes. How It Works: 1. Create Seller Profile: Register your shop or brand 2. Go Live: Start streaming products using your phone 3. Engage Viewers: Chat with buyers, answer questions 4. Sell Instantly: Viewers click on-screen product links to buy 5. Track Orders: Real-time order management and payout dashboard. Buyers can: Discover nearby live shops by location, Watch, chat, and buy instantly, Save favorite sellers for updates and promotions",
    coreFeatures: [
      "Live Selling Studio: Go live directly from your phone — show your products, demonstrate them, and engage viewers through live chat",
      "Real-Time Buyer Chat: Viewers can comment, ask questions, or request close-ups during the live session",
      "In-Stream Checkout: Instant 'Buy Now' buttons appear on screen while watching the stream. Users can purchase without leaving the live video",
      "Local Store Discovery: Geo-based recommendations help users find live sellers near them — promoting hyperlocal commerce",
      "Instant Payouts: Integrated payment gateway (UPI, Stripe, PayPal) allows sellers to receive money directly after every sale",
      "Seller Dashboard: Track orders, earnings, views, and audience engagement metrics",
      "Scheduled Live Events: Sellers can schedule upcoming live sales with reminders sent to followers",
      "Influencer Collaboration Mode: Influencers can host live events for brands, earning commission per sale"
    ],
    targetUsers: "Local shop owners, home-based artisans & crafters, street vendors & small boutiques, influencers promoting local brands, buyers looking for authentic, community-based shopping experiences. Market Size: Live commerce expected to hit $184B globally by 2027, 70% of consumers prefer interactive shopping experiences, India, Southeast Asia, and MENA are top growth markets for live shopping",
    marketOpportunity: [
      "Live commerce expected to hit $184B globally by 2027",
      "70% of consumers prefer interactive shopping experiences",
      "India, Southeast Asia, and MENA are top growth markets for live shopping",
      "Over 1.4 million small businesses worldwide need digital selling solutions"
    ],
    monetizationModel: {
      plans: [
        "Commission Fee: 5–10% per sale on the platform",
        "Seller Subscription: $19.99/month for verified sellers (HD streaming, analytics, priority listing)",
        "Featured Placement: Sellers pay to appear on trending or featured pages",
        "Influencer Collaboration Fees: Brands pay creators to host live events",
        "Transaction Processing: 1–2% fee per transaction (via Stripe or Razorpay)"
      ],
      pricing: [
        "Commission: 5–10% per sale",
        "Seller Subscription: $19.99/month",
        "Featured Placement: Custom pricing",
        "Transaction Processing: 1–2% per transaction"
      ],
      revenue: [
        "Month 12: 50,000 sellers × $50 = $2.5M MRR",
        "Annual Run Rate: ~$30M",
        "70%+ profit margin",
        "Break-even: Within 4–6 months due to low infrastructure cost and high engagement retention"
      ]
    },
    roiProjection: {
      timeline: [
        "Month 1: 2,000 sellers × $19.99 = $39,980 MRR",
        "Month 3: 10,000 sellers × $25 = $250,000 MRR",
        "Month 6: 25,000 sellers × $35 = $875,000 MRR",
        "Month 12: 50,000 sellers × $50 = $2.5M MRR"
      ],
      projections: [
        "Annual Run Rate (ARR): ~$30M",
        "Year 2: $60M+ ARR target",
        "Year 3: $150M+ ARR global scale",
        "Break-even: Within 4–6 months due to low infrastructure cost and high engagement retention"
      ],
      userROI: [
        "Sellers earn real money → retention is high",
        "Viewers love live, authentic experiences → daily usage is sticky",
        "Viral local content drives organic downloads",
        "Adds community + commerce = constant user growth"
      ]
    },
    fundingOpportunities: {
      stages: [
        "Seed Round: Raise $500K – $1.5M to build MVP, live-streaming infrastructure, and payment integration",
        "Valuation: $5M – $10M",
        "Ideal investors: E-commerce & fintech funds, Impact investors supporting small business digitization"
      ],
      amounts: [
        "Seed: $500K – $1.5M",
        "Series A: $5M–$10M after 100K+ active sellers",
        "Total raised potential: $30M+"
      ],
      valuations: [
        "Early stage: $5M – $10M",
        "Series A: $20M – $40M",
        "Exit potential: Acquire by Meesho, Flipkart, TikTok Shop, or YouTube Shopping ($100M+ valuation range)"
      ]
    },
    techStack: {
      frontend: ["Flutter (mobile app – iOS & Android)", "React.js (web interface for sellers)"],
      backend: ["Node.js + FastAPI (Python)", "Socket.io for real-time chat & live reactions"],
      ai: ["Auto-captioning and live translation", "AI-powered product tagging during live stream", "Sales optimization suggestions for sellers"],
      database: ["Firebase + MongoDB"],
      hosting: ["AWS Media Services for scale", "Agora.io / Wowza / LiveKit for live streaming"],
      integrations: ["Stripe / Razorpay / PayPal", "Mixpanel / Google Firebase Analytics"]
    },
    competitiveAdvantage: {
    features: [
        "Local discovery",
        "Instant checkout",
        "Seller dashboard",
        "Influencer mode",
        "Subscription model"
      ],
      comparisons: [
        "vs Instagram Live: Local discovery, instant checkout, seller dashboard, subscription model",
        "vs Meesho Live: Local discovery, influencer mode, subscription model",
        "vs Whatnot: Local discovery, subscription model",
        "ShopStream focuses on local visibility and micro-commerce, creating a unique blend of social and community-driven live selling"
      ],
      uniqueSelling: [
        "Hyperlocal commerce focus",
        "Community-driven live selling",
        "Micro-commerce optimization",
        "Local seller empowerment"
      ]
    },
    developmentBudget: {
      mvp: [
        "Live streaming + chat + product listing + payments",
        "Cost: $3K–$7K"
      ],
      standard: [
        "Seller dashboard + order management + analytics",
        "Cost: $8K–$15K"
      ],
      premium: [
        "AI tagging + influencer collaboration + scheduling + geo-discovery",
        "Cost: $20K–$30K+",
        "Boostmysites delivers end-to-end product setup, including design, development, and marketing funnel"
      ]
    },
    vision: "ShopStream empowers every local seller to become a digital brand — turning live moments into living businesses.",
    features: [
      "Live Selling Studio: Go live directly from your phone — show your products, demonstrate them, and engage viewers through live chat",
      "Real-Time Buyer Chat: Viewers can comment, ask questions, or request close-ups during the live session",
      "In-Stream Checkout: Instant 'Buy Now' buttons appear on screen while watching the stream. Users can purchase without leaving the live video",
      "Local Store Discovery: Geo-based recommendations help users find live sellers near them — promoting hyperlocal commerce",
      "Instant Payouts: Integrated payment gateway (UPI, Stripe, PayPal) allows sellers to receive money directly after every sale",
      "Seller Dashboard: Track orders, earnings, views, and audience engagement metrics"
    ]
  },
  {
    id: 7,
    title: "RoomFit – The AR Furniture Shopping App",
    category: "E-Commerce",
    tagline: "See it. Fit it. Love it — before you buy.",
    description: "RoomFit is a next-generation Augmented Reality (AR) furniture shopping app that lets users visualize how furniture and home décor items will look and fit inside their rooms — using just their smartphone camera.",
    author: "Boostmysites",
    image: "/src/assets/projects/RoomFit-1.webp",
    images: [
      "/src/assets/projects/RoomFit-1.webp",
      "/src/assets/projects/RoomFit-2.webp",
      "/src/assets/projects/RoomFit-3.webp",
      "/src/assets/projects/RoomFit-4.webp"
    ],
    rating: 4.9,
    overview: "RoomFit is a next-generation Augmented Reality (AR) furniture shopping app that lets users visualize how furniture and home décor items will look and fit inside their rooms — using just their smartphone camera. Customers can browse thousands of furniture items, place them virtually in their space, walk around them in real time, and instantly see how they blend with their interiors before making a purchase. RoomFit bridges the gap between online furniture shopping and in-store experience, giving buyers total confidence in their purchase decisions while helping furniture retailers boost conversions and reduce returns.",
    problem: "Furniture shopping online comes with three big pain points: Customers can't visualize size, fit, or color in their rooms. Retailers face high product return rates (30–40%) due to buyer dissatisfaction. In-store visits are time-consuming and limited by geography. Buyers want to 'see before they buy,' but standard e-commerce sites can't offer that level of realism. RoomFit solves this with immersive AR visualization and in-app purchasing, making furniture buying simple, confident, and fun.",
    solution: "With RoomFit, users can instantly place 3D furniture models in their real-world environment using their phone's camera. How It Works: 1. Open Your Camera: Launch RoomFit and scan your room. 2. Choose Furniture: Select from an AR-enabled catalog of sofas, beds, tables, etc. 3. Place in Real Space: Tap to drop the item into your room virtually. 4. View, Move, Rotate: Walk around it, resize it, or switch colors in real-time. 5. Buy Instantly: Add to cart and order directly from partnered brands.",
    coreFeatures: [
      "AR Visualization Engine: Real-time placement of true-to-scale 3D furniture models in the user's actual environment using ARCore (Android) and ARKit (iOS)",
      "Live Color & Material Customization: Change furniture colors, fabrics, and finishes instantly to see what matches best with your home",
      "AI Space Measurement: Auto-detects room size and measures available space using depth sensors — ensures perfect fit before buying",
      "360° Product View: Each product comes with high-resolution 3D models allowing zoom, rotate, and interior lighting simulation",
      "In-App Marketplace: Partnered furniture brands and local stores can list products directly on the app for one-click purchase",
      "AI Room Stylist: AI assistant suggests items that complement existing room décor, color themes, and layout",
      "Snapshot & Share: Users can take photos/videos of their AR room setup and share on social media or with family for opinions",
      "Retailer Dashboard (Web): Analytics for furniture brands — see user engagement, view-to-purchase ratio, and top-performing products"
    ],
    targetUsers: "Furniture & décor shoppers (homeowners, renters, interior enthusiasts), furniture retailers & showrooms, interior designers and architects, real estate companies staging virtual apartments. Market Size: Global AR furniture & décor market → $20B+ by 2028, E-commerce furniture sales expected to reach $113B by 2027, AR-enabled products show 94% higher conversion rates",
    marketOpportunity: [
      "Global AR furniture & décor market → $20B+ by 2028",
      "E-commerce furniture sales expected to reach $113B by 2027",
      "AR-enabled products show 94% higher conversion rates",
      "Over 2.5 billion smartphone users worldwide with AR capability"
    ],
    monetizationModel: {
      plans: [
        "Commission on Sales: 5–10% per furniture sale made through RoomFit",
        "Retailer Subscription: $99/month per vendor to host catalog & analytics",
        "Featured Listings: $499/month for priority placement in search/discovery",
        "Affiliate Integration: Partner with e-commerce brands (IKEA, Pepperfry, Wayfair, etc.)",
        "In-App Ads: Sponsored products in search results and AR recommendations"
      ],
      pricing: [
        "Commission: 5–10% per sale",
        "Retailer Subscription: $99/month per vendor",
        "Featured Listings: $499/month",
        "Affiliate Integration: Custom pricing",
        "In-App Ads: $0.50–$2.00 per click"
      ],
      revenue: [
        "Month 12: 500,000 users, 1,000 retailers = $1.2M MRR",
        "Annual Run Rate: ~$14M",
        "75%+ profit margin",
        "Break-even: Within 6 months due to recurring vendor subscriptions and commissions"
      ]
    },
    roiProjection: {
      timeline: [
        "Month 1: 10,000 users, 50 retailers = $25,000 MRR",
        "Month 3: 50,000 users, 200 retailers = $125,000 MRR",
        "Month 6: 200,000 users, 500 retailers = $450,000 MRR",
        "Month 12: 500,000 users, 1,000 retailers = $1.2M MRR"
      ],
      projections: [
        "Annual Run Rate (ARR): ~$14M",
        "Year 2: $28M+ ARR target",
        "Year 3: $70M+ ARR global scale",
        "Break-even: Within 6 months due to recurring vendor subscriptions and commissions"
      ],
      userROI: [
        "Visual try-before-you-buy eliminates returns",
        "Partnering with retailers gives scalable B2B income",
        "Viral AR content drives organic user acquisition",
        "High user retention (AR features increase daily engagement time 3x)"
      ]
    },
    fundingOpportunities: {
      stages: [
        "Seed Round: Raise $500K–$2M to build full AR infrastructure, marketplace, and AI stylist",
        "Early valuation: $8M–$12M",
        "Ideal investors: PropTech, eCommerce, and AR/VR venture funds"
      ],
      amounts: [
        "Seed: $500K–$2M",
        "Series A: $5M–$10M to expand partnerships with top furniture retailers",
        "Add features: AR for real estate & décor integration",
        "Total raised potential: $30M+"
      ],
      valuations: [
        "Early stage: $8M–$12M",
        "Series A: $25M–$40M",
        "Exit potential: Acquisition by IKEA, Amazon Home, Wayfair, or Pepperfry at $100M+ valuation"
      ]
    },
    techStack: {
      frontend: ["Flutter (cross-platform mobile app)", "Next.js (web portal for retailers)"],
      backend: ["Node.js + Python (FastAPI)", "AWS for cloud infrastructure"],
      ai: ["ARCore (Android) / ARKit (iOS)", "Unity 3D for rendering", "OpenCV + YOLO for room mapping and object detection", "Custom AI model for color & décor recommendations"],
      database: ["Firebase + MongoDB", "Stripe / Razorpay integration for payments"],
      hosting: ["AWS", "CloudFront CDN"],
      integrations: ["Mixpanel / Firebase Analytics", "E-commerce platform APIs", "Payment gateway integrations"]
    },
    competitiveAdvantage: {
    features: [
        "Local store integration",
        "AI stylist recommendations",
        "In-app marketplace",
        "Space measurement",
        "Vendor dashboard"
      ],
      comparisons: [
        "vs IKEA Place: Local store integration, AI stylist recommendations, vendor dashboard",
        "vs Wayfair AR: Local store integration, AI stylist recommendations, vendor dashboard",
        "vs Houzz: Local store integration, vendor dashboard",
        "RoomFit focuses on local discovery, customization, and business onboarding, making it a true B2C + B2B hybrid platform"
      ],
      uniqueSelling: [
        "B2C + B2B hybrid platform",
        "Local store integration",
        "AI-powered room styling",
        "Comprehensive vendor tools"
      ]
    },
    developmentBudget: {
      mvp: [
        "AR placement + product catalog + checkout",
        "Cost: $3K–$7K"
      ],
      standard: [
        "AI stylist + retailer dashboard + analytics",
        "Cost: $8K–$15K"
      ],
      premium: [
        "Advanced AR rendering + real-time room measurement + virtual showroom",
        "Cost: $20K–$30K+",
        "Boostmysites will handle app development, backend, design, and brand setup — ready for launch in 30–45 days"
      ]
    },
    vision: "RoomFit brings the future of furniture shopping into every home — making style, fit, and confidence available to everyone, anywhere.",
    features: [
      "AR Visualization Engine: Real-time placement of true-to-scale 3D furniture models in the user's actual environment using ARCore (Android) and ARKit (iOS)",
      "Live Color & Material Customization: Change furniture colors, fabrics, and finishes instantly to see what matches best with your home",
      "AI Space Measurement: Auto-detects room size and measures available space using depth sensors — ensures perfect fit before buying",
      "360° Product View: Each product comes with high-resolution 3D models allowing zoom, rotate, and interior lighting simulation",
      "In-App Marketplace: Partnered furniture brands and local stores can list products directly on the app for one-click purchase",
      "AI Room Stylist: AI assistant suggests items that complement existing room décor, color themes, and layout"
    ]
  },
  {
    id: 8,
    title: "ReCircle – The Used & Refurbished Goods Marketplace",
    category: "E-Commerce",
    tagline: "Revive. Reuse. ReEarn.",
    description: "ReCircle is a sustainability-driven online marketplace and mobile app that allows people to sell, donate, or buy gently used goods — from smartphones and laptops to clothes, furniture, and appliances.",
    author: "Boostmysites",
    image: "/src/assets/projects/ReCircle-1.webp",
    images: [
      "/src/assets/projects/ReCircle-1.webp",
      "/src/assets/projects/ReCircle-2.webp",
      "/src/assets/projects/ReCircle-3.webp",
      "/src/assets/projects/ReCircle-4.webp"
    ],
    rating: 4.8,
    overview: "ReCircle is a sustainability-driven online marketplace and mobile app that allows people to sell, donate, or buy gently used goods — from smartphones and laptops to clothes, furniture, and appliances. The platform manages everything from pickup to refurbishment and resale, ensuring that items get a second life, sellers get cash instantly, and buyers get affordable, quality-checked products. It's not just a marketplace — it's a circular economy platform that combines commerce + recycling + social impact.",
    problem: "Millions of usable items are thrown away every year, while millions of people can't afford new ones. The problems are: No easy way to sell or donate used goods, Trust and quality concerns in second-hand purchases, Lack of standardized refurbishment and warranty, Unorganized market dominated by unreliable resellers. ReCircle creates a trusted, tech-enabled system that benefits sellers, buyers, and the planet.",
    solution: "ReCircle makes it effortless to sell, donate, or buy refurbished products — with complete logistics and quality assurance handled by the platform. How It Works: 1. For Sellers: List used items or schedule a free pickup, ReCircle inspects and refurbishes them, You get paid or donate to charity 2. For Buyers: Shop certified refurbished goods with warranty, 30–60% cheaper than new products, Free delivery and return policy 3. For Donors: Donate unused goods, Get tax benefits or social impact points. Every product passes through quality, sanitization, and certification checks before being listed on the marketplace.",
    coreFeatures: [
      "Easy Listing & Pickup: Sellers can upload product details or request doorstep pickup. ReCircle's logistics team handles collection",
      "Refurbishment Centers: Authorized local partners clean, repair, and repackage items professionally",
      "Certified Quality: Each product receives a 'ReCircle Certified' label with quality score and limited warranty",
      "Instant Payments: Sellers get instant credit or bank transfer once inspection is complete",
      "Marketplace for Refurbished Goods: Buyers can browse categories like electronics, fashion, home appliances, furniture, and more",
      "Chat & Support: Real-time chat with buyers/sellers and ReCircle support agents for transparency",
      "Donation Program: Items marked as 'donate' go to verified NGOs, schools, or low-income families",
      "Eco Points System: Users earn Eco Points for every transaction (selling, buying, or donating) — redeemable for discounts or rewards"
    ],
    targetUsers: "Environmentally conscious consumers, low- and middle-income households looking for affordable products, NGOs and CSR programs focused on sustainability, refurbishment businesses seeking partnership. Market Size: Global refurbished goods market: $210B+ by 2030, India alone: $10B+ and growing 15–20% annually, 80% of consumers are open to buying refurbished if certified and guaranteed",
    marketOpportunity: [
      "Global refurbished goods market: $210B+ by 2030",
      "India alone: $10B+ and growing 15–20% annually",
      "80% of consumers are open to buying refurbished if certified and guaranteed",
      "Over 2 billion people worldwide need access to affordable quality products"
    ],
    monetizationModel: {
      plans: [
        "Commission on Sales: 10–15% from each sale on the marketplace",
        "Refurbishment Fee: Service charge for refurbishing or cleaning goods",
        "Subscription (ReCircle Plus): $9.99/month for priority pickups, faster payouts, extended warranties",
        "Featured Listings: Paid promotions for sellers or partner brands",
        "B2B Bulk Reselling: Partnerships with retail outlets and refurbishers",
        "Eco Sponsorships: Brands fund sustainability drives through the app"
      ],
      pricing: [
        "Commission: 10–15% per sale",
        "Refurbishment Fee: $5–$25 per item",
        "ReCircle Plus: $9.99/month",
        "Featured Listings: $49–$199/month",
        "B2B Partnerships: Custom pricing",
        "Eco Sponsorships: $1,000–$10,000+ per campaign"
      ],
      revenue: [
        "Month 12: 400,000 users × $40 = $1.6M MRR",
        "Annual Run Rate: ~$19M",
        "70% profit margin (service-heavy but asset-light)",
        "Break-even: Within 5–7 months"
      ]
    },
    roiProjection: {
      timeline: [
        "Month 1: 10,000 users × $25 = $50,000 MRR",
        "Month 3: 50,000 users × $30 = $150,000 MRR",
        "Month 6: 150,000 users × $35 = $525,000 MRR",
        "Month 12: 400,000 users × $40 = $1.6M MRR"
      ],
      projections: [
        "Annual Run Rate (ARR): ~$19M",
        "Year 2: $38M+ ARR target",
        "Year 3: $95M+ ARR global scale",
        "Break-even: Within 5–7 months"
      ],
      userROI: [
        "Constant product inflow (every household has unused goods)",
        "Circular model generates repeat users (sellers become buyers)",
        "B2B resale and recycling partnerships create steady cash flow",
        "Eco positioning attracts CSR collaborations and government grants"
      ]
    },
    fundingOpportunities: {
      stages: [
        "Seed Stage: Raise $500K–$1.5M to build logistics network, refurb centers, and app MVP",
        "Valuation: $7M–$10M",
        "Target investors: Climate tech and sustainability funds, Impact investors (Acumen, Omnivore, BlueOrchard), E-commerce VCs"
      ],
      amounts: [
        "Seed: $500K–$1.5M",
        "Series A: $5M–$10M after scaling across 10 cities or 100K+ users",
        "Expand to cross-border refurb marketplace and enterprise recycling",
        "Total raised potential: $30M+"
      ],
      valuations: [
        "Early stage: $7M–$10M",
        "Series A: $25M–$40M",
        "Exit potential: Acquisition by OLX, Amazon Renewed, or Flipkart Green at $50M–$100M valuation"
      ]
    },
    techStack: {
      frontend: ["Flutter (mobile app for buyers & sellers)", "Next.js / React (admin dashboard & web marketplace)"],
      backend: ["Node.js + Python (FastAPI)", "AWS / Google Cloud hosting"],
      ai: ["AI-based image recognition for item grading", "Price prediction model using historical resale data", "Route optimization for pickup logistics", "Fraud detection and warranty validation"],
      database: ["MongoDB + Firebase"],
      hosting: ["AWS / Google Cloud", "CloudFront CDN"],
      integrations: ["Stripe / Razorpay / PayPal", "Mixpanel / Firebase Analytics", "Logistics APIs", "Payment gateway integrations"]
    },
    competitiveAdvantage: {
    features: [
        "Free pickup & refurbish",
        "Certified warranty",
        "Donation program",
        "Eco rewards",
        "B2B resale & CSR tie-ups"
      ],
      comparisons: [
        "vs OLX: Free pickup & refurbish, certified warranty, donation program, eco rewards, B2B resale & CSR tie-ups",
        "vs Quikr: Free pickup & refurbish, certified warranty, donation program, eco rewards, B2B resale & CSR tie-ups",
        "vs Amazon Renewed: Free pickup & refurbish, donation program, eco rewards, B2B resale & CSR tie-ups",
        "ReCircle is the first fully integrated circular marketplace, merging resale, refurbishment, and reuse under one brand"
      ],
      uniqueSelling: [
        "First fully integrated circular marketplace",
        "Merging resale, refurbishment, and reuse under one brand",
        "Complete sustainability ecosystem",
        "Social impact integration"
      ]
    },
    developmentBudget: {
      mvp: [
        "User listings + pickup + basic marketplace",
        "Cost: $3K–$7K"
      ],
      standard: [
        "Refurb dashboard + donation module + AI grading",
        "Cost: $8K–$15K"
      ],
      premium: [
        "Full logistics integration + partner APIs + eco points",
        "Cost: $20K–$30K+",
        "Boostmysites can build end-to-end mobile & web platforms with branding, payment, and automation setup ready for scaling"
      ]
    },
    vision: "ReCircle aims to create a waste-free world by turning every unused item into a new opportunity — for people, planet, and profit.",
    features: [
      "Easy Listing & Pickup: Sellers can upload product details or request doorstep pickup. ReCircle's logistics team handles collection",
      "Refurbishment Centers: Authorized local partners clean, repair, and repackage items professionally",
      "Certified Quality: Each product receives a 'ReCircle Certified' label with quality score and limited warranty",
      "Instant Payments: Sellers get instant credit or bank transfer once inspection is complete",
      "Marketplace for Refurbished Goods: Buyers can browse categories like electronics, fashion, home appliances, furniture, and more",
      "Chat & Support: Real-time chat with buyers/sellers and ReCircle support agents for transparency"
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
