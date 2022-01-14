import {useState} from 'react'

function RadioCard({radioObj:{img, name, uri, channel_id, countryCode, genre}}) {
    const [like, setLike] = useState(false)
        const handleClick = () => {
            setLike(!like)
        }
        
    // const buildRadio = () => {        
    //     setChosenRadio(<Radio
    //     img = {img}
    //     name = {name}
    //     uri = {uri}
    //     channel_id = {channel_id}
    //     countryCode = {countryCode}
    //     genre = {genre}
    // />)
    // }

    return (
        <div className="RadioCard">
        <img src={img} alt="radio-station"/>
        <p>{name}</p>
        <audio
            src={uri}
            controls
        />
        <p>{channel_id}</p>
        <p>{countryCode}</p>
        <p>{genre}</p>
        <p onClick={handleClick}>{like?'♥':'♡'}</p>

            
        </div>
    )
}

export default RadioCard
