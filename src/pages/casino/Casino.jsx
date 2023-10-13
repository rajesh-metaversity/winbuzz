
import { Link } from "react-router-dom"
import Title from "../../component/inPlay/Title"
import TopBanner from "../../component/topBanner/TopBanner"
import './style.scss'


const Casino = () => {
    const listArray = [
        {
            name: "",
            url: ""
        },
        {
            name: "",
            url: ""
        },
        {
            name: "",
            url: ""
        }
        ,
        {
            name: "",
            url: ""
        },
        {
            name: "",
            url: ""
        },
        {
            name: "",
            url: ""
        },
        {
            name: "",
            url: ""
        },
        {
            name: "",
            url: ""
        },

        {
            name: "",
            url: ""
        },
        {
            name: "",
            url: ""
        },
        {
            name: "",
            url: ""
        },

    ]

    return (
        <div>
            <TopBanner />
            <div className="casino-page-container">
                <Title name={"Cricket"} />
                {/* <div className="int_casoini_list_all">
                    <button className="all_btn">All</button>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div> */}
            </div>
        </div>

    )
}

export default Casino
