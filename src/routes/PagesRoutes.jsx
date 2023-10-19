import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../common/MainLayout";
import DashBoard from "../pages/dashBoard/DashBoard";
import SignUp from "../pages/signUp/SignUp";
import AccountStatement from "../pages/AccountStatement/AccountStatement";
import MyBets from "../component/MyBets/MyBets";
import ChangePassword from "../component/ChangePassword/ChangePassword";
import BettingProfitLoss from "../component/BettingProfitLoss/BettingProfitLoss";
import {
  account_statement,
  mybets,
  casino,
  game_detail,
  passwordChange,
  bets_profit_loss,
  signUp,
  game_list,
} from "./PagesUrl";
import Sublayout from "../common/SubLayout";
import Casino from "../pages/casino/Casino";
import GameDetail from "../pages/gameDeatail/GameDetail.jsx";
import SportData from "../component/SportData/SportData";

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
      {
        path: game_list,
        element: <SportData/>,
      },
    ],
  },
  {
    path: "/",
    element: <Sublayout />,
    children: [
      { path: account_statement, element: <AccountStatement /> },
      {
        path: "/",
        element: <BettingProfitLoss />,
      },
      {
        path: mybets,
        element: <MyBets />,
      },
      {
        path: passwordChange,
        element: <ChangePassword />,
      },
      {
        path: game_detail,
        element: <GameDetail />,
      },
    ],
  },
  {
    path: signUp,
    element: <SignUp />,
  },
]);
