import React,{useState} from 'react'
import Navbar from './Navbar'


export default function Highscore() {
    // const [name, setName] = useState(()=>{
    //     const saved =JSON.parse(localStorage.getItem('highscore'));
    //     return saved;
    // } );
//    const score= JSON.parse(localStorage.getItem('highscore'))
    return (
        <div>
        <Navbar/>
            highscore

            {/* {
              name.map((names)=><div>
              {names.text}
              <br/>
              score:{names.texts}</div>)
          } */}
           
        </div>
    )
}
