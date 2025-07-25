import React from "react";

export default function Title({ text, className = "" }) {
  return (
    <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${className}`}>
      {text}
    </h2>
  );
}
