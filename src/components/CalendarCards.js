import React from 'react'

const ROUND = 2;

const convertDate = (date) => {
  let fullDate = ''
  let month = '';
  let day = (date.substring(8,10));
  
  switch(date.substring(5,7)) {
		case '01' :
			month =  ' stycznia';
			break;
		case '02' :
			month =  ' lutego';
			break;
		case '03' :
			month =  ' marca';
			break;
		case '04' :
			month =  ' kwietnia';
			break;
		case '05' :
			month =  ' maja';
			break;
		case '06' :
			month =  ' czerwca';
			break;
		case '07' :
			month =  ' lipca';
			break;
		case '08' :
			month =  ' sierpnia';
			break;
		case '09' :
			month =  ' września';
			break;
		case '10' :
			month =  ' października';
			break;
		case '11' :
			month =  ' listopada';
			break;
		case '12' :
			month =  ' grudnia';
			break;
		default :
			break;
    }
    fullDate = day + month;
    
		return fullDate;
}

Math.decimal = function(n, k) 
{
  let factor = Math.pow(10, k+1);
  n = Math.round(Math.round(n*factor)/10);
  return n/(factor/10);
}

const CalendarCards = (props) => {
	return(
        <>
          <div className="card">
            <div className="card__top"> {convertDate(props.date)} </div>
              <table className="card__content">
				<tbody>
                  <tr className="card__content_data"><td>Temp.: </td><td>{Math.decimal(props.temp, ROUND)}</td><td className="units">°C</td></tr>
                  <tr className="card__content_data"><td>Wiatr: </td><td>{Math.decimal(props.wind, ROUND)}</td><td className="units">m/s</td></tr>
                  <tr className="card__content_data"><td>Ciśn.: </td><td>{Math.decimal(props.pressure, ROUND)}</td><td className="units">Pa</td></tr>
				</tbody>
              </table>
          </div>
        </>
    );
}

export default CalendarCards