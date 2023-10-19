import { setupListeners } from '@reduxjs/toolkit/query';
import { accountStatement } from '../Services/accountStatement/AccountStatement';
import { configureStore } from '@reduxjs/toolkit';
import { Login } from '../Services/Auth/Login';
import { betModuleDataSlice, isLoginSlice } from './LoginSlice';
import { ActiveSport } from '../Services/ActiveSportList/ActiveSportList';
import { activeMatch } from '../Services/ActiveSportList/ActiveMatch';
import { MyBets } from '../Services/MyBets/MyBets';
import { Logout } from '../Services/Auth/Logout';
import { ChangePassword } from '../Services/ChangePassword/ChangePassword';
import { BettingProfitLoss } from '../Services/BettingProfitLoss/BettingProfitLoss';
import { bannerList } from "../Services/BannerList/BannerList";
import { BalanceApi } from "../Services/Balance/BalanceApi";

export const store = configureStore({
  reducer: {
    isLogin: isLoginSlice.reducer,
    betSlip: betModuleDataSlice.reducer,
		// Add the generated reducer as a specific top-level slice
		[accountStatement.reducerPath]: accountStatement.reducer,
		[Login.reducerPath]: Login.reducer,
		[Logout.reducerPath]: Logout.reducer,
		[ActiveSport.reducerPath]: ActiveSport.reducer,
		[activeMatch.reducerPath]: activeMatch.reducer,
		[MyBets.reducerPath]: MyBets.reducer,
		[ChangePassword.reducerPath]: ChangePassword.reducer,
		[BettingProfitLoss.reducerPath]: BettingProfitLoss.reducer,
    [BalanceApi.reducer]: BalanceApi.reducer,
    [bannerList.reducerPath]: bannerList.reducer,

	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(accountStatement.middleware).concat(Login.middleware).concat(ActiveSport.middleware).concat(activeMatch.middleware).concat(MyBets.middleware).concat(Logout.middleware).concat(ChangePassword.middleware).concat(BettingProfitLoss.middleware) .concat(activeMatch.middleware)
  .concat(bannerList.middleware).concat(BalanceApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
