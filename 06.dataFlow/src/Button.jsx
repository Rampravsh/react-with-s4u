import React from "react";

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>
        {props.label}
        {props.children}
      </button>
    </div>
  );
};

export default Button;
