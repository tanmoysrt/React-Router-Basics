import React from 'react';
import {NavLink} from 'react-router-dom';


const NavBar = ()=>{
    return (
        <>
        <NavLink exact activeClassName="active_class" to="/">About US</NavLink><br/>
        <NavLink exact activeClassName="active_class" to="/contact" >Contact</NavLink><br/>
        <NavLink exact activeClassName="active_class" to="/search">Search</NavLink><br/><br/>
        </>
    )
}


export default NavBar;