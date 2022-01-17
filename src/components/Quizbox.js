import React,{useEffect, useState} from 'react';
import  { useSound } from 'use-sound';
import nextq from './assets/KBC.mp3'
import correct from './assets/Finger Snapping.mp3'
import wrong from './assets/wrongans.mp3'



import '../Css/Stylequizbox.css';
import Navbar from './Navbar';
import {Data} from './Data';


export default function Quizbox() {
    const [score, setScore] = useState(false)
    const [showhighscore, setShowhighscore] = useState(false)
    const [showscore, setshowScore] = useState(0)
    const [time, setTime] = useState(50)
    const [Curques, setCurques] = useState(0)
    const [trueAns, setTrueans] = useState(false);
    const [falseAns, setFalseAns] = useState(false)
    const [clickable, setClickable] = useState(false)
    const [nextsong]=  useSound(nextq);
    const [correctsong]=  useSound(correct);
    const [wrongsong]=  useSound(wrong);
    const [name, setName] = useState(()=>{
        const saved =JSON.parse(localStorage.getItem('highscore'));
        return saved;
    } );
    
   useEffect(()=>{
      localStorage.setItem('highscore',JSON.stringify(name))

     const interval= setInterval(()=>{
              if(time>0){
          
                  const newtime=time-1;
                   setTime(newtime);
              }
              else{
                  
                  setScore(true);
              }
            
       },1000);
       return ()=> clearInterval(interval);
   },[time,name]);

   const addName=(e)=>{
    e.preventDefault();
    const newName={
        text:e.target.names.value,
        texts:showscore,
    };

    setName([...name,newName]);
    e.target.names.value=" ";
    // const store=JSON.stringify(newName);
        //  localStorage.setItem('highscore',JSON.stringify(name))
}
    
    const handleAns=()=>{

        const nextques=Curques+1;
        if(nextques<Data.length){
           
            nextsong();
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
            correctsong();
             setshowScore(showscore+1);
             setTrueans(true);
           setClickable(true);

        }
        if(iscorrect===false){
            wrongsong();
            setFalseAns(true);
            if(time>10){

                const tym=time-10;
                setTime(tym);
            }
            else{
                  
                setScore(true);
            }
           setClickable(true);
          

        }
      
    }
    // const exitbtn=()=>{
    //      const store=JSON.stringify({name});
    //      localStorage.setItem('highscore',store)
    // }

    return (
        <>
        <div>
<Navbar/>

  { score?(
           <div className='alertbox box'>
                <h1>All done!</h1>
            
           <h2>Your score is: {showscore} out of 5</h2>
          <form onSubmit={addName}>
              <input type="text" name="names" autoComplete='off'/>
              <input type="submit"/>
          </form>
          <button style={{color:"white",backgroundColor:"blue"}} onClick={(e)=>{
              setShowhighscore(true);
          }}>Highscores</button>
          <br/>
          <button onClick={(e)=>{
              setShowhighscore(false);
          }}>Close</button>
          
        { showhighscore ? (
            
           name.sort((a,b)=>a.texts>b.texts?-1:1).map((names)=><div style={{textAlign:"center", fontSize:"1.6vw",padding:"1%", color:"white",backgroundColor:"black",borderRadius:"12px"}}>
             Name:{names.text}
              <br/>
              Score:{names.texts}
              </div>)
             
           
         

           

              
          ):null}
        
   
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
     
           <div  style={{display:trueAns?"block":"none"}}>
             <p className='scorebox1'>Correct</p>
         </div>
         <div  style={{display:falseAns?"block":"none"}}>
             <p className='scorebox2'>Incorrect</p>
         </div>

          
           <div className='nextbox'>
               <button className='nextbtn' onClick={handleAns}><p>Next</p></button>
           </div>
       
        </div>
          
        </div>)
  }
        </div>
  </>
    )
}
