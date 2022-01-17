import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Stylenav.css';


export default function Navbar() {
    return (
        <div className='nav'>

            <li>
                    
                    <h3> <Link to="/">
                <a href="Home.js">   Home </a></Link></h3>
                   </li>
                     <li>
                    <h3> <Link to="/rules">
                  <a href="Rules.js">  Rules </a></Link></h3>
                   </li>
                   {/* <li>
                    <h3> <Link to="/score">
                  <a href="Highscore.js">  Highscore </a></Link></h3>
                   </li> */}
     
        </div>
    )
}
