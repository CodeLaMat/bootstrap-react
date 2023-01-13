import React from "react";
import BootCard from "./BootCards";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes.main}>
      <BootCard />
      <div></div>
    </div>
  );
};

export default Main;
