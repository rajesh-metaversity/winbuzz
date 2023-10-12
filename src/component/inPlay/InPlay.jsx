import inplayico from "../../assets/img/inplayico.png";


const InPlayHeading = () => {
  return (
    <>
      <div className="inplay-container">
        <div className="inplay-heading">
          <img src={inplayico} alt="" />
          In Play
        </div>
      </div>
    </>
  );
};

export default InPlayHeading;
