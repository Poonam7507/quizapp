import React from 'react';
import '../Css/Stylequizbox.css';
import Navbar from './Navbar';

export default function Quizbox() {
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

            <h2>what is your name?</h2>
        </div>
        <div className='option'>
        <div className='upper'>
           
           <div className='opt'>
            <li>option 1</li>

           </div>
           <div className='opt'>

            <li>option 2</li>

           </div>
        </div>

        <div className='bottom'>
        <div className='opt'>

             <li>option 3</li>
             </div>
           <div className='opt'>

            <li>option 4</li>
            </div>
</div>

        </div>
          
        </div>
        </div>
    )
}
