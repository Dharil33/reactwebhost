import React from "react";
import web from "../src/images/img2.svg";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <Commom
        name="Grow Your Business With"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
