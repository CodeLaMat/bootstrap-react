import React from "react";
import BootCard from "./BootCards";
import FormComponent from "./Form";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes.main}>
      <BootCard />
      <FormComponent />
    </div>
  );
};

export default Main;
