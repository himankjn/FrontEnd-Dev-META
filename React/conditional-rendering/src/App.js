
import './App.css';
import {useState} from 'react';
import LogInOut from './LogInOut';


function App() {
  const [loggedin,setLoggedin]=useState(false);
  return (
    <div className="App">
      <button onClick={()=> {setLoggedin(true)}}>LogIn</button>
      <button onClick={()=> {setLoggedin(false)}}>Register</button>
      <LogInOut loggedin={loggedin} />
    </div>
  );
}

export default App;
