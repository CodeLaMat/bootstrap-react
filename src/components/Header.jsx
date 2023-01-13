import React from "react";
import BootNav from "./Nav";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <BootNav />
    </div>
  );
};

export default Header;
