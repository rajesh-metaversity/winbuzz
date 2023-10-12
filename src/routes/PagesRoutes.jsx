import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../common/MainLayout';
import DashBoard from '../pages/dashBoard/DashBoard';
import SignUp from '../pages/signUp/SignUp';
import AccountStatement from '../pages/AccountStatement/AccountStatement';
import MyBets from '../component/MyBets/MyBets';
import ChangePassword from '../component/ChangePassword/ChangePassword';
import BettingProfitLoss from '../component/BettingProfitLoss/BettingProfitLoss';
import { mybets } from './PagesUrl';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <DashBoard />
			}
		]
	},
	{
		path: '/sign-up',
		element: <SignUp />
	},
	{ path: '/account_statement', element: <AccountStatement /> },
	{
		path: mybets,
		element: <MyBets />
	},

	{
		path: '/password_change',
		element: <ChangePassword />
	},
	{
		path: '/bets_Profit_loss',
		element: <BettingProfitLoss />
	}
]);
