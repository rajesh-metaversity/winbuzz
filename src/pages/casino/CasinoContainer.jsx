import React from "react";
import { useQtechAuthQuery } from "../../Services/Qtech/Qtech";
import Casino from "./Casino";

const CasinoContainer = () => {
  const { isSuccess } = useQtechAuthQuery();
  console.log("click")
  return <div>{isSuccess && <Casino />}</div>;
};

export default CasinoContainer;
