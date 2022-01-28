import {useState} from 'react'


function RadioCard({radio:{img, name, uri, channel_id, countryCode, genre}, radio, onRadioClick, props}) {
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
        <div className="radioImage">
        <img src={img} alt="radio-station"/>
        </div>
        <div className="radioName">
        <p>{name}</p>
        <p>{genre}</p>
        </div>
        <audio
            src={uri}
            controls
        />
        
        <button color="black" fontSize="large" onClick={() => handleClickHeart(radio)}>{like?'♥':'♡'}</button>
        </div>
    )
}

export default RadioCard
