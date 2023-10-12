import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../common/MainLayout";
import DashBoard from "../pages/dashBoard/DashBoard";
import SignUp from "../pages/signUp/SignUp";
import AccountStatement from "../pages/AccountStatement/AccountStatement";
import MyBets from "../component/MyBets/MyBets";
import ChangePassword from "../component/ChangePassword/ChangePassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },

     

    ],
    
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {path: "/account_statement",
  element: <AccountStatement />
},
{
    path: "/banner",
    element: <MyBets />
  },
  
  {
    path: "/password_change",
    element: <ChangePassword />
  }
]);

