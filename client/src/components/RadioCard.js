import {useState} from 'react'

function RadioCard({radio:{img, name, uri, channel_id, countryCode, genre}, radio, onRadioClick}) {
    const [like, setLike] = useState(false)
    // function handleClick(){
    //         onRadioClick(radio)
    // }
    const handleClickHeart = () => {
        setLike(!like)
        onRadioClick(radio)
    }


    
    
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
        <button onClick={() => handleClickHeart(radio)}>{like?'♥':'♡'}</button>
        </div>
    )
}

export default RadioCard
