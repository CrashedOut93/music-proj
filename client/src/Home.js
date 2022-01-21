import {useState, useEffect} from 'react'
import Player from './components/Player'
import RadioContainer from './components/RadioContainer';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import {useNavigate} from 'react-router'
import FavStation from './components/FavStation';


function Home({ setCurrentUser, currentUser }) {
    const navigate = useNavigate();
const [songs] = useState([
    {
    title: "Affairs",
    artist: "CrashedOut",
    img_src: "./images/CO1.PNG",
    src: "./music/Affairs.mp3"
    },
    {
    title: "Faded",
    artist: "CrashedOut",
    img_src: "./images/CO1.PNG",
    src: "./music/Faded.mp3"
    },
    {
    title: "Riot",
    artist: "Eddie P",
    img_src: "./images/CO1.PNG",
    src: "./music/Riot.mp3"
    },
    {
    title:  "Sink or Swim",
    artist: "Jemarcus Jay",
    img_src: "./images/CO1.PNG",
    src: "./music/sink-swim.mp3"
    },
    {
    title: "As If I Was The Plug",
    artist: "Jemarcus Jay",
    img_src: "./images/CO1.PNG",
    src: "./music/The-Plug.mp3"
    }
    
]);

const [currentSongIndex, setCurrentSongIndex] = useState(0);
const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);
const [radioList, setRadioList] = useState([])
const [favorites, setFavorites] = useState([])

const handleLogout = () => {
    setCurrentUser(null);
    fetch("/logout", { method: "DELETE" });
    navigate('/')
};

function handleAddRadio(radioToAdd){
    const radioInFavStation = favorites.find(
        (radioL) => radioL.id === radioToAdd.id
    );
    if (!radioInFavStation) {
        setFavorites([...favorites, radioToAdd])
    }
    fetch("/favoritestations", {method: "POST",
    headers: { 'Content-Type': 'application/json',
    },
    body: JSON.stringify(radioToAdd),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
})
    .catch((error) => {
    console.error('Error:', error);
});
}

function handleRemoveRadio(radioToRemove) {
    fetch("/favoritestations", {method: "DELETE",
    headers: { 'Content-Type': 'application/json',
    },
    body: JSON.stringify(radioToRemove),
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
})
    .catch((error) => {
    console.error('Error:', error);
});
    setFavorites((favorites) => 
    favorites.filter((radio) => radio.id !== radioToRemove.id)
    );
}

useEffect(() => {
    setNextSongIndex(() => {
    if (currentSongIndex + 1 > songs.length -1){
        return 0;
    } else{
        return currentSongIndex + 1;
    }
})
},[currentSongIndex]);

useEffect (() => {
    fetch("/radios")
    .then(resp => resp.json())
    .then(data => setRadioList(data))
},[])



return (
    <div className="Home">
    <RadioContainer radioList={radioList} radioToAdd={handleAddRadio}/> 
    <FavStation radioList={favorites} onRemoveRadio={handleRemoveRadio}/>
    <Player 
    currentSongIndex={currentSongIndex}
    setCurrentSongIndex={setCurrentSongIndex} 
    nextSongIndex={nextSongIndex}
    songs={songs}/>
    
    </div>
);
}
export default Home;
