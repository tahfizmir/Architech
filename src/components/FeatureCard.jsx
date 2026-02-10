import React from "react";


export default function FeatureCard({ title, desc }) {
return (
<div className="rounded-2xl border border-gray-800 bg-gray-900/70 backdrop-blur p-6 hover:border-gray-600 transition shadow-xl">
<div className="text-lg font-medium mb-3">{title}</div>
<p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
<button className="mt-6 text-sm text-white hover:underline">
Learn more →
</button>
</div>
);
}