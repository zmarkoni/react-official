import React from 'react';

const Element1 = <p>Hello</p>;

export class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                {Element1}
            </div>
        );
    }
}