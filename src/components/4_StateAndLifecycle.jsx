import React from 'react';
// https://reactjs.org/docs/state-and-lifecycle.html
// Using State Correctly

// In this section, we will learn how to make the Clock component truly reusable and encapsulated.
// It will set up its own timer and update itself every second.

// State is similar to props, but it is private and fully controlled by the component.
// We mentioned before that components defined as classes have some additional features.
// Local state is exactly that: a feature available only to classes.
export class Clock extends React.Component {
    constructor(props) {
        super(props);  // Class components should always call the base constructor with props.
        this.state = {
            date: new Date(),
            customMessage: 'What Time is it?'
        }; // initial state
    }

    // lifecycle hooks, We want to set up a timer whenever the Clock is rendered to the DOM for the first time.
    // This is called “mounting” in React.
    // The componentDidMount() hook runs after the component output has been rendered to the DOM.
    componentDidMount() {
        // While this.props is set up by React itself and this.state has a special meaning,
        // you are free to add additional fields to the class manually if you need to store something
        // that doesn’t participate in the data flow (like a timer ID).
        this.timerID = setInterval(
            () => this.tick(), // set new state in the method tick
            1000
        );
    }

    // lifecycle hooks, We also want to clear that timer whenever the DOM produced by the Clock is removed.
    // This is called “unmounting” in React.
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    // method
    tick() {
        this.setState({ // new state, Thanks to the setState() call, React knows the state has changed, and calls the render()
           date: new Date()
           // customMessage: 'What time is it now?'
        });
        this.setState({
            customMessage: 'What time is it now?'
        });
    }

    render() {
        return (
          <div>
              <h1>Hello, world!</h1>
              <Message message={this.state.customMessage} /> {/* A component may choose to pass its state down as props to its child components:*/}
              <p>It is {this.state.date.toLocaleTimeString()}.</p>
          </div>
        );
    }
}

// The Data Flows Down
//  A component may choose to pass its state down as props to its child components:
function Message(props) {
    return (
      <p>Message: {props.message}</p>
    );
}

// Let’s quickly recap what’s going on and the order in which the methods are called:
//
// When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. Since Clock needs to display the current time, it initializes this.state with an object including the current time. We will later update this state.
//
// React then calls the Clock component’s render() method. This is how React learns what should be displayed on the screen. React then updates the DOM to match the Clock’s render output.
//
// When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle hook. Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.
//
// Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly.
//
// If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle hook so the timer is stopped.