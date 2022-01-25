import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoggedOut from './LoggedOut'
import Home from './Home'
import LoggedIn from './components/LoggedIn'
import VideoPlayer from './components/VideoPlayer';
import ErrorPage from './components/ErrorPage';
import NavBar from './components/NavBar';




function App () {
  const [currentUser, setCurrentUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  
  useEffect (() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAuthenticated(true);
        });
      } else {
        setAuthenticated(true);
      }
    });
  }, []);

  if (!authenticated) {
    return <div></div>;
  }

  const handleLogout = () => {
    setCurrentUser(null);
    fetch("/logout", { method: "DELETE" });
    };


  return (

    <div className="App">
    <Router>
    
    {currentUser ? (
      
      <div>
    
      <Link to='/'>Home</Link>
      <Link to='/videoplayer'>Artist To Watch</Link>
      <button onClick={handleLogout}>Logout</button>
      
      <Routes>
      <Route path='/videoplayer' element={<VideoPlayer />} />
      <Route path='/' element={<Home setCurrentUser={setCurrentUser}
      currentUser={currentUser} />} />
      <Route path='*' element={<ErrorPage />} />
      </Routes>
      </div>

    ) : (
      <LoggedOut setCurrentUser={setCurrentUser}/>
    )}
    </Router>
    </div>
  );
}

export default App;
