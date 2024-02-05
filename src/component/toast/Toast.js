import { toast } from "react-toastify";

export const showErrorToast = (str) => {
  toast.error(str, {
    style: {
      title: "Error toast",
      text: "This is an error message",
      background: "red",
      color: "white",
    },
    theme: "dark",
  });
};

export const showSuccessToast = (str) => {
  toast.success(str, {
    style: {
      title: "Success toast",
      text: "This is a success message",
      background: "green",
      color: "white",
    },
    theme: "dark",
  });
};
