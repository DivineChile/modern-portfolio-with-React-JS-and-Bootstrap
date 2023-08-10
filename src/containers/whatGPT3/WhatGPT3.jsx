import React from "react";
import "./whatGPT3.css";
import { Feature } from "../../components";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eveniet, sunt accusantium eligendi porro molestiae, excepturi dolor labore quam fugiat quidem! Totam in magni voluptate deserunt nisi odit ducimus temporibus."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat suscipit, saepe aliquam quae unde tempore delectus."
        />
        <Feature
          title="Knowledgebase"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus aliquid repudiandae eligendi consectetur. Rem eum pariatur deleniti sequi, accusantium placeat?"
        />
        <Feature
          title="Education"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam fugiat maiores deleniti quo est sunt ad ea repudiandae! Ipsa, minima."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
