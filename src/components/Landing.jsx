import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Features from "../components/Features.jsx";
import Footer from "../components/Footer.jsx";
import heroImg from "../assets/hero.png";
import img1 from "../assets/01.png";
import img2 from "../assets/02.png";
import img3 from "../assets/03.png";
import img4 from "../assets/04.png";

// Section component for consistent styling
const Section = ({ id, title, children, backgroundImage }) => (
  <section
    id={id}
    className="relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden scroll-mt-20"
  >
    {/* Background image */}
    {backgroundImage && (
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
    )}

    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

    {/* Content */}
    <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">{title}</h2>
      <div className="text-gray-300 space-y-6">
        {children}
      </div>
    </div>
  </section>
);

export default function Landing() {
  return (
    <div className="w-full bg-black text-white relative overflow-x-hidden">
      {/* Hero section */}
      <div className="min-h-screen w-full relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${heroImg})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        <Navbar />
        {/* Top center brand label */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 text-sm text-gray-300">
          Archietech
        </div>

        <Hero />
      </div>

      {/* Section 1: Intelligent Site Discovery & Strategic Acquisition */}
      <Section
        id="section-1"
        title="Intelligent Site Discovery & Strategic Acquisition"
        backgroundImage={img1}
      >
        <p className="text-lg font-semibold mb-6">Find the right sites before the market does.</p>
        
        <p>Archie continuously scans real-world signals to uncover development opportunities early — long before they appear on traditional channels.</p>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">What Archie Achieves</h3>
          <ul className="space-y-3 list-disc list-inside">
            <li>Monitors rezoning proposals, planning authority changes, and government policies</li>
            <li>Tracks infrastructure signals such as new train lines, roads, hospitals, and utilities</li>
            <li>Analyses location patterns, density potential, and historical outcomes</li>
            <li>Matches opportunities to your development strategy, margins, and risk appetite</li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
          <h3 className="text-lg font-semibold mb-3">Outcome</h3>
          <p>You move from reactive site buying to proactive, data-led acquisition, gaining a decisive timing advantage in competitive markets.</p>
        </div>
      </Section>

      {/* Section 2: Automated Feasibility & Investment Intelligence */}
      <Section
        id="section-2"
        title="Automated Feasibility & Investment Intelligence"
        backgroundImage={img2}
      >
        <p className="text-lg font-semibold mb-6">Turn opportunities into confident investment decisions.</p>
        
        <p>Once a site is identified, Archie transforms raw data into clear financial and risk insights — in minutes, not weeks.</p>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">What Archie Achieves</h3>
          <ul className="space-y-3 list-disc list-inside">
            <li>Automated feasibility and development models</li>
            <li>Cost, revenue, and margin projections</li>
            <li>Risk and sensitivity analysis across multiple scenarios</li>
            <li>Comparisons with historical projects and outcomes</li>
            <li>Investment-ready reports for partners, lenders, and committees</li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
          <h3 className="text-lg font-semibold mb-3">Outcome</h3>
          <p>Faster decisions, fewer spreadsheet errors, and confidence that projects stack up before capital is committed.</p>
        </div>
      </Section>

      {/* Section 3: Connected Execution & Delivery Intelligence */}
      <Section
        id="section-3"
        title="Connected Execution & Delivery Intelligence"
        backgroundImage={img3}
      >
        <p className="text-lg font-semibold mb-6">Where strategy becomes reality — fully connected and fully controlled.</p>
        
        <p className="italic">This is where ArchieTech is already live and delivering value today.</p>
        <p className="mt-4">All execution systems operate as one intelligent platform, not disconnected tools.</p>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">What Archie Achieves</h3>
          <ul className="space-y-3 list-disc list-inside">
            <li>Detailed costing, estimating, and budget control</li>
            <li>BOQs, contracts, scopes of work, and procurement workflows</li>
            <li>Head contract and subcontract management</li>
            <li>Construction planning, scheduling, and progress tracking</li>
            <li>Real-time visibility into cost movements, variations, and risks</li>
            <li>Centralised data across commercial, project, and delivery teams</li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
          <h3 className="text-lg font-semibold mb-3">Outcome</h3>
          <p>Projects are delivered with clarity, accountability, and margin control, reducing leakage, delays, and surprises.</p>
        </div>
      </Section>

      {/* Section 4: Completion, Performance & Continuous Learning */}
      <Section
        id="section-4"
        title="Completion, Performance & Continuous Learning"
        backgroundImage={img4}
      >
        <p className="text-lg font-semibold mb-6">Projects don't end at handover — intelligence shouldn't either.</p>
        
        <p>Archie stays active after completion, ensuring accountability, learning, and long-term value.</p>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">What Archie Achieves</h3>
          <ul className="space-y-3 list-disc list-inside">
            <li>Structured handover and close-out management</li>
            <li>Defects tracking and defects liability period (DLP) oversight</li>
            <li>HR and team performance analytics</li>
            <li>Identification of delivery bottlenecks and best practices</li>
            <li>Feedback loops that improve future projects automatically</li>
          </ul>
        </div>

        <div className="mt-8 p-6 bg-gray-900/50 rounded-lg border border-gray-800">
          <h3 className="text-lg font-semibold mb-3">Outcome</h3>
          <p>Every completed project becomes data for the next one, creating a continuously improving development engine.</p>
        </div>
      </Section>

      {/* The Bigger Vision Section */}
      <Section
        id="vision"
        title="The Bigger Vision"
        backgroundImage={img3}
      >
        <p className="text-lg mb-6">ArchieTech is not just software. It is the operating system for next-generation property development — connecting decisions, delivery, and learning into a single intelligent lifecycle.</p>
        
        <p className="mb-6">From site discovery to close-out, Archie helps teams:</p>
        
        <ul className="space-y-3 text-lg">
          <li>✓ Decide earlier</li>
          <li>✓ Deliver smarter</li>
          <li>✓ Protect margins</li>
          <li>✓ And continuously improve performance</li>
        </ul>
      </Section>

      {/* Features and Footer */}
      <div className="mt-20">
        <Features />
        <Footer />
      </div>
    </div>
  );
}