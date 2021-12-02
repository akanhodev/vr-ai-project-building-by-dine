import React from "react";
import "./Article.css";

const Article = ({ image, date, description}) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={image} alt="" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{description}</h3>
        </div>
        <p>Read Full Articles</p>
      </div>
    </div>
  );
};

export default Article;
