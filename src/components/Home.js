import React from 'react';
import Rules from './Rules';
import Navbar from './Navbar';
import Frontpage from './Frontpage';
import '../Css/Stylehome.css';
export default function Home() {
    return (
        <div className='home'>
       
<Navbar/>
<div>
<Frontpage/>

</div>
        </div>
    )
}
