import React from "react";
import Marquee from "react-fast-marquee";
import { useMessageQuery } from "../../Services/Message/Message";
import './HeaderMessage.scss'

const HeaderMessage = () => {
  const { data } = useMessageQuery();
  return (
    <>
      <div className="marq_mes">
        <Marquee speed={100} className="msg"><i>{data?.message}</i></Marquee>
      </div>
    </>
  );
};

export default HeaderMessage;
