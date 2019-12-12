import React from "react";

class Form extends React.Component {
    render (){
        return (
            <form onSubmit={this.props.Weather}>
                <input type="text" name="city" placeholder="CITY..." required/>
                <input type="text" name="country" placeholder="COUNTRY..." required/>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;