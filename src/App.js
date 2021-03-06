import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";



const API_KEY = "1335782acfd379d261eea65aa080139d";

class App extends React.Component {
    state = {
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        let city = e.target.elements.city.value;
        let country = e.target.elements.country.value;
        try{
            const api_call = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' + country + '&appid=' + API_KEY);
            if(!api_call.ok){
                throw Error(api_call.statusText);
            }
            const data = await api_call.json();
            console.log(data);
            this.setState({
                temperature: Math.round(data.main.temp - 273.15),
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
             });
        }catch(error){
            console.log(error);
            this.setState({
                error: error
             });
        }
        
    }
    render(){
        return (
            <div>
                <div className="wrapper">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-md-6 title-container">
                                    <div className="wrap"></div> 
                                     <Titles />
                                </div>
                                <div className="col-xs-12 col-md-6 form-container">
                                      <Form Weather={this.getWeather} />
                                        <Weather
                                            temperature={this.state.temperature}
                                            city={this.state.city}
                                            country={this.state.country}
                                            humidity={this.state.humidity}
                                            description={this.state.description}
                                            error = {this.state.error}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;


