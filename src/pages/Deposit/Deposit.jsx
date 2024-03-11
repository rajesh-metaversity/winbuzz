import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "./styles.scss";
import ReactFileReader from "react-file-reader";
import {
  useDepositBankQuery,
  useDepositStakeQuery,
  useDepositbalanceQuery,
  useDepositbalanceSubmitMutation,
} from "../../Services/stake/Deposit";
import { useEffect, useState } from "react";
import Bank from "./Bank";
import UPI from "./UPI";
import QR from "./QR";
import Loader from "../../component/Loader/Loader";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { showErrorToast, showSuccessToast } from "../../component/toast/Toast";
const Deposit = () => {
  const [files, setFiles] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [payloadData, setPayloadData] = useState({
    amount: "",
    url: "",
  });
  const [error1, setError] = useState({
    amount: false,
    url: false,
  });
  const [amountError, setAmountError] = useState(false);

  const {
    data: depositData,
    isLoading: load,
    isError: error,
  } = useDepositStakeQuery();
  const { data, isLoading, isError } = useDepositBankQuery();

  const {
    data: balance,
    isLoading: balanceLoading,
    isError: Error,
  } = useDepositbalanceQuery();
  const [
    trigger,
    {
      data: submitBalance,
      status,
      error: badError,
      isError: eror,
      isLoading: loading,
    },
  ] = useDepositbalanceSubmitMutation();

  const [depositKey, setDepositKey] = useState(0);
  const handleClickImage = (imageData, key) => {
    setSelectedImage(imageData);
    setDepositKey(key);
  };

  const bankDetailObj = {
    0: <Bank selectedImage={selectedImage || (data?.data && data?.data[0])} />,
    1: <UPI selectedImage={selectedImage} />,
    2: <QR selectedImage={selectedImage} />,
  };

  const key = {
    BANK: 0,
    UPI: 1,
    QR: 2,
  };

  useEffect(() => {
    try {
      if (submitBalance) {
        showSuccessToast(submitBalance?.message);
      } else {
        showErrorToast(submitBalance?.message);
      }
    } catch (error) {
      showErrorToast(error?.submitBalance?.message);
    }
  }, [submitBalance]);

  const depositSubmitHandler = () => {
    let isSuccess = false;
    for (const key of Object.keys(payloadData)) {
      setError((prev) => {
        return { ...prev, [key]: Boolean(!payloadData[key]) };
      });
    }
    for (const key of Object.keys(payloadData)) {
      const value = Boolean(payloadData[key]);
      if (!value) {
        isSuccess = false;
        break;
      } else {
        isSuccess = true;
      }
    }
    if (isSuccess) {
      const submitData = new FormData();
      submitData.append("amount", payloadData?.amount);
      submitData.append("image", files);
      trigger(submitData);

      setPayloadData({
        amount: "",
        url: "",
      });
      setFiles("");
    }
  };

  const handleFiles = (files) => {
    setFiles(files?.fileList[0]);
    setError((prev) => {
      return {
        ...prev,
        url: false,
      };
    });
    setPayloadData((prev) => {
      return {
        ...prev,
        url: files.base64,
      };
    });
  };

  const handleAmountChange = (e) => {
    // setPayloadData.amount(e.target.value);
    setPayloadData((prev) => {
      return {
        ...prev,
        amount: e.target.value,
      };
    });
    if (e.target.value) {
      setAmountError(false);
    } else {
      setAmountError(true);
    }
  };

  // const imageChangeHandler = event => {
  // 	const files = event.target?.files;
  // 	if (files && files.length) {
  // 		setFiles(event.target.files[0]);
  // 	}
  // };

  const plusHandleChange = () => {
    setError((prev) => {
      return {
        ...prev,
        amount: false,
      };
    });
    if (payloadData.amount)
      setPayloadData((prev) => {
        return {
          ...prev,
          amount: Number(payloadData.amount) + 10,
        };
      });
    else {
      setPayloadData((prev) => {
        return {
          ...prev,
          amount: Number(payloadData.amount) + 100,
        };
      });
    }
    setAmountError(false);
  };
  // const minusHandleChange = () => {
  // 	payloadData.amount > 100 &&
  // 		(setPayloadData(prev => {
  // 			return {
  // 				...prev,
  // 				amount: Number(payloadData.amount) - 10
  // 			};
  // 		}),
  // 		setAmountError(false));
  // };
  const minusHandleChange = () => {
    setPayloadData((prev) => {
      const newAmount = Math.max(Number(prev?.amount) - 10, 100);
      return {
        ...prev,
        amount: newAmount,
      };
    });
    setAmountError(false);
  };

  const keyAmount = (event) => {
    setPayloadData((prev) => {
      return {
        ...prev,
        amount: Number(payloadData?.amount) + Number(event?.value),
      };
    });
    // setPayloadData.amount(payloadData.amount + event.value);
    setAmountError(false);
  };
  return (
    <div className="deposit_cont">
      <div className="dep-heading">Deposit</div>
      <div className="deposit_amount">
        <div className="left">
          <p>Enter Amount</p>
          <span className="left_span">
            <button
              onClick={() => minusHandleChange()}
              style={{ cursor: "pointer" }}
            >
              -
            </button>
            <input
              value={payloadData?.amount}
              onChange={handleAmountChange}
              placeholder="Enter Amount"
              // onChange={e => {
              // 	setAmount(e.target.value);

              // }}
              style={{ borderColor: error1?.amount ? "red" : "#b6842d" }}
            />
            <button
              onClick={() => plusHandleChange()}
              style={{ cursor: "pointer" }}
            >
              +
            </button>
          </span>
          {error1?.amount && (
            <p className="error-class">Amount Field Required</p>
          )}
        </div>
        <div className="right">
          {depositData?.data &&
            depositData?.data?.map((item, index) => {
              return (
                <button key={index} onClick={() => keyAmount(item)}>
                  {item?.key}
                </button>
              );
            })}
        </div>
      </div>
      <div className="middle_cont">
        <span className="pay">
          <p>Pay {payloadData?.amount}</p>
          <p>Pay manually</p>
          {Number(payloadData?.amount) > 0 && (
            <>
              <p className="image_cont">
                {data?.data &&
                  data?.data?.map((el, index) => {
                    return (
                      <>
                        <div key={index} className="image_sub-cont">
                          <img
                            src={el?.image}
                            alt="image"
                            onClick={() => {
                              setDepositKey();
                              handleClickImage(el, key[el?.depositType]);
                              // handleClickImage(el);
                            }}
                          />
                        </div>
                      </>
                    );
                  })}
              </p>
              <div className="payment_cont">{bankDetailObj[depositKey]}</div>
            </>
          )}
        </span>

        {payloadData?.amount > 0 && (
          <div
            className="lebel"
            style={{
              border: error1.url
                ? "2px solid red"
                : "2px solid rgb(253, 207, 19)",
            }}
          >
            {payloadData?.url && <img src={payloadData?.url} alt="" />}
            {!payloadData?.url && (
              <>
                <p
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <AddCircleIcon /> Click here to upload payment screenshot
                </p>
              </>
            )}
            <ReactFileReader
              fileTypes={[".png", ".jpg"]}
              base64={true}
              handleFiles={handleFiles}
            >
              {/* <FiCamera style={{ width: 30, height: 30 }} as={Button} />
               */}

              <p>Click here to upload payment screenshot</p>
            </ReactFileReader>
          </div>
        )}

        <button
          className="submit_button"
          onClick={() => depositSubmitHandler()}
        >
          {loading ? <Loader /> : "Submit"}
        </button>
      </div>
      <div className="footer">
        <p>Previous Deposit</p>
        {/* <div className='footer-bottom'>
					  {depositFooter.map((el, index) => {
						  return (
							  <span key={index}>{el }</span>
						  )
					  })}
				  </div> */}
        <div className="deposit_table">
          <TableContainer sx={{ borderRadius: 0 }}>
            <Table aria-label="customized table">
              <TableHead
                sx={{ borderRadius: 0 }}
                className="deposit_table-head"
              >
                <TableRow
                  sx={{
                    "& .MuiTableCell-root": {
                      padding: "8px",
                    },
                  }}
                >
                  <TableCell align="left">Amount</TableCell>
                  <TableCell align="left">Image&nbsp;</TableCell>
                  <TableCell align="left">Date&nbsp;</TableCell>
                  <TableCell align="left">Status&nbsp;</TableCell>
                </TableRow>
              </TableHead>

              {/* {balanceLoading ? (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Loader />
                </div>
              ) : ( */}
              <TableBody className="table_body">
                {balance?.data &&
                  balance?.data?.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell align="left">{item?.amount}</TableCell>
                      <TableCell align="left">
                        <img src={item?.image} height="50px" />
                      </TableCell>
                      <TableCell align="left">{item?.time}</TableCell>
                      <TableCell align="left" className="table_td">
                        {item?.status}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
              {/* )} */}
            </Table>
          </TableContainer>
          {!balanceLoading ? (
            !balance?.data && (
              <p
                style={{
                  width: "100%",
                  textAlign: "center",
                  background: "transparent",
                  color: "black",
                }}
              >
                No data
              </p>
            )
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Deposit;
