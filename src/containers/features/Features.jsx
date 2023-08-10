import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolore accusamus minima rem nam voluptates eos, et dignissimos modi fugit at sint voluptatum, nihil vero. Praesentium, officia. Sapiente.",
  },
  {
    title: "Become the trended active",
    text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolore accusamus minima rem nam voluptates eos, et dignissimos modi fugit at sint voluptatum, nihil vero. Praesentium, officia. Sapiente.",
  },
  {
    title: "Message or am nothing",
    text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolore accusamus minima rem nam voluptates eos, et dignissimos modi fugit at sint voluptatum, nihil vero. Praesentium, officia. Sapiente.",
  },
  {
    title: "Really booy law county",
    text: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolore accusamus minima rem nam voluptates eos, et dignissimos modi fugit at sint voluptatum, nihil vero. Praesentium, officia. Sapiente.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__margin" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
