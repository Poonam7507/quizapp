import React,{useEffect, useState} from 'react';

import '../Css/Stylequizbox.css';
import Navbar from './Navbar';
import {Data} from './Data';


export default function Quizbox() {
    const [score, setScore] = useState(false)
    const [showscore, setshowScore] = useState(0)
    const [time, setTime] = useState(50)
    const [Curques, setCurques] = useState(0)
    const [trueAns, setTrueans] = useState(false);
    const [falseAns, setFalseAns] = useState(false)
    const [clickable, setClickable] = useState(false)
   
   useEffect(()=>{
     const interval= setInterval(()=>{
              if(time){

                  const newtime=time-1;
                   setTime(newtime);
              }
              else{
                  
                  setScore(true);
              }
            
       },1000);
       return ()=> clearInterval(interval);
   },[time]);

   
    
    const handleAns=()=>{
       
        const nextques=Curques+1;
        if(nextques<Data.length){
            setCurques(nextques);
      setTrueans(false);
      setFalseAns(false);
      setClickable(false);



         
    
    
        }
        else{
            setScore(true);
        }
    }
    const submitAns=(iscorrect)=>{
        if(iscorrect===true){
            
             setshowScore(showscore+1);
             setTrueans(true);
           setClickable(true);

        }
        if(iscorrect===false){
            setFalseAns(true);
            
            const tym=time-10;
            setTime(tym);
           setClickable(true);


        }
      
    }
    
    
    return (
        <>
        <div>
<Navbar/>

  { score?(
           <div className='alertbox box'>
                <h1>All done!</h1>
            
           <h2>Your score is: {showscore} out of 5</h2>
          
       
            </div>

  ):

  
      
      (  
          
           <div className='box'>
           
        <div className='top'>

       
        <div className='question_no'>
           <p>

           {Curques+1}/{Data.length}
           </p> 
        </div>
        <div className='timer'>
           <p>{time}</p> 
        </div>
        </div>
        <div className='question'>

            <h2>{Data[Curques].questionText}</h2>
        </div>
        <div className='option'>
            
           <div className='opt'>
            {Data[Curques].options.map((props)=>
            <li>
                 <button className='optbtn'  disabled={clickable} onClick={()=>submitAns(props.iscorrect)}>
                {props.answer}
                 </button>
            </li>
            
            )}

           
           </div> 
     
     
          
           <div className='nextbox'>
               <button className='nextbtn' onClick={handleAns}><p>Next</p></button>
           </div>
         <div className='scorebox' style={{display:trueAns?"block":"none"}}>
             <p>Correct</p>
         </div>
         <div className='scorebox' style={{display:falseAns?"block":"none"}}>
             <p>Incorrect</p>
         </div>

        </div>
          
        </div>)
  }
        </div>
  </>
    )
}
