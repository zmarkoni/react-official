import React from 'react';

function tick() {
    let date = new Date().toLocaleDateString();
      return {
          date
      }
}
const element = (
    tick()
);
export class Clock extends React.Component {
    render() {
        return (
            <div className="clock">Time is: {element}</div>
        );
    }
}