import React, { useState } from "react";
import { useEffect } from "react";

const CasinoList = ({
  list,
  setGameCode,
  type,
  setProviderFilter,
  setFantasyGame,
  id,
}) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (type != 2) {
      // setGameCode("");
    }
    setActive(0);
  }, [id]);

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
                        setGameCode(item?.filterType);
                        setActive(index);
                        // setProviderFilter("item?.filter");
                        setFantasyGame(item.filterType);
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
                        // setGameCode(item);
                        setProviderFilter(item);
                        // setFantasyGame(item);
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
