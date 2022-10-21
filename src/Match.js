import React from 'react';
const Match = (props) => {
  const { group,matchId, team1, team2, updatePointMap } = props;
  const [winner, setWinner] = React.useState('');

  const noresult = '';

  const handleOptionChange = (changeEvent) => {
    setWinner(matchId + changeEvent.target.value);
    updatePointMap(changeEvent.target.value, matchId);
  };

  return (
    <div>
      <h6>Match {matchId}</h6>
      <label>
        <input
          type="radio"
          name={group+matchId + team1}
          value={team1}
          checked={winner === matchId + team1}
          onChange={handleOptionChange}
          className="form-check-input"
        />
        {team1}
      </label>
      <label>
        <input
          type="radio"
          name={group+matchId + team2}
          value={team2}
          checked={winner === matchId + team2}
          onChange={handleOptionChange}
          className="form-check-input"
        />
        {team2}
      </label>
      <label>
        <input
          type="radio"
          name={group+matchId + team1 + '#' + team2}
          value={team1 + '#' + team2}
          checked={winner === matchId + team1 + '#' + team2}
          onChange={handleOptionChange}
          className="form-check-input"
        />
        No Result
      </label>
    </div>
  );
};
export default Match;
