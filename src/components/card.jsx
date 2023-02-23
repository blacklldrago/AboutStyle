import css from "./cardStyle.module.css"
import React from "react"

function Card({imgUrl, text}){
    return(
        <div className={css["card"]}>
            <img src={imgUrl} alt="photo" />
            <h2>{text}</h2>
        </div>
    )
}
function Card1({imgUrl, text1, text2, text3}){
    return(
        <div className={css["card2"]}>
            <img src={imgUrl} alt="" />
            <p className={css["about"]}>{text1}</p>
            <p className={css["about1"]} >{text2}</p>
            <p className={css["about2"]}>{text3}</p>
        </div>
    )
}

export {Card, Card1}