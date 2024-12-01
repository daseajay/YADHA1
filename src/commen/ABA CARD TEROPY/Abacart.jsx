import React from "react";
import "./Abacart.css";
const Abacart = () => {
  const sections = [
    {
      title: "Science-Based Approach",
      description:
        "ABA therapy is rooted in the principles of learning and behavior.",
      icon: "🔬",
    },
    {
      title: "Behavior Understanding",
      description:
        "It helps us comprehend how behavior works in various contexts.",
      icon: "🧠",
    },
    {
      title: "Environmental Impact",
      description: "ABA examines how the environment influences behavior.",
      icon: "🌿",
    },
    {
      title: "Learning Mechanisms",
      description: "It explores how learning processes affect behavior.",
      icon: "📘",
    },
    {
      title: "Real-World Application",
      description: "ABA uses these insights to address real-life challenges.",
      icon: "🌍",
    },
    {
      title: "Positive Behavior Reinforcement",
      description:
        "The therapy aims to increase helpful and constructive behaviors.",
      icon: "⭐",
    },
    {
      title: "Skill Development",
      description:
        "It aims in teaching new skills and improving daily functioning.",
      icon: "🛠️",
    },
    {
      title: "Extra Section",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque felis vitae.",
      icon: "ℹ️",
    },
  ];
  return (
    <div>
      <div className="info-grid">
        {sections.map((section, index) => (
          <div key={index} className="info-card">
            <div className="icon">{section.icon}</div>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Abacart;
