import React from "react";
import web from "../src/images/hero-img.png";
import Commom from "./Commom";

const About = () => {
  return (
    <>
      <Commom
        name="स्वागतम !!"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
