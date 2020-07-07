import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <h1 className="heroH1">Welcome to Crypto Tracker!</h1>
        <h4 className="heroH4">We track all Crypto Currency in realtime.</h4>
        <Link to="/charts">
          {" "}
          <button className="heroBtn">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
