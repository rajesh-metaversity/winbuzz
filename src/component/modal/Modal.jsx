import { Dialog } from "@mui/material";
import Modal from "@mui/material/Modal";
import { StyledDialouge } from "./styled";

const ModalComponent = ({ Elememt, open, setOpen, loginWidth }) => {
	const handleClose = () => {
		setOpen(false);
		console.log('hui');
	};
  return (
		<>
			<StyledDialouge
				open={open}
				onClose={() => handleClose()}
			  maxWidth="xl"
			  props={loginWidth}
				// aria-labelledby="modal-modal-title"
				// aria-describedby="modal-modal-description"
			>
				{Elememt}
			</StyledDialouge>
		</>
  );
};

export default ModalComponent;
