import React from 'react'
import RadioCard from "./RadioCard"

function FavStation({ radioList, onRemoveRadio }) {
    const allFavstations = radioList.map((radio) => (
        <RadioCard key={radio.id} radio={radio} onRadioClick={onRemoveRadio} />
    ))
    return (
        <div>
            <h2>Favorite Stations</h2>
            {allFavstations}
        </div>
    )
}

export default FavStation
