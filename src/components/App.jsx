import React from 'react';
// Import components
import { HelloWorld } from './HelloWorld.jsx';
import { Element } from './IntroductionJSX.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                MyComponent From App.js
                <HelloWorld />
                <Element />
            </div>);
    }
}
