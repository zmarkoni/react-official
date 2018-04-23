import React from 'react';

function Method(props) {
    return (
        <p>Hi {props.customName}</p>
    );
}

export class Forms extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleChange = this.handleChange.bind(this);
   }

    handleSubmit(event) {
       event.preventDefault();
        alert('A name was submitted: ' + this.state.value);
    }

    handleChange(event) {
       this.setState(
           {
               value: event.target.value,
               //value: event.target.value.toUpperCase() // if we wanted to enforce that names are written with all uppercase letters, we could write handleChange as:
           }
       );
    }
   
   render() {
        return (
            <div>
                <h1>Welcome form</h1>
                <br/>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                  </label>
                  <input type="submit" value="Submit" />
                </form>
            </div>
        );
   }
}// end of CLASS

// How to have multiple elements in the form which use value, like textarea, name...