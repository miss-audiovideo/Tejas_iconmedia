import React from "react";

const Brand = (props) => {
  return (
    <>
      <span style={{ width: "30%" }} className={props.class}>
        <img src={props.src} alt="" />
      </span>
    </>
  );
};

export default Brand;
