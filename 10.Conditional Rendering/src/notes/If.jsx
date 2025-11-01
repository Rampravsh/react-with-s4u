import React from "react";

const If = () => {
  const isLogin = true;
  if (isLogin) {
    return (
      <>
        <div>hello world</div>
      </>
    );
  }
  return <h1>plese loggedin</h1>;
};

export default If;
