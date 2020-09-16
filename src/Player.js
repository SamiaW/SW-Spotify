import React from 'react';
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ sspotify }) {
    // Palyer have many components: Sidebar , header 
    return (
        <div className="player">
            <div className="player__body">
                {/* Sidebar  */}
                <Sidebar />
                {/* Body  */}
                <Body spotify = {sspotify} />
            </div>

        {/* Footer*/}
        <Footer />
        </div>
    );
}

export default  Player;
