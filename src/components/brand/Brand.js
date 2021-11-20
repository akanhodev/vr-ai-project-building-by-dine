import React from "react";
import "./Brand.css";
// import {
//     google, slack, shopify , dropbox, atlassian ,
// } from './imports'

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src="../../assets/google.png" alt="google" />
      </div>
      <div>
        <img src="../../assets/slack.png" alt="slack" />
      </div>
      <div>
        <img src="../../assets/shopify.png" alt="shopify" />
      </div>
      <div>
        <img src="../../assets/dropbox.png" alt="dropbox" />
      </div>
      <div>
        <img src="../../assets/atlassian.png" alt="atlassian" />
      </div>
    </div>
  );
};

export default Brand;
