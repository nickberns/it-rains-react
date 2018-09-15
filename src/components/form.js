import React from "react";

class Form extends React.Component{

    render(){

        return(
                <form onSubmit = {this.props.loadWeather}>
                    <input type="text" name="city" placeholder="CITY"/>
                    <input type="text" name="country" placeholder="COUTRY"/>
                    <button>GET WEATHER</button>
                </form>

        )
    }
}

export default Form;
