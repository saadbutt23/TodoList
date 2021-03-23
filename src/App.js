import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import {BrowserRouter as Router, Route } from "react-router-dom"; 
import Home from "./components/Home";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";

function App() {
  return (
    
    
     <Router>
       <Navbar/>
       <Route path = "/" exact >
         <Home/>
       </Route>
       <Route path = "/notes">
         <Notes/>
       </Route>
       <Route path = "/create">
         <CreateNote/>
       </Route>

     </Router>
     
    
  );
}

export default App;
