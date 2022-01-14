import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Stylefrontpage.css';
import img2 from '../image/img2.jpg'


export default function Frontpage() {
    return (
        <div className='outer'>
           
            <div className='image'>
            <img src={img2} alt=''/>
            </div>
            <div>
            <Link to="/quizbox">
            <button className='startbtn'>
                <a href='./Quizbox'><h3>Let's Start</h3></a></button>
            </Link>
            </div>
        </div>
    )
}
