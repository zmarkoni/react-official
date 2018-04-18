import React from 'react';

export class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick() {
        this.setState(
            {isToggleOn: !this.state.isToggleOn}
            // function(prevState) {
            //     return {
            //         isToggleOn: !prevState.isToggleOn
            //     }
            // }
            //(prevState) => {isToggleOn: !prevState.isToggleOn}
        );
    }

    render() {
        return(
            <div>
                <h1>Toggle button 1</h1>
                <button onClick={this.handleButtonClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        );
    }
}
