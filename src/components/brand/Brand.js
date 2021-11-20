import React from "react";
import "./Brand.css";
// import {
//     google, slack, shopify , dropbox, atlassian ,
// } from './imports'

const Brand = () => {
  return(
      <div className="gpt3__brand section__padding">
          <div>
            <img src="../../assets/google.png" alt="google" />
            <img src="../../assets/slack.png" alt="slack" />
            <img src="../../assets/shopify.png" alt="shopify" />
            <img src="../../assets/dropbox.png" alt="dropbox" />
            <img src="../../assets/atlassian.png" alt="atlassian" />
          </div>
      </div>
  )
};

export default Brand;
