import React from "react";

class Weather extends React.Component {
    render (){
        return (
            <div className="weather__info">
                 {
                    this.props.error && <div className="instructions">
                        <p className="error">Unable to find location, please try again!</p>
                    </div>
                }
                {
                    !this.props.city && !this.props.country && <div className="instructions"><h2>Instructions</h2>
                    <p>1. Enter the City you wish to find the current weather</p>
                    <p>2. Enter the Country Code for the country your city is located within (Ex. Canada would be CA, United States would be US)</p>
                    <p>3. Once finished click the button 'Get Weather' and it will display your cities current location, temperature, humidity and Conditions</p></div>
                }
                {
                    this.props.city && this.props.country && <p className="weather__key">Location:
                        <span className="weather__value"> {this.props.city}, {this.props.country}</span>
                        </p>
                }
                {
                    this.props.temperature && <p className="weather__key">Temperature:
                        <span className="weather__value"> {this.props.temperature}&deg;</span>
                        </p>
                }
                {
                    this.props.humidity && <p className="weather__key">Humidity:
                        <span className="weather__value"> {this.props.humidity + "%"}</span>
                        </p>
                }
                {
                    this.props.description && <p className="weather__key">Conditions:
                        <span className="weather__value"> {this.props.description}</span>
                        </p>
                }
            </div>
        );
    }
}

export default Weather;