import { Dialog } from "@mui/material";
import Modal from "@mui/material/Modal";
import { StyledDialouge } from "./styled";

const ModalComponent = ({ Elememt, open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <>
      <StyledDialouge
        open={open}
        maxWidth="xl"
        onClose={() => handleClose()}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        {Elememt}
      </StyledDialouge>
    </>
  );
};

export default ModalComponent;
