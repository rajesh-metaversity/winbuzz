import { setupListeners } from "@reduxjs/toolkit/query";
import { accountStatement } from "../Services/accountStatement/AccountStatement";
import { configureStore } from "@reduxjs/toolkit";
import { Login } from "../Services/Auth/Login";
import { betModuleDataSlice, isLoginSlice } from "./LoginSlice";
import { ActiveSport } from "../Services/ActiveSportList/ActiveSportList";
import { activeMatch } from "../Services/ActiveSportList/ActiveMatch";
import { Logout } from "../Services/Auth/Logout";
import { ChangePassword } from "../Services/ChangePassword/ChangePassword";
import { BettingProfitLoss } from "../Services/BettingProfitLoss/BettingProfitLoss";
import { bannerList } from "../Services/BannerList/BannerList";
import { BalanceApi } from "../Services/Balance/BalanceApi";
import { Message } from "../Services/Message/Message";
import { MyBets } from "../Services/MyBets/MyBets";
import { Qtech } from "../Services/Qtech/Qtech";
import { stake } from "../Services/stake/Deposit";
import { Withdraw } from "../Services/withdraw/Withdraw";
import { PnlApi } from "../Services/Pnl/Pnl";
import { Casino } from "../Services/auraCasino/AuraCasino";
import { Favourite } from "../Services/Favourite/Favourite";
import { FavList } from "../Services/FavList/FavList";

export const store = configureStore({
  reducer: {
    isLogin: isLoginSlice.reducer,
    betSlip: betModuleDataSlice.reducer,
    [accountStatement.reducerPath]: accountStatement.reducer,
    [Login.reducerPath]: Login.reducer,
    [Logout.reducerPath]: Logout.reducer,
    [ActiveSport.reducerPath]: ActiveSport.reducer,
    [activeMatch.reducerPath]: activeMatch.reducer,
    [MyBets.reducerPath]: MyBets.reducer,
    [ChangePassword.reducerPath]: ChangePassword.reducer,
    [BettingProfitLoss.reducerPath]: BettingProfitLoss.reducer,
    [bannerList.reducerPath]: bannerList.reducer,
    [BalanceApi.reducerPath]: BalanceApi.reducer,
    [Message.reducerPath]: Message.reducer,
    [Qtech.reducerPath]: Qtech.reducer,
    [stake.reducerPath]: stake.reducer,
    [Withdraw.reducerPath]: Withdraw.reducer,
    [PnlApi.reducerPath]: PnlApi.reducer,
    [Casino.reducerPath]: Casino.reducer,
    [Favourite.reducerPath]: Favourite.reducer,
    [FavList.reducerPath]: FavList.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(accountStatement.middleware)
      .concat(Login.middleware)
      .concat(ActiveSport.middleware)
      .concat(activeMatch.middleware)
      .concat(MyBets.middleware)
      .concat(Logout.middleware)
      .concat(ChangePassword.middleware)
      .concat(BettingProfitLoss.middleware)
      .concat(activeMatch.middleware)
      .concat(bannerList.middleware)
      .concat(BalanceApi.middleware)
      .concat(Message.middleware)
      .concat(Qtech.middleware)
      .concat(stake.middleware)
      .concat(Withdraw.middleware)
      .concat(PnlApi.middleware)
      .concat(Casino.middleware)
      .concat(Favourite.middleware)
      .concat(FavList.middleware),
});

setupListeners(store.dispatch);
