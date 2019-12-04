import React from "react";

class Form extends React.Component {
    render (){
        return (
            <form onSubmit={this.props.Weather}>
                <input type="text" name="city" placeholder="city..." required/>
                <input type="text" name="country" placeholder="country..." required/>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default Form;