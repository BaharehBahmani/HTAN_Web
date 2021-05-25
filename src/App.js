import logo from './logo.svg';
import './App.css';
import {Switch, Route, NavLink} from 'react-router-dom';
import Home from './Pages/Home'
import Members from './Pages/Members'
import Papers from './Pages/Papers'
import Contact from './Pages/Contact'
import A001 from './Pages/A001'




const NavBar = () => {
  return(
    <div style = {{margin:"20px",height:"70px",float:"left"}} >
       <NavLink to="/" style = {{marginRight:10,color:"red",fontSize:"40px",textDecorationLine:"none"}}> HTAN </NavLink>
       <NavLink to="/" style = {{marginRight:10,color:"black",textDecorationLine:"none"}} exact activeStyle={{fontWeight:"bold",color:"red"}}> Home </NavLink>
       <NavLink to="/member" style = {{marginRight:10,color:"black",textDecorationLine:"none"}} activeStyle={{fontWeight:"bold",color:"red"}}> Members </NavLink>
       <NavLink to="/paper" style = {{marginRight:10,color:"black",textDecorationLine:"none"}} activeStyle={{fontWeight:"bold",color:"red"}}> Papers </NavLink>
       <NavLink to="/contact" style = {{marginRight:10,color:"black",textDecorationLine:"none"}} activeStyle={{fontWeight:"bold",color:"red"}}> Contact  </NavLink>
  
      
      
    </div>
   
  )
}


function App() {
  return (
    <div className="App">
      <NavBar />
       <Switch>
       <Route path="/contact" component = {Contact} /> 
       <Route path="/paper" component = {Papers} /> 
       <Route path="/member" component = {Members} /> 
       <Route path="/a001" component = {A001} /> 
       <Route path="/" component = {Home} /> 
       </Switch>
      
    </div>
  );
}

export default App;
