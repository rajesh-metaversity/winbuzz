import React from "react";
////styles
import "./styles.scss";
const List = ({name,bot,value}) => {
  return (
    <div className="user-drop-down-amount">
      <div className="user-drop-down-amount-left-col">
        {name}
        <br />
        <small>{bot}</small>
      </div>
      <div className="user-drop-down-amount-right-col">{value}</div>
    </div>
  );
};

export default List;
