import React from 'react';
// Import components
import { Test } from './test.jsx';
import { HelloWorld } from './1_HelloWorld.jsx';
import { UserIntroductionJSX } from './2_IntroductionJSX.jsx';
import {WelcomeComponent, Comments} from "./3_CoponentsAndPros.jsx";
import {Clock} from "./4_StateAndLifecycle.jsx";
import {HandlingEvents, Toggle} from "./5_HandlingEvents.jsx";
import {LoginControl} from "./6_ConditionalRendering.jsx";
import {List} from "./7_ListsAndKeys.jsx";

export default class App extends React.Component {
    render() {
        return (
            <div>
                {/*<Test />*/}
                {/*{CustomElement}*/}
                {/*<HelloWorld />*/}
                {/*<UserIntroductionJSX />*/}
                {/*<WelcomeComponent /> */}
                {/*<Comments />*/}
                {/*<Clock />*/}
                {/*<HandlingEvents />*/}
                {/*<Toggle />*/}
                {/*<LoginControl />*/}
                <List />
            </div>
        );
    }
}
