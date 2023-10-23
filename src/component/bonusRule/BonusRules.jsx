import "./BonusRule.scss";
import CloseIcon from "@mui/icons-material/Close";
const BonusRules = ({ open, setOpen }) => {
  return (
    <div className="bonus_rule_modal">
      <div className="modale_heading">
        Bonus Rule
        <CloseIcon onClick={() => setOpen(!open)} />
      </div>
      <div className="modal_body_content">
        <h5>
          All new members! We Welcomes you with a 400% Sports Bonus on your
          starting journey.
        </h5>
        <p>
          {`=>`} Claim your bonus immediately and start your journey two times
          faster.
        </p>
        <p>
          {`=>`} The welcome bonus shall exclusively apply to each users First
          deposit and Second deposit and even on Every Deposit on account
        </p>
        <p>{`=>`} Register an account and make your first deposit.</p>
        <h5>First Deposit :</h5>
        <p>INR 100-5,000 {`=>`} 400% on 200 X True Rolling</p>
        <p>
          INR 5,001-2,00,000 {"=>"} 50% or 15,000 Whichever is MORE on 200X True
          Rolling
        </p>
        <p>INR 2,00,001 OR MORE {"=>"} 1,00,000 on 200X True Rolling</p>
        <h5>Second Deposit :</h5>
        <p>INR 100-10,000 {"=>"} 50 % on 200X True Rolling</p>
        <p>
          INR 10,001 - 4,00,000 {"=>"} 25% or 5,000 Whichever is More on 200X
          True Rolling
        </p>
        <p>INR 4,00,001 OR MORE {"=>"} 1,00,000 on 200X True Rolling</p>
        <div>
          <span>On Every Deposit Bonus (min:500) :</span> 10% on 200 X True
          Rolling up to Deposit of 10,00,000
        </div>
        <p>
          (On Deposit of more than 10,00,000 , you will get Bonus equivalent to
          deposit of 10,00,000)
        </p>
        <h5>Referral Bonus:</h5>
        <h6>
          {"=>"} You can also earn from Referring someone to play on this
          website
        </h6>
        <h6>
          {"=>"} You can Earn 20% of First deposit of your Reference, once
          he/she Redeem at least 1 coupon of 10 coupons of First Deposit Bonus
          (If You Refer Someone and He/She deposit 10000 , You Earn 2000
          Referral Bonus, Which can be converted in to awaiting bonus after your
          reference Redeem at least 1000 Bonus Coupons Received by him/her on
          First Deposit)
        </h6>
        <h6>
          {"=>"} 20% of Your Reference Deposit or 50,000 Whichever is Less on
          200X true rolling (Min Deposit:- 2500)
        </h6>
        <h5 className="tru_trolling">#True Rolling</h5>
        <p>
          {"=>"} True Rolling will be calculated on every bet you placed, i.e it
          is accumulation of true rolling of all bets
        </p>
        <p>
          {"=>"} True Rolling amount is Exposure created on bet or profit on
          that exposure ,whichever is less
        </p>
        <p>
          i.e if you back 10000 on runner at rate of 45, your Rolling Amount
          will be 4500
        </p>
        <p>
          if you lay 10000 on runner at rate of 35, your Rolling Amount will be
          3500
        </p>
        <h5># For fancy</h5>
        <p>
          {"=> "}if you back 10000 on any run on even rate, your Rolling Amount
          will be 10000
        </p>
        <p>
          {"=> "}if you back 10000 on any run on even rate, your Rolling Amount
          will be 10000
        </p>
        <p>
          {"=> "}if you back 10000 on any run on even rate, your Rolling Amount
          will be 9000
        </p>
        <p>
          {"=> "}if you back 10000 on any run on even rate, your Rolling Amount
          will be 10000
        </p>
        <p>
          {"=> "}if you back 10000 on any run on even rate, your Rolling Amount
          will be 10000
        </p>
        <p>
          {"=> "}if you back 10000 on any run on even rate, your Rolling Amount
          will be 6000
        </p>
        <p>
          - Maximum rolling amount will be of 5,000 per market or maximum limit
          of bet at the time of result for that event, which ever is less( every
          session and bookmaker and match odds are different markets, so you can
          get benefit of maximum limit on every market)
        </p>
        <p>
          - Once you completed your Required Rolling, Your Awaited Bonus can be
          Converted in to Bonus Chips, You Can bet your bonus chips to win the
          amount {"{Balance}"} which can be withdrawn but you cannot withdraw
          bonus chips
        </p>
        <p>
          * All Bets on Cricket , Football and Tennis will be calculated for
          Bonus , Even Match Odds and Book maker.
        </p>
        <p>* No minimum Odd Criteria to calculate Bonus</p>
        <p>
          * No one side bet Criteria in Football,Cricket and Tennis to calculate
          Bonus
        </p>
        <p>
          * All the bonuses on this website will now be divided into 10 equal
          coupons each. Eg: If the bonus received is Rs. 10000, it will be split
          into (10000/ 10) = 1000. So you will get 10 coupons with 1000 each.
          Every coupon is available for reedem after required True Rolling for
          coupon amount completed
        </p>
        <p>* Awaiting Bonus will be expire in 14 days</p>
        <p>* Bets on Following Casinos will be Calculated for Bonus.</p>
        <p> - 3 CARD JUDGEMENT ( ALL MARKET)</p>
        <p> - HI-LOW (ALL MARKET)</p>
        <p> - TEEN PATTI T20 (PLAYER A AND PAIR+ PLAYER A)</p>
        <p> - BACCARAT. ( PLAYER AND PLAYER PAIR)</p>
        <p> - HI-LOW (ALL MARKET)</p>
        <p> - ANDAR BAHAR. ( ONLY ANDAR )</p>
        <p>- 7 UP DOWN. ( ONLY UP, BLACK AND ODD)</p>
        <p>
          - Rolling for casino bets will be counted starting from 1st November
          2023.
        </p>
        <p>#Conditions</p>
        <p>
          {"=>"} A New user of the website will not Receive the First Deposit
          Bonus if the same Device ( Computer, laptop, mobile) is used to make
          multiple accounts.
        </p>
        <p>
          {"=>"} Bonus promotion cannot be combined with any other promotion of
          this website
        </p>
        <p>{"=>"} Void/Cancelled/Draw bets do not considered for bonus.</p>
        <p>
          {"=>"} These Terms and Conditions are subject to the General
          organisational Terms and Conditions.
        </p>
        <p>
          {"=>"} Management reserves the right to modify, alter, discontinue,
          cancel, refuse or void this Bonus promotion.
        </p>
      </div>
    </div>
  );
};

export default BonusRules;
