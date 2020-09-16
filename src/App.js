import React, { useState,useEffect } from 'react';
import Login from './Login.js';
import './App.css';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [ appState , dispatch ] = useDataLayerValue();

  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    // window.location.hash = "";
    const _token = hash.access_token;
    //console.log(hash);

    if(_token){
      //setToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        ttoken: _token,
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch( {
          type: 'SET_USER',
          user: user,
        })
        return user;
      })
      .then(user => console.log(user));


      // spotify.getUserPlaylists()
      fetch('https://api.spotify.com/v1/me/playlists', {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + _token,
        }
      })
      .then (response => {
        if (response.status == "200"){
          return response.json();
        }
      })
      .then( (playlists) => {
        dispatch( {
          type: 'SET_PLAYLISTS',
          playlist: playlists,
        })
        return playlists;
      })
      .then (playlist => console.log("hi", playlist))
      .catch(err => {
        return "Could not retrieve playlist"
      });



      ////////////////////////// TRACKS
      fetch( 'https://api.spotify.com/v1/playlists/50KYBMPimWh6X8gxDBAwIJ',{  
          headers: {
            "Authorization": "Bearer " + _token,
          }
      })
      .then(response => {
        if (response.status == 200){
          return response.json();
        }
      })
      .then(tracks => {
        dispatch( {
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: tracks,
        })
        console.log("&$R$% ", tracks);
      })

    }
 }, []);
  
  return (
    <div className="app"> 
    { appState.tokennew ? (
          <Player sspotify={spotify} />
        ) : (
          <Login />
          
        )        
      }
    </div>
  );
}

export default App;
