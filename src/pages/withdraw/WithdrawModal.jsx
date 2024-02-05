import React, { useEffect } from "react";
import { useSaveBankAccountMutation } from "../../Services/withdraw/Withdraw";
import CloseIcon from "@mui/icons-material/Close";
import { toast } from "react-toastify";
import { showSuccessToast } from "../../component/toast/Toast";

const WithdrawModal = ({
  withdrawDetails,
  setWithdrawDetails,
  setSaveBankModal,
  triger,
  withdrawTypeHandler,
}) => {
  const [
    trigger,
    {
      data: saveBankDetails,
      error: saveBankError,
      isLoading: saveBankDetailsLoading,
    },
  ] = useSaveBankAccountMutation();
  // const { data: accountDetails, error: bankError, isLoading: bankDetailsLoading } = useBankAccountQuery();

  const saveDetailsHandler = () => {
    trigger(withdrawDetails);
    setSaveBankModal(false);
  };

  useEffect(() => {
    withdrawTypeHandler();
    triger();
  }, [withdrawDetails]);

  useEffect(() => {
    if (saveBankDetails?.status) {
      showSuccessToast(saveBankDetails?.message);
      setWithdrawDetails((prev) => {
        return {
          ...prev,
          accountHolderName: "",
          bankName: "",
          accountType: "",
          amount: "",
          ifsc: "",
          accountNumber: "",
          withdrawType: "",
          withdrawMode: "",
        };
      });
    }
  }, [saveBankDetails]);

  return (
    <div className="save-details-modal">
      <div className="save-details-heading">
        <span>Save Details</span>
        <span onClick={() => setSaveBankModal(false)}>
          <CloseIcon />
        </span>
      </div>
      <div className="modal_body">
        <p className="confirmation">Do you want to save the Details?</p>
        <p className="save" onClick={() => saveDetailsHandler()}>
          <span>Save</span>
        </p>
      </div>
    </div>
  );
};

export default WithdrawModal;
