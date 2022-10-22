import React, { useState, useEffect } from 'react';
import './style.css';
import PointTable from './PointTable';
import Match from './Match';
import Group from './Group';

import ReactGA from 'react-ga4';

export default function App() {

const setGA = () => {
    ReactGA.initialize('G-485S81XQ4W');
    ReactGA.send({ hitType: 'pageview', page: '/' });
  };

  useEffect(() => {
    setGA();
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

    { matchId: 4, team1: 'BAN', team2: 'ZIM' },
    { matchId: 5, team1: 'NED', team2: 'PAK' },
    { matchId: 6, team1: 'IND', team2: 'SA' },
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

  const groupBInitialPointMap = [
    {
      id: 1,
      name: 'IND',
      points: 0,
      initalPoints: 0,
      nrr: 0,
    },
    {
      id: 2,
      name: 'PAK',
      points: 0,
      initalPoints: 0,
      nrr: 0,
    },
    {
      id: 3,
      name: 'SA',
      points: 0,
      initalPoints: 0,
      nrr: 0,
    },
    {
      id: 4,
      name: 'BAN',
      points: 0,
      initalPoints: 0,
      nrr: 0,
    },
    {
      id: 5,
      name: 'ZIM',
      points: 0,
      initalPoints: 0,
      nrr: 0,
    },
    {
      id: 6,
      name: 'NED',
      points: 0,
      initalPoints: 0,
      nrr: 0,
    },
  ];

  return (
    <div className="header" style={{ display: 'flex' }}>
      <div style={{ width: '100%' }}>
        <div>
          <h1 style={{ 'text-align': 'center' }}>Hello Cricfans!</h1>
          <p style={{ 'text-align': 'center' }}>
            Start predecting to see some magic happen :)
          </p>
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
          <div style={{ width: '45%' }}>
            <Group
              groupName="Group A"
              matches={groupAmatches}
              initialPointMap={groupAInitialPointMap}
            />
          </div>
          <div style={{ width: '45%' }}>
            <Group
              groupName="Group B"
              matches={groupBmatches}
              initialPointMap={groupBInitialPointMap}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
