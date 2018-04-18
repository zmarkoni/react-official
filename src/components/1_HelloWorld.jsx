import React from 'react';

const Element1 = <p>Hello 1</p>;
const Element2 = (
    <p>
        Hello 2
    </p>
);

export class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                {Element1}
                {Element2}
            </div>
        );
    }
}