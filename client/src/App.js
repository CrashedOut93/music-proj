import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'
import Home from './Home'
import LoggedIn from './components/LoggedIn'
import VideoPlayer from './components/VideoPlayer';
import ErrorPage from './components/ErrorPage';




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


  return (
    <div className="App">
    <Router>
    
    {currentUser ? (
      
      <div>
      <nav>
      <Link to='/'>Home</Link>
      <Link to='/VideoPlayer'>VideoPlayer</Link>
    </nav>
      <LoggedIn
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
      <Home
      setCurrentUser={setCurrentUser}
      currentUser={currentUser}
      />
      <Routes>
      <Route path='/VideoPlayer' element={<VideoPlayer />} />
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
