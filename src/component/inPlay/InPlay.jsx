import inplayico from "../../assets/img/inplayico.png";


const InPlayHeading = ({headName}) => {
  return (
    <>
      <div className="inplay-container">
        <div className="inplay-heading">
          <img src={inplayico} alt="" />
         {headName}
        </div>
      </div>
    </>
  );
};

export default InPlayHeading;
