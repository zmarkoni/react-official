//Lifting State Up
//Conversion Functions

import React from 'react';

//Our new requirement is that, in addition to a Celsius input,
// we provide a Fahrenheit input, and they are kept in sync.
function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>The water would boil!</p>;
    }
    return <p>The water would not boil!</p>;
}

export class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c'
        };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({temperature, scale:'c'})
    }

    handleFahrenheitChange(temperature) {
        this.setState({temperature, scale:'f'})
    }

    render() {
        const scale = this.state.scale;
            const temperature = this.state.temperature;
            const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
            const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}/>

                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}/>

                <BoilingVerdict celsius={parseFloat(celsius)}/>
            </div>
        );
    }
}// class end

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value); // call method from Calculator
    }

    render() {
        const temperature = this.props.temperature;
        const scale =this.props.scale;
        return (
            <fieldset>
                <label>Enter temperature in {scaleNames[scale]}:</label>
                    <input
                        value={temperature}
                        onChange={this.handleChange}
                    />
            </fieldset>
        );
    }
}// class end

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// function that takes a string temperature and a converter function as arguments and returns a string.
// We will use it to calculate the value of one input based on the other input.
// It returns an empty string on an invalid temperature, and it keeps the output rounded to the third decimal place:
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
// For example, tryConvert('abc', toCelsius) returns an empty string,
// and tryConvert('10.22', toFahrenheit) returns '50.396'.