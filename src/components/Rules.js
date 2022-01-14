import React from 'react';
import Navbar from './Navbar';

export default function Rules() {
    return (
        <div>
        <Navbar/>
        
            <p>
            Name: <p>{localStorage.getItem('Name')}</p>
            </p>
        </div>
    )
}
