import React, { useEffect, useState } from "react";
import { useQtechMutation } from "../../Services/Qtech/Qtech";

const CasinoList = ({ list, setGameCode, type, setProviderFilter }) => {
  console.log(list, "list");
  const [active, setActive] = useState(0);

  return (
    <>
      <div className="int_casoini_list_all">
        <ul>
          {type == 1
            ? list?.map((item, index) => {
                return (
                  <React.Fragment key={item.gameCode}>
                    <li
                      className={index === active && "active"}
                      onClick={() => {
                        setGameCode(item?.gameCode);
                        setActive(index);
                      }}
                    >
                      {item.name}
                    </li>
                  </React.Fragment>
                );
              })
            : list?.map((item, index) => {
                return (
                  <React.Fragment key={item}>
                    <li
                      className={index === active && "active"}
                      onClick={() => {
                        setProviderFilter(item);
                        setActive(index);
                      }}
                    >
                      {item}
                    </li>
                  </React.Fragment>
                );
              })}
        </ul>
      </div>
    </>
  );
};

export default CasinoList;
