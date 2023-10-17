import { setupListeners } from '@reduxjs/toolkit/query';
import { accountStatement } from '../Services/accountStatement/AccountStatement';
import { configureStore } from '@reduxjs/toolkit';
import { Login } from '../Services/Auth/Login';
import { betModuleDataSlice, isLoginSlice } from './LoginSlice';
import { ActiveSport } from '../Services/ActiveSportList/ActiveSportList';
import { activeMatch } from '../Services/ActiveSportList/ActiveMatch';

export const store = configureStore({
	reducer: {
		isLogin: isLoginSlice.reducer,
    betSlip: betModuleDataSlice.reducer,
		// Add the generated reducer as a specific top-level slice
		[accountStatement.reducerPath]: accountStatement.reducer,
		[Login.reducerPath]: Login.reducer,
		[ActiveSport.reducerPath]: ActiveSport.reducer,
		[activeMatch.reducerPath]: activeMatch.reducer,


	},
	// Adding the api middleware enables caching, invalidation, polling,
	// and other useful features of `rtk-query`.
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(accountStatement.middleware).concat(Login.middleware).concat(ActiveSport.middleware).concat(activeMatch.middleware)
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
