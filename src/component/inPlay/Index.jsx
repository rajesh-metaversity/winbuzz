import InPlayHeading from "./InPlay";
import InplayCollapse from "./InplayCollapse";
///styles
import "./styles.scss";
const Inplay = () => {
  return (
    <>
      <InPlayHeading />
      {[1, 2, 3].map((res) => {
        return (
          <>
            <InplayCollapse />
          </>
        );
      })}
    </>
  );
};

export default Inplay;
