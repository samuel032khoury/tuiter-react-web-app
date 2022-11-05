import React from "react";
import "./index.css";
import TuitsList from "../tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  return (
    <>
      <h1> HOME</h1>
     <WhatsHappening/>
      <TuitsList/>
    </>
  );
};
export default HomeComponent;