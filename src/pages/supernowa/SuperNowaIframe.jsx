import React, { useEffect } from "react";
import { useSupernowaAuthenticationMutation } from "../../Services/supernowa/SupernowaCasino";
import { useParams } from "react-router-dom";

const SuperNowaIframe = () => {
  const [authenticationTrigger, { data: authenticationdata }] =
    useSupernowaAuthenticationMutation();
  const { gameCode, gameId } = useParams();
  useEffect(() => {
    authenticationTrigger({
      game: {
        gameCode,
        gameId,
      },
      timestamp: Date.now(),
      user: {
        backUrl: window.location.hostname,
        currency: "INR",
      },
    });
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      {/* <CloseIcon
        sx={{
          padding: "10px 0",
          backgroundColor: "#B88831",
          color: "#ffffff",
          fontSize: 16,
          cursor: "pointer",
          width: "100%",
        }}
        onClick={handlerGoBack}
      /> */}
      <iframe
        style={{ width: "100%" }}
        className="_iframe"
        src={authenticationdata?.data?.launchURL}
        frameborder="0"
      />
    </div>
  );
};

export default SuperNowaIframe;
