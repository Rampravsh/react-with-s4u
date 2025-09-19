import React from "react";

const Button = (props) => {
  return (
    <div>
      <button style={{ marginBottom: "10px" }} onClick={props.onClick}>
        {props.name}
      </button>
    </div>
  );
};

export default Button;
