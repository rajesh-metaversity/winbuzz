import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../common/MainLayout";
import DashBoard from "../pages/dashBoard/DashBoard";
import MyBets from "../component/MyBets/MyBets";
import ChangePassword from "../component/ChangePassword/ChangePassword";
import BettingProfitLoss from "../component/BettingProfitLoss/BettingProfitLoss";

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
    path: "/my_bets",
    element: <MyBets />
  },
  
  {
    path: "/password_change",
    element: <ChangePassword />
  },
  {
    path: "/bets_Profit_loss",
    element: <BettingProfitLoss />
  },

]);
