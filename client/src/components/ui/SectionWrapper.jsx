import React from "react";

export default function SectionWrapper({ children, className = "" }) {
  return (
    <section className={`max-w-7xl mx-auto px-4 py-16 ${className}`}>
      {children}
    </section>
  );
}
