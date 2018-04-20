import React from 'react';

// Transforming arrays into lists of elements
// https://reactjs.org/docs/lists-and-keys.html

// Component that accepts an array of numbers and outputs an unordered list of elements.

function NumberList(props) {
    const numbers=props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()}>
            {number}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];

export class List extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            name: 'Zoki'
        }
   }

   render() {
        return (
            <div>
                <NumberList numbers={numbers} />
            </div>
        );
   }
}// end of CLASS

