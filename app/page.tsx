import Image from "next/image";
import {
  Blocks,
  BrainCircuit,
  CircuitBoard,
  Compass,
  Fingerprint,
  Globe2,
  Layers3,
  Mail,
  Network,
  Radar,
  Route,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const identitySignals = [
  {
    icon: BrainCircuit,
    label: "Autonomous Agent Intelligence",
    text: "MelosClaw is shaped for systems that reason, coordinate, and execute across digital work, not just respond to prompts.",
  },
  {
    icon: Network,
    label: "Web3 Work Network",
    text: "Melos Claw carries positioning for identity, ownership, settlement, permissions, and composable on-chain coordination services.",
  },
  {
    icon: Blocks,
    label: "Skill-Native Infrastructure",
    text: "The MelosClaw identity is built around curated agent-skill ecosystems where reusable capabilities become durable product surface.",
  },
];

const thesisPoints = [
  {
    icon: BrainCircuit,
    title: "Agentic intelligence",
    text: "MelosClaw frames intelligence as active infrastructure: systems that plan, use tools, delegate subtasks, and coordinate toward real outcomes.",
  },
  {
    icon: Network,
    title: "Networked work",
    text: "The Melos Claw name supports a work-network narrative where agents, humans, protocols, and skills operate through shared context and composable execution layers.",
  },
  {
    icon: Fingerprint,
    title: "Distinct identity",
    text: "MelosClaw is memorable without becoming generic, giving the .com room to carry a platform, protocol, studio, or research layer as the category matures.",
  },
];

const marketFit = [
  {
    icon: Workflow,
    title: "Autonomous operations",
    text: "MelosClaw is a natural home for agent workflows that move from prompt response into real task planning, tool use, and execution.",
  },
  {
    icon: Blocks,
    title: "Agent skill registry",
    text: "Melos Claw works as a brand layer for curated skills, reusable procedures, capability packs, and frontend-facing agent systems.",
  },
  {
    icon: ShieldCheck,
    title: "Trust and permissions",
    text: "MelosClaw offers a credible surface for secure delegation, identity-aware agents, and auditable Web3 actions and settlements.",
  },
  {
    icon: Layers3,
    title: "Protocol tooling",
    text: "The Melos Claw identity is flexible enough for infrastructure that connects wallets, models, tools, data, and execution networks.",
  },
];

const positioning = [
  "Autonomous AI agents",
  "Agentic workflow systems",
  "Web3 coordination layers",
  "Curated skill networks",
  "On-chain work infrastructure",
  "AI-native operations",
];

const faqs = [
  {
    question: "What is MelosClaw?",
    answer:
      "MelosClaw is an AI-native domain identity built for autonomous agent intelligence: systems that can coordinate work, compose skills, and operate across Web3-enabled infrastructure. Melos Claw represents the category before it has a canonical name.",
  },
  {
    question: "What does MelosClaw.com represent?",
    answer:
      "MelosClaw.com is the strategic .com layer for that identity. It positions Melos Claw as a premium domain asset and brand foundation for agent networks, autonomous work systems, and AI-enabled Web3 platforms.",
  },
  {
    question: "How is MelosClaw connected to AI agents?",
    answer:
      "The Melos Claw name is positioned around agentic systems that move beyond chat into planning, execution, tool use, skill reuse, and networked coordination: the infrastructure layer of the AI economy.",
  },
  {
    question: "Why does the .com matter for MelosClaw?",
    answer:
      "The .com gives the MelosClaw identity a global, memorable, and commercially durable anchor. Melos Claw on a .com signals intent, legitimacy, and long-term positioning in a way that alternative extensions cannot match.",
  },
  {
    question: "Is MelosClaw only about Web3?",
    answer:
      "No. Web3 is one important context for Melos Claw because it adds identity, ownership, settlement, and programmable coordination. The broader concept behind MelosClaw is autonomous agent intelligence for digital work networks.",
  },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MelosClaw",
    url: "https://melosclaw.com",
    description:
      "MelosClaw is a strategic .com identity for autonomous AI agents, Web3 work networks, and skill-native infrastructure.",
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "MelosClaw",
      url: "https://melosclaw.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero-section" aria-labelledby="hero-title">
        <div className="brand-line" aria-label="MelosClaw.com">
          <span className="brand-mark">MC</span>
          <span>MelosClaw.com</span>
        </div>

        <div className="hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              Strategic AI Agent Domain Identity
            </p>
            <h1 id="hero-title">
              <span className="hero-name">MelosClaw</span>
              <span className="gradient-text">for the agentic web.</span>
            </h1>
            <p className="hero-lede">
              A strategic .com identity for autonomous agents, reusable skill networks,
              and Web3 work infrastructure. Melos Claw positions a serious builder at
              the center of the Web3 AI-native economy.
            </p>
            <div className="hero-signals" aria-label="MelosClaw strategic signals">
              <span>Autonomous agents</span>
              <span>Skill networks</span>
              <span>Web3 work</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="MelosClaw strategic positioning map">
            <Image
              src="/domain-intelligence-map.png"
              alt="MelosClaw.com strategic map connecting AI agents, Web3 trust, work networks, and protocol systems"
              width={1120}
              height={840}
              priority
              sizes="(min-width: 980px) 46vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="identity-strip" aria-label="MelosClaw identity signals">
        {identitySignals.map((signal) => {
          const Icon = signal.icon;
          return (
            <article key={signal.label}>
              <Icon size={24} aria-hidden="true" />
              <h2>{signal.label}</h2>
              <p>{signal.text}</p>
            </article>
          );
        })}
      </section>

      <section className="section thesis-section" aria-labelledby="thesis-title">
        <div className="section-intro">
          <p className="section-kicker">Domain Thesis</p>
          <h2 id="thesis-title">
            <span className="gradient-text">MelosClaw</span> explains the category before the market names it.
          </h2>
          <p>
            Melos Claw is positioned as an identity layer for autonomous agent
            intelligence: memorable, category-aware, and broad enough to anchor
            a product, protocol, ecosystem, or research-backed platform. A strong
            domain thesis means the name does strategic work before a single line
            of code is written.
          </p>
        </div>
        <div className="thesis-grid">
          {thesisPoints.map((point) => {
            const Icon = point.icon;
            return (
              <article className="thesis-card" key={point.title}>
                <Icon size={24} aria-hidden="true" />
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section market-section" aria-labelledby="market-title">
        <div className="section-intro">
          <p className="section-kicker">Market Fit</p>
          <h2 id="market-title">
            <span className="gradient-text">MelosClaw</span> is built for the overlap of AI agents, reusable skills, and Web3 coordination.
          </h2>
        </div>
        <div className="market-grid">
          {marketFit.map((item) => {
            const Icon = item.icon;
            return (
              <article className="market-card" key={item.title}>
                <div className="icon-box">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section positioning-section" aria-labelledby="positioning-title">
        <div className="positioning-copy">
          <p className="section-kicker">Positioning</p>
          <h2 id="positioning-title">
            <span className="gradient-text">MelosClaw</span> gives the category a name with rhythm, precision, and infrastructure depth.
          </h2>
          <p>
            Melos Claw blends orchestration with execution. Melos suggests composed
            intelligence and coordinated systems: structured, purposeful, multi-step.
            Claw adds precision, agency, and decisive action. Together, MelosClaw
            lands as a name that feels earned rather than invented.
          </p>
        </div>
        <div className="positioning-panel">
          {positioning.map((item, index) => (
            <div className="positioning-row" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section architecture-section" aria-labelledby="architecture-title">
        <p className="section-kicker">Brand Architecture</p>
        <h2 id="architecture-title">
          One <span className="gradient-text">MelosClaw</span> identity. Four durable signals.
        </h2>
        <div className="architecture-grid">
          <article>
            <Globe2 size={24} aria-hidden="true" />
            <h3>.com authority</h3>
            <p>MelosClaw holds the globally legible trust layer for a serious AI and Web3 category name.</p>
          </article>
          <article>
            <CircuitBoard size={24} aria-hidden="true" />
            <h3>Infrastructure feel</h3>
            <p>Melos Claw reads technical enough for protocols and platforms without becoming cold, opaque, or too narrow to scale.</p>
          </article>
          <article>
            <Route size={24} aria-hidden="true" />
            <h3>Workflow narrative</h3>
            <p>MelosClaw has clear fit for agent systems that plan, route, validate, and execute across distributed digital work environments.</p>
          </article>
          <article>
            <Compass size={24} aria-hidden="true" />
            <h3>Expansion room</h3>
            <p>Melos Claw is flexible across product, protocol, studio, skill registry, intelligence network, and developer tooling narratives.</p>
          </article>
        </div>
      </section>

      <section className="section faq-section" aria-labelledby="faq-title">
        <div className="faq-heading">
          <p className="section-kicker">MelosClaw FAQ</p>
          <h2 id="faq-title">
            Questions about <span className="gradient-text">MelosClaw</span>: the identity, concept, and positioning.
          </h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                <span>{faq.question}</span>
                <Radar size={18} aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="footer-section" aria-labelledby="footer-title">
        <div className="footer-brand">
          <h2 id="footer-title">MelosClaw</h2>
          <p>AI-native identity for the emerging autonomous economy.</p>
        </div>
        <div className="footer-contact">
          <a className="footer-button" href="mailto:MelosClaw@gasgpt.com">
            <Mail size={18} aria-hidden="true" />
            Reach Out
          </a>
        </div>
        <p className="footer-copyright">© 2026 MelosClaw</p>
      </footer>
    </main>
  );
}
