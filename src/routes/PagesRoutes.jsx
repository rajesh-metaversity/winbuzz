import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../common/MainLayout";
import DashBoard from "../pages/dashBoard/DashBoard";
import SignUp from "../pages/signUp/SignUp";
import AccountStatement from "../pages/AccountStatement/AccountStatement";

import {
  account_statement,
  mybets,
  casino,
  game_detail,
  passwordChange,
  bets_profit_loss,
  signUp,
  game_list,
  deposit,
  withdraw,
  game,
  multi_market,
} from "./PagesUrl";
import Sublayout from "../common/SubLayout";
import Casino from "../pages/casino/Casino";
import GameDetail from "../pages/gameDeatail/GameDetail.jsx";
import SportData from "../component/SportData/SportData";
import BettingProfitLoss from "../pages/BettingProfitLoss/BettingProfitLoss";
import ChangePassword from "../pages/ChangePassword/ChangePassword";
import MyBets from "../pages/MyBets/MyBets";
import Withdraw from "../pages/withdraw/Withdraw";
import CasinoIframe from "../pages/casinoIframe/CasinoIframe";
import Deposit from "../pages/Deposit/Deposit";
import MultiMarket from "../pages/MultiMarket/MultiMarket";

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
        element: <CasinoContainer />,
      },
      {
        path: game_list,
        element: <SportData />,
      },
    ],
  },
  {
    path: "/",
    element: <Sublayout />,
    children: [
      { path: account_statement, element: <AccountStatement /> },
      {
        path: bets_profit_loss,
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
      {
        path: deposit,
        element: <Deposit />,
      },
      {
        path: withdraw,
        element: <Withdraw />,
      },
      {
        path: multi_market,
<<<<<<< HEAD
        element: <MultiMarket/>,
=======
        element: <MultiMarket />,
>>>>>>> 5107b3d9529e9b68923f3243f80bb7bf1e809f51
      },
    ],
  },
  {
    path: signUp,
    element: <SignUp />,
  },
  {
    path: game,
    element: <CasinoIframe />,
  },
  {
    path: Auragame,
    element: <AuraCasino />,
  },
]);
