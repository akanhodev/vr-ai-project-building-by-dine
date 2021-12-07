import React from "react";
import "./Possibility.css";
import Fade from 'react-reveal/Fade';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src="/possibility.png" alt="possible" />
      </div>
      <Fade bottom>
        <div className="gpt3__possibility-content">
          <h4>Request Early Access to Get Started</h4>
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <p>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <h4>Request Early Access to Get Started</h4>
        </div>
      </Fade>
    </div>
  );
};

export default Possibility;
