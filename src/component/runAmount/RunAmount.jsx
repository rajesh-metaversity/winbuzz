import React, { useEffect } from "react";
import "./styles.scss";
import { useUserFancyBookQuery } from "../../Services/userFancyBook/UserFancyBook";
import Loader from "../Loader/Loader";

const RunAmount = ({ data }) => {
  const { data: pnl, isLoading } = useUserFancyBookQuery(data);

  // useEffect(() => {
  //   trigger(data);
  // }, []);

  return (
    <div className="run-amount">
      <h2>Run Amount</h2>
      <div className="heading-pnl" style={{ display: "flex" }}>
        <h4
          style={{
            width: "200px",
            margin: "2px",
            paddingLeft: "5px",
            color: "rgb(136 154 168)",
            fontWeight: "500",
          }}
        >
          Run
        </h4>
        <h4
          style={{
            margin: "2px",

            color: "rgb(136 154 168)",
            fontWeight: "500",
          }}
        >
          Amount
        </h4>
      </div>
      {isLoading ? (
        <Loader />
      ) : pnl?.data?.length ? (
        pnl?.data?.map((res, index) => {
          return (
            <React.Fragment key={res?.pnl + index + 1}>
              <div
                className="pnl"
                style={{
                  display: "flex",
                  border: "1px solid rgb(128 128 128 / 14%)",
                }}
              >
                <p
                  style={{
                    width: "200px",
                    margin: "2px",
                    paddingLeft: "5px",
                    color: "rgb(136 154 168)",
                    fontWeight: "500",
                  }}
                >
                  {res?.odds}
                </p>
                <p
                  style={{
                    margin: "2px",
                    color: res?.pnl >= 0 ? "Green" : "red",
                    fontWeight: "500",
                  }}
                >
                  {res?.pnl}
                </p>
              </div>
            </React.Fragment>
          );
        })
      ) : (
        <p style={{ width: "100%", textAlign: "center" }}>No data</p>
      )}
    </div>
  );
};

export default RunAmount;
