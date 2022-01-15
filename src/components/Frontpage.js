import React ,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../Css/Stylefrontpage.css';
import img2 from '../image/img2.jpg'
import useSound from 'use-sound';
import song1 from './assets/Kbc Theme.mp3';





export default function Frontpage() {
      const [start]=useSound(song1);


      useEffect(()=>{
    
        
            start();
      
      
      },[start]);

     
    return (
        <div className='outer'>
           
            <div className='image'>
            <img src={img2} alt=''/>
            </div>
            <div>
            <Link to="/quizbox">
            <button className='startbtn'  >
                <a href='./Quizbox'><h3>Let's Start</h3></a></button>
            </Link>
            </div>
        </div>
    )
}
