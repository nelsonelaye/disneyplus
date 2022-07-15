import React from "react";
import DotLoader from "react-spinners/DotLoader";
const Loader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#dcdcdc",
      }}
    >
      <DotLoader size="15px" color="white" />
    </div>
  );
};

export default Loader;
