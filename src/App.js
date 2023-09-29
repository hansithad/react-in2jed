import React, { useState, useEffect } from 'react';
import './style.css';
import PointTable from './PointTable';
import Match from './Match';
import Group from './Group';
import ReactGA from 'react-ga4';
import {seriesData}  from './data/2023-wc'


export default function App() {
  
  let groupARemaingmatches = {}//seriesData.groupARemaingmatches
  let groupBRemainningmatches = {}//seriesData.groupBRemainningmatches
  
  const [isLoading,setIsLoading] = React.useState(true)
  const [remainingMatches,setRemainingMatches] = React.useState(seriesData.groups.map(g=>g.PendingMatches))
  
  let weatherData = {
    '2022-10-29':{
      'Sydney':{conditions:'Partially cloudy'}
    },
    '2022-10-31':{
      'Gabba':{conditions:'Sunny'}
    }
  }
  weatherData ={}
  
  
  
  
  const setGA = () => {
      ReactGA.initialize('G-485S81XQ4W');
      ReactGA.send({ hitType: 'pageview', page: '/' });
    };

  useEffect(() => {
    setGA();
    const makeAPICall = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbzVjLfwzJpgT43ufFPN_yZhTMI3SJy-soVP7uk6ld6xrDwQYmxlEppQzBflMpLagYcxww/exec', {mode:'cors'});
        const data = await response.json();
        weatherData = data
        console.log(weatherData);
      }
      catch (e) {
        console.log(e)
      }
    }
    makeAPICall().then(r=>{
      console.log('end of makeAPICall');
      // groupARemaingmatches = groupARemaingmatches.map(m=>{
      //   console.log('weatherData >>',m.matchDay,m.ground);
      //   console.log(weatherData[m.matchDay][m.ground].conditions);
      //   const weather = weatherData[m.matchDay] && weatherData[m.matchDay][m.ground] ? weatherData[m.matchDay][m.ground].conditions:null;
      //
      //   if(weather){
      //
      //     m.matchDayWeather = (weather.match('Sunny') || weather.match('Clear') || weather.match('Overcast'))?1:2
      //     m.wDescription = weather
      //   }
      //   return m;
      // })
      // setRemainingMatches([
      //   groupARemaingmatches,groupBRemainningmatches
      // ])
      setIsLoading(false)
    })
    
    
    
  });


  return (
    <div className="header" style={{ display: 'flex','flex-direction':'column' }}>
      <div style={{ width: '100%' }}>
        <div>
          <h1 style={{ 'text-align': 'center' }}>Hello Cricfans!</h1>
          
          <p style={{ 'text-align': 'center' }}>
            Start predicting to see some magic happen 🏏 😆 ⛈️
          </p>

          <div class="fb-share-button" data-href="https://ipl2023prediction.vercel.app/" data-layout="button_count" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ft20wc2022prediction.vercel.app%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
        </div>

        <hr></hr>
  
        
        <div
          className="body"
          style={{
            display: 'flex',
            width: '100%',
            'justify-content': 'space-around',
          }}
        >
          {seriesData.groups.map((g,index)=>{
            return (<div className="groupDiv"  >
              <Group
                  groupName={g.groupDisplayName}
                  matches={remainingMatches[index]}
                  initialPointMap={g.CurrentPointMap}
              />
            </div>)
          })}
        </div>
      </div>
  
      <div className="fb-comments" data-href="https://ipl2023prediction.vercel.app/" data-width=""
           data-numposts="50"></div>
    </div>
  );
}
