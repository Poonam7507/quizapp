import React,{useState} from 'react';

import '../Css/Stylequizbox.css';
import Navbar from './Navbar';
import {Data} from './Data';

export default function Quizbox() {
    const [Curques, setCurques] = useState(0)
    const handleAns=()=>{
       const nextques=Curques+1;
        setCurques(nextques);
    }
    return (
        <div>
<Navbar/>
        <div className='box'>
        <div className='top'>

       
        <div className='question_no'>
           <p>

           1/10
           </p> 
        </div>
        <div className='timer'>
           <p>50</p> 
        </div>
        </div>
        <div className='question'>

            <h2>{Data[Curques].questionText}</h2>
        </div>
        <div className='option'>
            
           <div className='opt'>
            {Data[Curques].options.map((props)=>
            <li>
                 <button onClick={handleAns}>{props}</button>
            </li>
            )}

           </div>
         

        </div>
          
        </div>
        </div>
    )
}
