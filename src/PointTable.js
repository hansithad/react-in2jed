import React from 'react';
const PointTable = (props) => {
  const { pointsMap, ...rest } = props;
  const sortedPointMap = pointsMap.sort((a, b) => {
    return a.points < b.points;
  });
  return (
    <div>
      <h1>PointTable</h1>

      <table>
        <thead>
          <th>Team</th>
          <th>Points</th>
          <th>NRR</th>
        </thead>
        <tbody>
          {sortedPointMap.map((t) => {
            return (
              <tr>
                <td> {t.name}</td>
                <td> {t.points}</td>
                <td> {t.nrr}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default PointTable;
