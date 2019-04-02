import React from 'react';
// https://www.robinwieruch.de/javascript-fundamentals-react-requirements/#react-arrow-functions


function Method(props) {
    return (
        <p>Hi sds {props.customName}</p>
    );
}

export class ClassName extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            name: 'Zoki'
        }
   }
   
   render() {
        return (
            <div>
               <Method customName={this.state.name}/>
            </div>
        );
   }
}// end of CLASS