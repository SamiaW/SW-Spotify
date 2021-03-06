import React from 'react'
import './Login.css';
import { loginUrl } from './spotify';

export default function Login() {
    return (
        <div className='login'>
           {/*Spotify Logo */}
           <h4 className="signature">SW Spotify</h4>
           <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=" "  />
            
            {/*Login with Spotify button */}
            <a href={loginUrl}> Login with Spotify</a>
        </div>
    )
}
