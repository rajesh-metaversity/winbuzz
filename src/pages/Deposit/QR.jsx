import DownloadIcon from "@mui/icons-material/Download";
import { saveAs } from "file-saver";
import "./styles.scss";

const QR = ({ selectedImage }) => {
  const handleClick = (url) => {
    saveAs(url, "Qr");
  };
  return (
    <div className="qr_cont">
      <div className="qr_heading">QR code for payment</div>
      <div className="qr_body">
        <div className="walmart">
          <img src={selectedImage?.accountNumber} alt="" />
        </div>
        <div className="display_name">
          <span>
            <label>Display Name</label>
            <input disabled value={selectedImage?.accountHolderName} />
          </span>
          <button onClick={() => handleClick(selectedImage?.accountNumber)}>
            <DownloadIcon />
            QR Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default QR;
