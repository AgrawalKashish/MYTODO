import React from 'react'
import {NavLink} from "react-router-dom"

const Menu = () => {
    return(
        <>
        <NavLink  activeclassname="active_class" to ='/home'>HOME</NavLink>
        <NavLink  activeclassname="active_class" to= '/weather'>WEATHER</NavLink>
        <NavLink  activeclassname="active_class" to='/'>TODO</NavLink>
         </>
    );
    };
   

 export default Menu;