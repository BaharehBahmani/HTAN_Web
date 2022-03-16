
import './App.css';
import React from 'react';
import { BrowserRouter as Router,Switch, Route, NavLink} from 'react-router-dom';
import Home from './Pages/Home'
import Members from './Pages/Members'
import A001 from './Pages/A001'
import A002 from './Pages/A002'
import A040 from './Pages/A040'
import A014 from './Pages/A014'
import A015 from './Pages/A015'
import Papers from './Pages/Papers'
import Contact from './Pages/Contact'
import Graph from './Pages/Graph'
import Chart from './component/Chart'





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
    <Router>
    <div className="App">
      <NavBar />
       <Switch>
       <Route path="/contact" component = {Contact} /> 
       <Route path="/paper" component = {Papers} /> 
       <Route path="/member" component = {Members} /> 
       <Route path="/chart" component ={Chart} />
       <Route path="/graph" component={Graph}/>
       <Route path="/a001" component = {A001} /> 
       <Route path="/a002" component = {A002} /> 
       <Route path="/a015" component = {A015} /> 
       <Route path="/a014" component = {A014} /> 
       <Route path="/a040" component = {A040} /> 
       <Route path="/" exact component = {Home} /> 
       </Switch>
       {/* <Chart legendPosition="bottom" /> */}
    </div>
    </Router>
  );
}

export default App;
