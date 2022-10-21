import React from 'react';
import Match from './Match';
import PointTable from './PointTable';

const Group = (props) => {
  const { groupName, matches, initialPointMap } = props;

  const [matchWinners, setmatchWinners] = React.useState(() => {
    const tmatchWinners = {};
    matches.map((m) => {
      tmatchWinners[m.matchId] = '';
    });

    return tmatchWinners;
  });

  const [pointsMap, setPointsMap] = React.useState(() => {
    return initialPointMap;
  });

  console.log('groupName ' + groupName);
  console.log(matchWinners);
  console.log(pointsMap);

  const updatePointMap = (winner, matchId) => {
    console.log('updatePointMap >>' + winner);
    matchWinners[matchId] = winner;
    setmatchWinners(matchWinners);

    setPointsMap(
      pointsMap.map((p) => {
        const dataset = Object.values(matchWinners);
        var count = dataset.reduce(function (n, val) {
          return n + (val === p.name);
        }, 0);

        p.points = p.initalPoints + 2 * count;

        var drawcount = dataset.reduce(function (n, val) {
          if (val.match('#') && val.split('#').indexOf(p.name) > -1) {
            return n + 1;
          } else {
            return n;
          }
        }, 0);

        p.points = p.points + 1 * drawcount;

        return p;
      })
    );
  };

  return (
    <div>
      <h3>{groupName}</h3>
      <div style={{ display: 'flex', 'justify-content': 'space-evenly' }}>
        <div style={{ height: '500px', overflow: 'scroll' }}>
          {matches.map((m) => {
            return (
              <Match
                team1={m.team1}
                team2={m.team2}
                matchId={m.matchId}
                updatePointMap={updatePointMap}
                group={groupName}
              />
            );
          })}
        </div>
        <div>
          <PointTable pointsMap={pointsMap} />
        </div>
      </div>
    </div>
  );
};

export default Group;
