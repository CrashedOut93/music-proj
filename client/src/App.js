import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes } from "react-router-dom";
// import LoggedIn from './LoggedIn'
import LoggedOut from './LoggedOut'
import Home from './Home'
import LoggedIn from './components/LoggedIn'



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
      <LoggedIn
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />
      <Home
      setCurrentUser={setCurrentUser}
      currentUser={currentUser}
      />
      </div>
    ) : (
      <LoggedOut setCurrentUser={setCurrentUser}/>
    )}
    </Router>
    </div>
  );
}

export default App;
