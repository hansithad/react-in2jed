import React from 'react';
import { WiDaySunny,WiDayStormShowers } from 'weather-icons-react';
const Match = (props) => {
  const { group,matchId, team1, team1Flag,team2,team2Flag, updatePointMap,matchDayWeather,wDescription } = props;
  const [winner, setWinner] = React.useState('');

  

  const handleOptionChange = (changeEvent) => {
    if(changeEvent.target){
        setWinner(matchId + changeEvent.target.value);
        updatePointMap(changeEvent.target.value, matchId);
    }
  };
  
  const handleOnClick = (clickEvent)=>{
      handleOptionChange({target:clickEvent.target.querySelector('input')})
  }

  return (
    <div style={{display:'flex','flex-direction': 'column',
        'padding-bottom':'5px',
        'box-shadow':
        "0px 11.6px 6.9px rgba(0, 0, 0, 0.02),0px 16.5px 13.3px rgba(0, 0, 0, 0.028),0px 20.8px 20.6px rgba(0, 0, 0, 0.035),0px 27.2px 30.1px rgba(0, 0, 0, 0.042),0px 38.7px 44.7px rgba(0, 0, 0, 0.05),0px 65px 80px rgba(0, 0, 0, 0.07)"
        }}>
      <div style={{'display':"flex",'justify-content': 'space-between','padding-top': '10px'}}>
          <h6>Match {matchId}</h6>
          {wDescription &&
          <div className="tooltip" style={{'padding-top': '10px'}}>
              <div >
                  <span className="tooltiptext">{wDescription}</span>
              </div>
              {matchDayWeather==1 ? <WiDaySunny size={40} color='#ff0078' /> :<WiDayStormShowers size={40} color='#ff0078' />}
              
          </div>
          }
          
      </div>
      <div className="team_list" style={{display:"flex"}} >
          <div style={{width:'30%',cursor:'pointer'}} onClick={handleOnClick}>
              {/*<div className={team1+'_flag flag'}></div>*/}
              <div><img style={{width:'40px',height:'40px'}} src={team1Flag} /></div>
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
          <div style={{width:'30%',cursor:'pointer'}} onClick={handleOnClick}>
              <div><img style={{width:'40px',height:'40px'}} src={team2Flag} /></div>
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
          <div style={{width:'40%',cursor:'pointer'}} onClick={handleOnClick}>
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
