import React from "react";
import FeatureCard from "./FeatureCard.jsx";

export default function Features() {
  const data = [
    {
      title: "Simulation Environments",
      desc: "Scenario-driven environments designed to improve reasoning.",
    },
    {
      title: "Human Data Engine",
      desc: "Expert-curated datasets for high-quality training loops.",
    },
    {
      title: "Evaluation Stack",
      desc: "Robust pipelines for intelligence metrics.",
    },
  ];
  return (
    <section className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-6 px-8 pb-24 max-w-6xl mx-auto">
      {data.map((item, i) => (
        <FeatureCard key={i} {...item} />
      ))}
    </section>
  );
}
