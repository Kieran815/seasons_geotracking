import React from "react";
import "./WeatherCard.css";

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      weatherForecast: []
    }
  }

  async componentDidMount() {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=48f162a78e4f4a62865190945190412&q=${this.props.lat},${this.props.lon}&days=5`)
    // convert results to JSON
    const data = await response.json();
    console.log(data);
    this.setState({ weatherForecast: data.forecast.forecastday });
  }


  render() {
    return(
      <p>I'm Gonna Figure this Out</p>
    );
  }
}
  // const dailyCard = weatherForecast.map((index) => {
  //   return (
  //     <div className="ui card" id="card" key={index.date_epoch}>
  //       <div className="content">
  //         {index.date}
  //         <div className="image">
  //           <img src={index.day.condition.icon} alt="Weather Icon" />
  //         </div>
  //         Conditions: {index.day.condition.text}
  //         <div className="meta">
  //           <p className="header">
  //             <span>High/Low: {index.day.maxtemp_f}f/{index.day.mintemp_f}f
  //             </span>
  //           </p>
  //         </div>
  //         <div className="description">
  //         </div>
  //       </div>
  //     </div>
  //   )
  // })
  //
  // return(
  //   <div>
  //     {dailyCard}
  //   </div>
  // )
 // }

export default WeatherCard;
