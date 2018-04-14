import React from 'react';
// Import components
// import { HelloWorld } from './1_HelloWorld.jsx';
// import { Element } from './2_IntroductionJSX.jsx';
// import {ComponentsAndPros} from "./3_CoponentsAndPros.jsx";
// import {Clock} from "./4_StateAndLifecycle.jsx";
// import {HandlingEvents, Toggle} from "./5_HandlingEvents.jsx";
import {LoginControl} from "./6_ConditionalRendering.jsx";


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
                {/*<HelloWorld />*/}
                {/*<Element />*/}
                {/*{CustomElement}*/}
                {/*<ComponentsAndPros />*/}
                {/*<Clock />*/}
                {/*<HandlingEvents />*/}
                {/*<Toggle />*/}
                <LoginControl />
            </div>
        );
    }
}
