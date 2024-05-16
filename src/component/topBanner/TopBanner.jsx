///styles
import "./styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from "react";
import { useBannerListDataMutation } from "../../Services/BannerList/BannerList";
import { useMediaQuery } from "../../useMediaQuery/UseMediaQuery";
import { AllCasinoProviderName } from "../allCasino/superNowaProvider";
import { useNavigate } from "react-router-dom";
import { useAllotedCasinoQuery } from "../../Services/allotedCasino/AllotedCasino";
import { isLoginSelector } from "../../App/LoginSlice";
import { useSelector } from "react-redux";

const TopBanner = () => {
  // const isBreakPoint = useMediaQuery("(max-width: 780px)");
  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: isBreakPoint ? 1 : 4,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 500,
  //   cssEase: "linear",
  //   arrows: false,
  //   pauseOnHover: true,
  // };
  const isLogin = useSelector(isLoginSelector);
  const [trigger, { data }] = useBannerListDataMutation();
  useEffect(() => {
    trigger({
      type: 1,
    });
  }, []);

  const newArraya = [
    // ...AllCasinoProviderName["Indian Casino"],
    ...AllCasinoProviderName["Internation Casino"],
  ];

  const nav = useNavigate();
  const navHndler = (game, gameCodeName) => {
    if (game == "Super nowa") {
      nav("/SuperNowa_casion");
    } else if (game == "Aura") {
      nav("casino-list");
    } else {
      nav(`/casino/LiveCasino/${gameCodeName}`);
    }
  };
  const { data: allotedCasino } = useAllotedCasinoQuery(
    {},
    {
      skip: !isLogin,
    }
  );
  // useEffect(() => {
  //   if (isLogin) {
  //     trigg();
  //   }
  // }, []);
  return (
    // <div className="img_cont">
    // <div className="top-banner-container">
    //   {data?.data?.map((item, index) => {
    //     return (
    //       <div
    //         className="top-banner-img-col"
    //         key={index + item?.name}
    //         style={{
    //           backgroundImage: `url('${item?.path}')`,
    //         }}
    //       >
    //         <a
    //           // _ngcontent-ugj-c101=""
    //           href="javascript:void(0);"
    //           className="home-animated"
    //         >
    //           <span></span>
    //           <span></span>
    //           <span></span>
    //           <span></span>
    //           <span></span> play now
    //         </a>
    //       </div>
    //     );
    //   })}
    //   {/* <Slider {...settings} className="img_cont">
    //     {data?.data?.map((sliderdata, index) => (
    //       <div key={index + sliderdata?.path}>
    //         <Grid container>
    //           <Grid
    //             item
    //             xs={12}
    //             sx={{
    //               padding: isBreakPoint ? 0 : "0.25rem",
    //               backgroundColor: "#fff",
    //               borderRadius: isBreakPoint ? 0 : "0.375rem",
    //               overflowX: "hidden",
    //               border: isBreakPoint ? "none" : "1px solid #dee2e6",
    //               maxHeight: isBreakPoint ? "200px" : "68px",
    //               cursor: "pointer",
    //             }}
    //           >
    //             <img
    //               src={sliderdata?.path}
    //               alt=""
    //               width="100%"
    //               height="100%"
    //               style={{ objectFit: "cover" }}
    //             />
    //           </Grid>
    //         </Grid>
    //       </div>
    //     ))}
    //   </Slider> */}
    //   {/* <div className="mobile-top-banner-img">
    // 		{data?.data?.map((sliderdata, index) => (
    // 			<div
    // 				className="img-div"
    // 				key={index + sliderdata?.name}
    // 				style={{
    // 					backgroundImage: `url('${sliderdata?.path}')`,
    // 				}}
    // 			/>
    // 		))}
    // 	</div> */}
    // </div>
    // </div>
    <>
      <div className="top-banner-container-1">
        {/* <h3 className="provider_name_details">{key}</h3> */}

        {newArraya?.map((item, key) => {
          if (
            (item?.gameCode == "AURA" &&
              allotedCasino?.data?.find((item) => item?.name == "Aura")
                ?.active) ||
            (item?.gameCode == "SP-NOWA" &&
              allotedCasino?.data?.find((item) => item?.name == "Super Nova")
                ?.active) ||
            (!["AURA", "SP-NOWA"].includes(item?.gameCode) &&
              allotedCasino?.data?.find((item) => item?.name == "QTech")
                ?.active)
          ) {
            return (
              <div
                className="top-banner-img-col"
                key={key + item}
                onClick={() => navHndler(item?.name, item?.gameCodeName)}
              >
                <div
                  className="img"
                  style={{ border: "0.5px solid" }}
                  // onClick={() => {
                  //   setId(key);
                  //   if (token) {
                  //     handleGamePageroute(
                  //       item?.PageUrl,
                  //       item,
                  //       key,
                  //       item?.gameCode
                  //     );
                  //   } else {
                  //     setModalValue(0);
                  //     setCasinoRuleModal(true);
                  //   }
                  // }}
                  key={item.PageUrl + key}
                >
                  <img className="complany-logo-warp" src={item?.logo} alt="" />
                  <span className="complany-name-wrap">{item?.name}</span>
                  <a
                    // _ngcontent-ugj-c101=""
                    href="javascript:void(0);"
                    className="home-animated"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> play now
                  </a>
                </div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default TopBanner;
