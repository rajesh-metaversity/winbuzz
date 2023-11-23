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
	Auragame,
	multi_market,
	InPlay,
	setting,
	unsettled
} from './PagesUrl';
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
import CasinoContainer from "../pages/casino/CasinoContainer";
import AuraCasino from "../pages/auraCasino/AuraCasino.jsx";
import MultiMarket from "../pages/MultiMarket/MultiMarket.jsx";
import InPlayy from '../pages/InPlayy/InPlay';
import Setting from "../pages/Setting/Setting";
import UnsettledBets from "../pages/UnsettledBets/UnsettledBets";


const userType = localStorage.getItem('userTypeInfo');

export const router = () => {
	return createBrowserRouter([
		{
			path: '/',
			element: <MainLayout  />,
			children: [
				{
					path: '/',
					element: <DashBoard />
				},
				{
					path: casino,
					element: <CasinoContainer />
				},
				{
					path: game_list,
					element: <SportData />
				},
				{
					path: InPlay,
					element: <InPlayy />
				}
			]
		},

		{
			path: '/',
			element: <Sublayout  />,
			children: [
				{ path: account_statement, element: <AccountStatement /> },
				{
					path: setting,
					element: <Setting />
				},
				{
					path: unsettled,
					element: <UnsettledBets  />
				},


				{
					path: bets_profit_loss,
					element: <BettingProfitLoss />
				},

				{
					path: mybets,
					element: <MyBets />
				},
				{
					path: passwordChange,
					element: <ChangePassword />
				},
				{
					path: game_detail,
					element: <GameDetail />
				},

				{
					path: userType != 2 ? deposit : '',
					element: <Deposit />
				},
				{
					path: userType != 2 ? withdraw : '',
					element: <Withdraw />
				},

				{
					path: multi_market,
					element: <MultiMarket />
				}
			]
		},

		{
			path: signUp,
			element: <SignUp />
		},
		{
			path: game,
			element: <CasinoIframe />
		},
		{
			path: Auragame,
			element: <AuraCasino />
		},

		{
			path: '*',
			element: 'not found'
		}
	]);
};
