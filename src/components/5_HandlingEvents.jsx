import React from 'react';
// https://reactjs.org/docs/handling-events.html

function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked!');
    }

    return (
      <button onClick={handleClick}>
          Click me
      </button>
    );
}

export class HandlingEvents extends React.Component {
    render() {
        return (
          <div>
              <span>HandlingEvents </span>
              <ActionLink />
          </div>
        );
    }
}

// When you define a component using an ES6 class,
// a common pattern is for an event handler to be a method on the class.
// For example, this Toggle component renders a button that lets the user toggle between “ON” and “OFF” states:

export class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this); // This binding is necessary to make `this` work in the callback
        // You have to be careful about the meaning of 'this' in JSX callbacks. In JavaScript,
        // 'class methods' are not bound by default. If you forget to bind this.handleClick and pass it to onClick,
        // this will be undefined when the function is actually called.
        // Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.
    }

    handleClick() {
        this.setState(
            function(prevState) {
                return {
                    isToggleOn: !prevState.isToggleOn
                }
            }
        );
    }

    render() {
        return (
            <div>
                <br />
                <hr />
                <br />
                <span>Toggle button </span>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}

// Passing Arguments to Event Handlers
// Inside a loop it is common to want to pass an extra parameter to an event handler. For example, if id is the row ID, either of the following would work:
//
// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
// The above two lines are equivalent, and use arrow functions and Function.prototype.bind respectively.
//
// In both cases, the e argument representing the React event will be passed as a second argument after the ID. With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.