import {useState, useEffect} from 'react'
import Player from './components/Player'
import RadioContainer from './components/RadioContainer';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import {useNavigate} from 'react-router'


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

const handleLogout = () => {
    setCurrentUser(null);
    fetch("/logout", { method: "DELETE" });
    navigate('/')
};

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
    <RadioContainer radioList={radioList}/> 
    <Player 
    currentSongIndex={currentSongIndex}
    setCurrentSongIndex={setCurrentSongIndex} 
    nextSongIndex={nextSongIndex}
    songs={songs}/>
    
    </div>
);
}
export default Home;
