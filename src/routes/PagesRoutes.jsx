import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../common/MainLayout";
import DashBoard from "../pages/dashBoard/DashBoard";
import SignUp from "../pages/signUp/SignUp";
import AccountStatement from "../pages/AccountStatement/AccountStatement";
import MyBets from "../component/MyBets/MyBets";
import ChangePassword from "../component/ChangePassword/ChangePassword";
import BettingProfitLoss from "../component/BettingProfitLoss/BettingProfitLoss";
import { account_statement, mybets ,casino} from "./PagesUrl";
import Sublayout from "../common/SubLayout";
import Casino from "../pages/casino/Casino";
import GameDetail from "../pages/gameDeatail/GameDetail";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <DashBoard />,
      },
      {
        path: casino,
        element: <Casino />,
      },
    ],
  },
  {
    path: "/",
    element: <Sublayout />,
    children: [
      { path: account_statement, element: <AccountStatement /> },
      {
        path: "/bets_Profit_loss",
        element: <BettingProfitLoss />,
      },
      {
        path: mybets,
        element: <MyBets />,
      },
      {
        path: "/password_change",
        element: <ChangePassword />,
      },
      {
        path: "/game_detail",
        element: <GameDetail />
      }
    ],
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);
