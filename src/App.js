import React, { useState, useEffect } from 'react';
import './style.css';
import PointTable from './PointTable';
import Match from './Match';
import Group from './Group';
import ReactGA from 'react-ga4';


export default function App() {
  
  let groupARemaingmatches = [
    
    
    { matchId: 13, team1: 'NZ', team2: 'IRE','ground':'Adilade',matchDayWeather:'',matchDay:'2022-11-04',wDescription:''  },
    { matchId: 14, team1: 'AFG', team2: 'AUS','ground':'Adilade',matchDayWeather:'',matchDay:'2022-11-04',wDescription:''  },
    { matchId: 15, team1: 'ENG', team2: 'SL','ground':'Adilade',matchDayWeather:'',matchDay:'2022-11-05',wDescription:''  },
  ]
  let  groupBRemainningmatches = [
    
    
    
    
    { matchId: 10, team1: 'ZIM', team2: 'NED' },
    { matchId: 11, team1: 'IND', team2: 'BAN' },
    { matchId: 12, team1: 'PAK', team2: 'SA' },
    
    { matchId: 13, team1: 'SA', team2: 'NED' },
    { matchId: 14, team1: 'PAK', team2: 'BAN' },
    { matchId: 15, team1: 'IND', team2: 'ZIM' }
  ];
  
  const [isLoading,setIsLoading] = React.useState(true)
  const [remainingMatches,setRemainingMatches] = React.useState([
    groupARemaingmatches,groupBRemainningmatches
  ])
  
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
      console.log(weatherData);
      groupARemaingmatches = groupARemaingmatches.map(m=>{
        console.log('weatherData >>',m.matchDay,m.ground);
        console.log(weatherData[m.matchDay][m.ground].conditions);
        const weather = weatherData[m.matchDay] && weatherData[m.matchDay][m.ground] ? weatherData[m.matchDay][m.ground].conditions:null;
    
        if(weather){
      
          m.matchDayWeather = (weather.match('Sunny') || weather.match('Clear') || weather.match('Overcast'))?1:2
          m.wDescription = weather
        }
        return m;
      })
      console.log(groupARemaingmatches);
      setRemainingMatches([
        groupARemaingmatches,groupBRemainningmatches
      ])
      setIsLoading(false)
    })
    
    
    
  });

  
  const groupAmatches = [
    { matchId: 1, team1: 'AUS', team2: 'NZ' },
    { matchId: 2, team1: 'ENG', team2: 'AFG' },
    { matchId: 3, team1: 'SL', team2: 'IRE' },

    { matchId: 4, team1: 'AUS', team2: 'SL' },
    { matchId: 5, team1: 'IRE', team2: 'ENG' },
    { matchId: 6, team1: 'NZ', team2: 'AFG' },

    { matchId: 7, team1: 'AFG', team2: 'IRE' },
    { matchId: 8, team1: 'AUS', team2: 'ENG' },
    { matchId: 9, team1: 'NZ', team2: 'SL' },

    { matchId: 10, team1: 'AUS', team2: 'IRE' },
    { matchId: 11, team1: 'AFG', team2: 'SL' },
    { matchId: 12, team1: 'ENG', team2: 'NZ' },

    { matchId: 13, team1: 'NZ', team2: 'IRE' },
    { matchId: 14, team1: 'AFG', team2: 'AUS' },
    { matchId: 15, team1: 'ENG', team2: 'SL' },
  ];
  
  

  const groupBmatches = [
    { matchId: 1, team1: 'IND', team2: 'PAK' },
    { matchId: 2, team1: 'BAN', team2: 'NED' },
    { matchId: 3, team1: 'SA', team2: 'ZIM' },

    { matchId: 4, team1: 'SA', team2: 'BAN' },
    { matchId: 5, team1: 'NED', team2: 'IND' },
    { matchId: 6, team1: 'PAK', team2: 'ZIM' },

    { matchId: 7, team1: 'BAN', team2: 'ZIM' },
    { matchId: 8, team1: 'NED', team2: 'PAK' },
    { matchId: 9, team1: 'IND', team2: 'SA' },
  
    { matchId: 10, team1: 'ZIM', team2: 'NED' },
    { matchId: 11, team1: 'IND', team2: 'BAN' },
    { matchId: 12, team1: 'PAK', team2: 'SA' },
  
    { matchId: 13, team1: 'SA', team2: 'NED' },
    { matchId: 14, team1: 'PAK', team2: 'BAN' },
    { matchId: 15, team1: 'IND', team2: 'ZIM' }
  ];
  

  const groupAInitialPointMap = [
    {
      id: 1,
      name: 'AUS',
      points: 0,
      initalPoints: 0,
      nrr: 0,
    },
    {
      id: 2,
      name: 'ENG',
      points: 0,
      initalPoints: 0,
      nrr: 0,
    },
    {
      id: 3,
      name: 'NZ',
      points: 0,
      initalPoints: 0,
      nrr: 0,
    },
    {
      id: 4,
      name: 'AFG',
      points: 0,
      initalPoints: 0,
      nrr: 0,
    },
    {
      id: 5,
      name: 'SL',
      points: 0,
      initalPoints: 0,
      nrr: 0,
    },
    {
      id: 6,
      name: 'IRE',
      points: 0,
      initalPoints: 0,
      nrr: 0,
    },
  ];
  const groupACurrentPointMap = [
    {
      id: 1,
      name: 'AUS',
      points: 5,
      initalPoints: 5,
      nrr: -0.304,
    },
    {
      id: 2,
      name: 'ENG',
      points: 5,
      initalPoints: 5,
      nrr: 0.547,
    },
    {
      id: 3,
      name: 'NZ',
      points: 5,
      initalPoints: 5,
      nrr: 2.233,
    },
    {
      id: 4,
      name: 'AFG',
      points: 2,
      initalPoints: 2,
      nrr: -0.718,
    },
    {
      id: 5,
      name: 'SL',
      points: 4,
      initalPoints: 4,
      nrr: -0.457,
    },
    {
      id: 6,
      name: 'IRE',
      points: 3,
      initalPoints: 3,
      nrr: -1.544,
    },
  ];

  const groupBInitialPointMap = [
    {
      id: 1,
      name: 'IND',
      points: 4,
      initalPoints: 4,
      nrr: 0.844
    },
    {
      id: 2,
      name: 'PAK',
      points: 2,
      initalPoints: 2,
      nrr: 0.765,
    },
    {
      id: 3,
      name: 'SA',
      points: 5,
      initalPoints: 5,
      nrr: 2.772,
    },
    {
      id: 4,
      name: 'BAN',
      points: 4,
      initalPoints: 4,
      nrr: -1.533,
    },
    {
      id: 5,
      name: 'ZIM',
      points: 3,
      initalPoints: 3,
      nrr: -0.050,
    },
    {
      id: 6,
      name: 'NED',
      points: 0,
      initalPoints: 0,
      nrr: -1.948
    },
  ];

  return (
    <div className="header" style={{ display: 'flex','flex-direction':'column' }}>
      <div style={{ width: '100%' }}>
        <div>
          <h1 style={{ 'text-align': 'center' }}>Hello Cricfans!</h1>
          
          <p style={{ 'text-align': 'center' }}>
            Start predicting to see some magic happen 🏏 😆 ⛈️
          </p>

          <div class="fb-share-button" data-href="https://t20wc2022prediction.vercel.app/" data-layout="button_count" data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ft20wc2022prediction.vercel.app%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div>
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
          <div className="groupDiv"  >
            <Group
              groupName="Group A"
              matches={remainingMatches[0]}
              initialPointMap={groupACurrentPointMap}
            />
          </div>
          <div className="groupDiv">
            <Group
              groupName="Group B"
              matches={remainingMatches[1]}
              initialPointMap={groupBInitialPointMap}
            />
          </div>
        </div>
      </div>
  
      <div className="fb-comments" data-href="https://t20wc2022prediction.vercel.app/" data-width=""
           data-numposts="50"></div>
    </div>
  );
}
