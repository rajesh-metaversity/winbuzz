import React from "react";
import empty from "../../assets/img/empty.png";
const Empty = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "calc(100% - 60px)",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <img src={empty} alt="" />
    </div>
  );
};

export default Empty;
