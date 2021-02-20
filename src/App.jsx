import logo from './logo.svg';
import './App.css';
import {Route,Switch,Redirect } from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Error from './Error';
import NavBar from './NavBar';
import User from './User';
import Search from './Search';


const App = ()=>{
  return(
    <>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={()=> <About name="Tanmoy"/>} />
      <Route path="/contact" component={Contact} />
      <Route path="/user/:fname/:lname" component={User} />
      <Route path="/search" component={Search} />
      {/* <Route component={Error}/> */}
      <Redirect to="/"/> 
    </Switch>

    </>
  )
}

export default App;
