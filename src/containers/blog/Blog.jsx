import React, { useState } from "react";
import "./Blog.css";
import Article from "../../components/articles/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
function Blog() {

  // const largeData = useState(true) ;
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
        <Article image={blog01} date="Nov 26, 2021" description="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article image={blog02} date="Nov 26, 2021" description="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article image={blog03} date="Nov 26, 2021" description="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article image={blog04} date="Nov 26, 2021" description="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article image={blog05} date="Nov 26, 2021" description="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  );
}

export default Blog;
