"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Globe,
  CalendarCheck,
  ShieldCheck,
  ArrowRightLeft,
  BarChart3,
  Zap,
  Settings,
  Rocket,
} from "lucide-react";

import { Navbar1 } from "@/components/ui/navbar-1";
import { PricingSection } from "@/components/ui/pricing";
import { TestimonialsColumn, type Testimonial } from "@/components/ui/testimonials-columns-1";
import { Globe as CobeGlobe } from "@/components/ui/cobe-globe";
import { FaqsSection } from "@/components/ui/faqs-1";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";
import { FlowHoverButton } from "@/components/ui/flow-hover-button";
import Image from "next/image";

// ─── HERO ───────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Spotlight effect */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="flex-1 flex flex-col lg:flex-row items-center max-w-6xl mx-auto px-4 pt-28 pb-12 w-full">
        {/* Left: Text content */}
        <div className="flex-1 relative z-10 flex flex-col justify-center lg:pr-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-400 mb-8">
              <Phone className="h-4 w-4" />
              AI Voice Agent for Hotels
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Never miss a
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              reservation call
            </span>
            <br />
            again
          </motion.h1>

          <motion.p
            className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            AI that answers your hotel phone 24/7 in any language. Takes real
            bookings. Transfers to staff when needed. Pays for itself in days.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ButtonWithIcon href="#pricing">Get Started</ButtonWithIcon>
            <FlowHoverButton
              href="tel:+15075411684"
              icon={<Phone className="h-4 w-4" />}
              hoverText="+1 (507) 541-1684"
            >
              Call Our AI Demo
            </FlowHoverButton>
          </motion.div>

          <motion.p
            className="mt-4 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            No setup fee &middot; Cancel anytime
          </motion.p>
        </div>

        {/* Right: 3D Robot */}
        <motion.div
          className="flex-1 relative h-[400px] lg:h-[550px] w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>

      {/* Metrics bar */}
      <motion.div
        className="max-w-6xl mx-auto w-full px-4 pb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border border-border rounded-2xl p-8 bg-card/50 backdrop-blur-sm">
          {[
            { value: "<1s", label: "Answer time" },
            { value: "87%", label: "Calls automated" },
            { value: "130+", label: "Languages" },
            { value: "24/7", label: "Availability" },
          ].map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground">
                {metric.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ─── FEATURES ───────────────────────────────────────────
const features = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Answer Every Call",
    description:
      "AI picks up in under 1 second. No hold music, no voicemail, no missed revenue.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Any Language",
    description:
      "Auto-detects caller language. English, Spanish, French, Russian, and more.",
  },
  {
    icon: <CalendarCheck className="h-6 w-6" />,
    title: "Real Bookings",
    description:
      "Creates actual reservations in your PMS. Not just a FAQ bot.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Never Invents Data",
    description:
      "Every rate, availability, and booking is verified through your hotel system.",
  },
  {
    icon: <ArrowRightLeft className="h-6 w-6" />,
    title: "Smart Handoff",
    description:
      "Transfers to staff with full context when needed. No blind transfers.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Full Analytics",
    description:
      "Every call recorded, transcribed, and analyzed. See what guests ask for.",
  },
];

function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm font-medium text-muted-foreground mb-4">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Everything you need to automate calls
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Purpose-built for hotel reservations. Not a generic chatbot.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="bg-card rounded-2xl border border-border p-8 hover:border-indigo-500/30 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ───────────────────────────────────────
const steps = [
  {
    icon: <Settings className="h-6 w-6" />,
    step: "01",
    title: "Connect",
    description:
      "Link your Twilio phone number and PMS (Cloudbeds, Mews, Opera).",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    step: "02",
    title: "Configure",
    description:
      "Set your hotel policies, greeting, room types, and handoff rules.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    step: "03",
    title: "Go Live",
    description:
      "AI starts answering calls immediately. Monitor everything from the dashboard.",
  },
];

function HowItWorksSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm font-medium text-muted-foreground mb-4">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Live in 30 minutes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="relative text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 mb-5">
                {step.icon}
              </div>
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">
                Step {step.step}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PRICING DATA ───────────────────────────────────────
const pricingPlans = [
  {
    name: "Starter",
    price: "299",
    yearlyPrice: "239",
    period: "month",
    features: [
      "1 hotel",
      "500 minutes/mo",
      "Then $0.20/min",
      "Mock PMS",
      "Email support",
    ],
    description: "500 minutes included. Perfect to get started.",
    buttonText: "Get Started",
    href: "#",
  },
  {
    name: "Growth",
    price: "499",
    yearlyPrice: "399",
    period: "month",
    features: [
      "Up to 5 hotels",
      "1,500 minutes/mo",
      "Then $0.15/min",
      "Cloudbeds integration",
      "Priority support",
      "Custom greeting",
    ],
    description: "1,500 minutes included. For growing hotel groups.",
    buttonText: "Get Started",
    href: "#",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "999",
    yearlyPrice: "799",
    period: "month",
    features: [
      "Unlimited hotels",
      "5,000 minutes/mo",
      "Then $0.10/min",
      "Any PMS integration",
      "Dedicated account manager",
      "Custom AI training",
      "SLA guarantee",
    ],
    description: "5,000 minutes included. Full customization.",
    buttonText: "Contact Sales",
    href: "#",
  },
];

// ─── TESTIMONIALS ───────────────────────────────────────
const testimonials: Testimonial[] = [
  {
    text: "We went from missing 40% of calls to answering 100%. Our reservation revenue increased by $12K in the first month.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Maria Garcia",
    role: "Sunset Beach Resort",
  },
  {
    text: "The AI handles Spanish and English callers flawlessly. Our bilingual guests love it.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "James Chen",
    role: "The Grand Pacific",
  },
  {
    text: "Setup took 30 minutes. The AI was taking real reservations the same day.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Sophie Martin",
    role: "Hotel Belleville",
  },
  {
    text: "Our front desk staff can finally focus on in-person guests instead of being tied to the phone.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Ahmed Hassan",
    role: "Desert Palm Hotel",
  },
  {
    text: "The handoff to human agents is seamless. Callers don't even notice the transition.",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    name: "Lisa Park",
    role: "Oceanview Suites",
  },
  {
    text: "ROI was immediate. The AI pays for itself with just 2 bookings per month.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    name: "Roberto Silva",
    role: "Casa Colonial",
  },
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="max-w-6xl z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm font-medium text-muted-foreground mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            What our customers say
          </h2>
          <p className="text-center mt-4 text-muted-foreground text-lg">
            Hotels around the world trust Konomic Voice Agent.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}

// ─── INTEGRATIONS (WORLD MAP) ───────────────────────────
function IntegrationsSection() {
  const pmsLogos = [
    {
      name: "Cloudbeds",
      logo: "https://www.cloudbeds.com/wp-content/uploads/2025/08/logo-horizontal-white.svg",
      invert: false,
    },
    {
      name: "Mews",
      logo: "https://logotyp.us/file/mews.svg",
      invert: true,
      large: true,
    },
    {
      name: "Oracle Opera",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
      invert: false,
    },
    {
      name: "Little Hotelier",
      logo: "https://www.littlehotelier.com/wp-content/themes/littlehotelier/dist/images/lh_h_black_8cd6c5b3.svg",
      invert: true,
    },
    {
      name: "Guesty",
      logo: "https://cms-cdn.guesty.com/wp-content/uploads/2025/10/guesty-logo-new.svg",
      invert: true,
    },
    {
      name: "Hostaway",
      logo: "",
      invert: false,
    },
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm font-medium text-muted-foreground mb-4">
            Integrations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Works with your PMS
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Connect to any major property management system.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-12">
          {pmsLogos.map((item, i) => (
            <motion.div
              key={item.name}
              className="flex flex-col items-center justify-center gap-3 py-6 px-4 bg-card rounded-2xl border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={item.name}
                  className={`${item.large ? "h-10" : "h-6"} w-auto max-w-[100px] object-contain ${item.invert ? "brightness-0 invert" : ""}`}
                />
              ) : (
                <span className="text-sm font-semibold text-foreground">
                  {item.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="max-w-lg mx-auto">
          <CobeGlobe
            markers={[
              { id: "nyc", location: [40.7128, -74.006], label: "New York" },
              { id: "london", location: [51.5074, -0.1278], label: "London" },
              { id: "dubai", location: [25.2048, 55.2708], label: "Dubai" },
              { id: "tokyo", location: [35.6762, 139.6503], label: "Tokyo" },
              { id: "sydney", location: [-33.8688, 151.2093], label: "Sydney" },
              { id: "paris", location: [48.8566, 2.3522], label: "Paris" },
              { id: "saopaulo", location: [-23.5505, -46.6333], label: "São Paulo" },
            ]}
            arcs={[
              { id: "nyc-london", from: [40.7128, -74.006], to: [51.5074, -0.1278] },
              { id: "london-dubai", from: [51.5074, -0.1278], to: [25.2048, 55.2708] },
              { id: "dubai-tokyo", from: [25.2048, 55.2708], to: [35.6762, 139.6503] },
              { id: "nyc-saopaulo", from: [40.7128, -74.006], to: [-23.5505, -46.6333] },
              { id: "paris-sydney", from: [48.8566, 2.3522], to: [-33.8688, 151.2093] },
            ]}
            dark={1}
            mapBrightness={2}
            baseColor={[0.15, 0.15, 0.2]}
            markerColor={[0.5, 0.55, 0.98]}
            arcColor={[0.5, 0.55, 0.98]}
            glowColor={[0.1, 0.1, 0.15]}
          />
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ────────────────────────────────────────────────
const faqQuestions = [
  {
    id: "item-1",
    title: "How quickly can I get started?",
    content:
      "Most hotels are live within 30 minutes. Connect your Twilio number, configure your settings, and the AI starts answering calls immediately.",
  },
  {
    id: "item-2",
    title: "What languages does the AI support?",
    content:
      "The AI auto-detects the caller's language and responds fluently in over 130 languages, including English, Spanish, French, German, Russian, Arabic, Chinese, Japanese, and many more.",
  },
  {
    id: "item-3",
    title: "Does it create real bookings or just take messages?",
    content:
      "Real bookings. The AI connects to your PMS and creates actual reservations with verified availability and rates. It's not a voicemail or FAQ bot.",
  },
  {
    id: "item-4",
    title: "What happens when the AI can't handle a request?",
    content:
      "Smart handoff. The AI transfers the call to your staff with full context — the caller's name, what they asked for, and any preferences mentioned. No blind transfers.",
  },
  {
    id: "item-5",
    title: "Which PMS systems do you integrate with?",
    content:
      "We integrate with Cloudbeds, Mews, Opera PMS, Little Hotelier, Guesty, and Hostaway. Enterprise plans support custom integrations with any PMS.",
  },
  {
    id: "item-6",
    title: "How does billing work?",
    content:
      "You choose a plan with included minutes. If you go over, extra minutes are billed at the per-minute rate for your plan. No setup fee, no commitment. Cancel anytime.",
  },
  {
    id: "item-7",
    title: "Can the AI invent rates or availability?",
    content:
      "Never. Every rate, room availability, and booking detail is verified through your PMS in real-time. The AI only shares confirmed information.",
  },
];

// ─── FINAL CTA ──────────────────────────────────────────
function FinalCTASection() {
  return (
    <section className="py-24 px-4 border-y border-border">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to never miss a call?
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          No setup fee, no commitment. Get started in minutes.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ButtonWithIcon href="#pricing">Get Started</ButtonWithIcon>
          <FlowHoverButton
            href="tel:+15075411684"
            icon={<Phone className="h-4 w-4" />}
            hoverText="+1 (507) 541-1684"
          >
            Call Our AI Demo
          </FlowHoverButton>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FOOTER ─────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <Image src="/logo-icon.svg" alt="Konomic" width={32} height={32} className="h-8 w-auto" />
              <span className="font-bold text-foreground text-lg">Konomic Voice AI</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              AI voice agent for hotel reservations
            </p>
          </div>
        </div>
        <nav className="flex items-center gap-8">
          {[
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "Testimonials", href: "#testimonials" },
            { label: "Dashboard", href: "#" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-sm text-muted-foreground">
          &copy; 2026 Konomic Digital SL. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── PAGE ───────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <DottedSurface />
      <main className="flex-1 relative">
        <Navbar1
          items={[
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#pricing" },
            { label: "Testimonials", href: "#testimonials" },
          ]}
          ctaText="Get Started"
          ctaHref="#pricing"
        />

        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />

        <div id="pricing">
          <PricingSection
            plans={pricingPlans}
            title="Simple, Transparent Pricing"
            description="No setup fee. No commitment. Cancel anytime."
          />
        </div>

        <TestimonialsSection />
        <IntegrationsSection />

        <FaqsSection
          title="Frequently Asked Questions"
          description="Everything you need to know about Konomic Voice Agent."
          questions={faqQuestions}
          contactText="support team"
          contactHref="mailto:support@konomic.com"
        />

        <FinalCTASection />
        <Footer />
      </main>
    </>
  );
}
