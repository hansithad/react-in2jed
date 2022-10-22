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
    <div style={{display:'flex','flex-direction': 'column',
        'padding-bottom':'5px',
        'box-shadow':
        "0px 11.6px 6.9px rgba(0, 0, 0, 0.02),0px 16.5px 13.3px rgba(0, 0, 0, 0.028),0px 20.8px 20.6px rgba(0, 0, 0, 0.035),0px 27.2px 30.1px rgba(0, 0, 0, 0.042),0px 38.7px 44.7px rgba(0, 0, 0, 0.05),0px 65px 80px rgba(0, 0, 0, 0.07)"
        }}>
      <div>
          <h6>Match {matchId}</h6>
      </div>
      <div className="team_list" style={{display:"flex"}}>
          <div style={{width:'30%'}}>
              <div className={team1+'_flag flag'}></div>
              <input
                  type="radio"
                  name={group+matchId + team1}
                  value={team1}
                  checked={winner === matchId + team1}
                  onChange={handleOptionChange}
                  className="form-check-input"
              />
              {team1}
          </div>
          <div style={{width:'30%'}}>
              <div className={team2+'_flag flag'}></div>
              <input
                  type="radio"
                  name={group+matchId + team2}
                  value={team2}
                  checked={winner === matchId + team2}
                  onChange={handleOptionChange}
                  className="form-check-input"
              />
              {team2}
          </div>
          <div style={{width:'40%'}}>
              <input
                  type="radio"
                  name={group+matchId + team1 + '#' + team2}
                  value={team1 + '#' + team2}
                  checked={winner === matchId + team1 + '#' + team2}
                  onChange={handleOptionChange}
                  className="form-check-input"
              />
              No Result
          </div>
      </div>
    </div>
  );
};
export default Match;
