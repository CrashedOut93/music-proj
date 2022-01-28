import React, { useState, useEffect } from 'react'
import RadioCard from "./RadioCard"

function FavStation({ radioList, onRemoveRadio }) {
    const [fav, setFav] = useState([])
    const allFavstations = fav.map((radio) => (
        <RadioCard key={radio.radio.id} radio={radio.radio} onRadioClick={onRemoveRadio} />
    ))
useEffect(() => {
    fetch("/favoritestations").then((resp) => {
        if (resp.ok) {
            resp.json().then((fav) => {
            setFav(fav);
            console.log(fav);
            });
        } else {
            resp.json().then((errors) => {
            console.error(errors);
            });
        }

    })    
},[]);
    return (
        <div className="FavSta">
        <div  className="favName">
            <h1>Favorite Stations</h1>
            {allFavstations}
        </div>
        </div>
    )
}

export default FavStation
