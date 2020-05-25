import React, {Component} from 'react';
import '../style/App.css';
import Button from './Button';
import CalendarCards from './CalendarCards'

const APIkeyNASA = `RRM3mGne42YY2yxfpT1IW3hNaW4leXfffiCuc5aD`;
const APIMarsWeather = `https://api.nasa.gov/insight_weather/?api_key=${APIkeyNASA}&feedtype=json&ver=1.0`

class App extends Component {
  state = {
    active: false,
    weather: [],
    control:false,
  }

  handleShowCalendar = () => {
    this.setState({
      active: !this.state.active
    })
  }

  componentDidMount() {
    
    fetch(APIMarsWeather)
    .then(response => {
      if(response.ok) {
          return response
      }
      throw Error("Niestety nie udało się pobrać pogody. Spróbuj ponownie później.") 
    })
    .then(response => response.json()) 
    .then(data => {
      this.setState({
        weather: data,
        control:true,
      })
  })
  }

  render() { 

  const day = this.state.weather.sol_keys;
  const {weather} = this.state

    return (
    <>
      {this.state.active ? 
      <div className="view-weather">
        <div className="mars-image">
          <div className="mars-text">Pogoda na Marsie</div>
          <div className="container">
          {this.state.control ? day.map((element, array) => 
            <CalendarCards 
              key = {weather[element]} 
              date = {weather[element].First_UTC} 
              temp = {weather[element].AT.av} 
              pressure = {weather[element].PRE.av} 
              wind = {weather[element].HWS.av}/>) 
            : null}
          </div>
        </div>
      </div> :
      <div className="view-check">
      <div className="mars-image">
        <div className="mars-text">Sprawdź pogodę na Marsie!</div>
        <Button active={this.state.active} click={this.handleShowCalendar} />
        <div className="description">Dzięki aplikacji możesz sprawdzić jaka pogoda panowała na Marsie przez ostatnie 7 dni. Dane udostępniane są przez Narodową Agencję Aeronautyki i Przestrzeni Kosmicznej (NASA) i pochodzą od sondy InSight, która wylądowała na powierzchni Czerwonej Planety 26 listopada 2018 roku. 
        </div>
      </div>
    </div>}
   </>
  );
}
}

export default App;
