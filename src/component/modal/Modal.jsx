import { Dialog } from '@mui/material';
import Modal from '@mui/material/Modal';

const ModalComponent = ({ Elememt, open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <>
      <Dialog
        open={open}
        maxWidth="xl"
        onClose={() => handleClose()}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        {Elememt}
      </Dialog>
    </>
  )
}

export default ModalComponent
