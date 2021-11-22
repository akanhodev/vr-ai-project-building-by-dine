import React from "react";
import "./Features.css";

function Features({ title, text , alignment }) {
  return (
    <div className={alignment ? "gpt3__features-container__feature" : "gpt3__features-container__featur" }>
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">
        <p> {text}</p>
      </div>
    </div>
  );
}

export default Features;
