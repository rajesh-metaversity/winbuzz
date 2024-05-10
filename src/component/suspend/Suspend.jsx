import { SuspendComp, SuspendTypo } from "./suspendStyled";

const Suspend = ({status}) => {
  return (
    <SuspendComp>
      <SuspendTypo>{status}</SuspendTypo>
    </SuspendComp>
  );
};

export default Suspend;
