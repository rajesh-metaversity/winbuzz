import React from "react";
import { useQtechAuthQuery } from "../../Services/Qtech/Qtech";
import Casino from "./Casino";

const CasinoContainer = () => {
  const { isSuccess } = useQtechAuthQuery();
  return <div>{isSuccess && <Casino />}</div>;
};

export default CasinoContainer;
