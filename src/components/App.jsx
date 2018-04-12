import React from 'react';
// Import components
import { HelloWorld } from './HelloWorld.jsx';
import { Element } from './IntroductionJSX.jsx';
// import { Clock } from "./Clock.jsx";
import {ComponentsAndPros} from "./CoponentsAndPros.jsx";

// 3 ways how to use it
const CustomElement = (
    <p>
        My Custom Element
    </p>
);

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HelloWorld />
                <Element />
                {/*{CustomElement}*/}
                {/*<Clock />*/}
                <ComponentsAndPros />
            </div>
        );
    }
}
