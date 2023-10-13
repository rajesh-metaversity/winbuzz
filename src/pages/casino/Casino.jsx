
import { Link } from "react-router-dom"
import Title from "../../component/inPlay/Title"
import TopBanner from "../../component/topBanner/TopBanner"
import './style.scss'
import { useState } from "react"
import CasinoList from "./CasinoList"
import CasinoCard from "../../component/casinoCard/CasinoCard"


const Casino = () => {
 
const list = ["All","Evolution Gaming","Ezuig", "VivoGaming", "Bombay Live", "Sprive", "Sprive", "BetGames.TV", "Gemzix", "Betsof", "Caleta Gaming", "Golden Rock Studios", "Green Jade", "Hacksaw Gaming", "Kalamba Games", "TurboGames" ]
const item = ["Roulette","Sicbo","Dragon Tiger", "Baccarat", "Blackjack", "Others", "Poker", "Monopoly", "Gemzix", "Deal Or No Deal", "Crash", "Andarbahar", "Teenpati",  ]
   
return (
        <div>
            <TopBanner />
            <div className="casino-page-container">
                <Title name={"Cricket"} />
                <div className="casino-center-col">

               <CasinoList list={list}/>
               <CasinoList list={item}/>
              
               <CasinoCard/>
     
                </div>

            </div>
        </div>

    )
}

export default Casino
