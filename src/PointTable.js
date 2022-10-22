import React from 'react';
const PointTable = (props) => {
  const { pointsMap, ...rest } = props;
  const sortedPointMap = pointsMap.sort((a, b) => {
    if (a.points === b.points){
      return a.nrr > b.nrr ? -1 : 1
    } else {
      return a.points > b.points ? -1 : 1
    }
    
  })
 
  return (
    <div>
      <h1 style={{'text-align': 'center'}}>PointTable</h1>

      <table>
        <thead>
        <tr><th>Team</th>
          <th>Points</th>
          <th>NRR</th></tr>
        </thead>
        <tbody>
          {sortedPointMap.map((t) => {
            return (
              <tr>
                <td> {t.name}</td>
                <td> {t.points}</td>
                <td> {t.nrr>0?'+':''}{t.nrr.toFixed(3)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default PointTable;
