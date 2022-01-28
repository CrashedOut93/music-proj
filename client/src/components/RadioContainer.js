import RadioCard from "./RadioCard"
import React from "react"
// import {useState, useEffect}  from "react"
// import FavStation from "./FavStation"

function RadioContainer({radioList, radioToAdd}) {

    const allRadioList = radioList.map((radio) => (
    <RadioCard key={radio.id} radio={radio} onRadioClick={radioToAdd} />
    ))
    return (
        <div className="allRadios" font-weight='900'>
        <div className="radioName">
        <h1>Radio Stations</h1>
        </div>
        {allRadioList}
        {/*radioList.map(radio => <RadioCard radioObj={radio} key={radio.name}/>)*/} 
        </div>
    )
}

export default RadioContainer
