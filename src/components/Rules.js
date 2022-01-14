import React from 'react';
import Navbar from './Navbar';
import '../Css/Stylerule.css';


export default function Rules() {
    return (
        <div>
        <Navbar/>
             <h3 className='instruct'>Instructions</h3>
            <p className='rules'>
  <ul>
   User have to solve questions in limited time (50s).
  </ul>  
  <ul>
   Once clicked answer will be evaluated,multiple clicks are not allowed.
  </ul>  
  <ul>
Correct Answer will increase Score while incorrect answer will result in decreasing time by 10s.
  </ul>  
  <ul>
  User will know total score at the end of the quiz.
  </ul>  

            </p>
        </div>
    )
}
