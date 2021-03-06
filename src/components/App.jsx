import React from 'react';
// Import components
import { HelloWorld } from './1_HelloWorld.jsx';
import { UserIntroductionJSX } from './2_IntroductionJSX.jsx';
import {WelcomeComponent, Comments} from "./3_CoponentsAndPros.jsx";
import {Clock} from "./4_StateAndLifecycle.jsx";
import {HandlingEvents, Toggle} from "./5_HandlingEvents.jsx";
import {LoginControl} from "./6_ConditionalRendering.jsx";
import {MapFilterReduce, List, Posts} from "./7_ListsAndKeys.jsx";
import {Forms} from "./8_Forms.jsx";
import {Calculator} from "./9_LiftingStateUp.jsx";
import {Welcome, SignUpForMars} from "./10_Composition.jsx";

export default class App extends React.Component {
    render() {
        return (
            <div>
                {/*{CustomElement}*/}
                {/*<HelloWorld />*/}
                {/*<UserIntroductionJSX />*/}
                {/*<WelcomeComponent /> */}
                {/*<Comments />*/}
                {/*<Clock />*/}
                {/*<HandlingEvents />*/}
                {/*<Toggle />*/}
                {/*<LoginControl />*/}
                <MapFilterReduce />
                {/*<List />*/}
                {/*<Posts />*/}
                {/*<Forms />*/}
                {/*<Calculator />*/}
                {/*<Welcome/>*/}
                {/*<SignUpForMars/>*/}
            </div>
        );
    }
}
