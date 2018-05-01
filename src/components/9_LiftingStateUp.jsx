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

class TemperatureInput extends React.Component {
   constructor(props) {
        super(props);
        this.state = { temperature: ''};
        this.handleChange = this.handleChange.bind(this);
   }

   handleChange(e) {
       this.setState({temperature: e.target.value});
   }

   render() {
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
               <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        );
   }
}// end of CLASS

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

export class Calculator extends React.Component {
  render() {
    return (
      <div>
        {/*Call Class here, same like Function*/}
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

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