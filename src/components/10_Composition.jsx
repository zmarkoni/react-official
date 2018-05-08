import React from 'react';

// https://reactjs.org/docs/composition-vs-inheritance.html
// use composition instead of inheritance to reuse code between components.

// 1.Containment
// ome components don’t know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic “boxes”.
// We recommend that such components use the special children prop to
// pass children elements directly into their output:


function FancyBoarder(props) {
    return (
        <div className={'FancyBoarder FancyBoarder-' + props.color}>
            {props.children}
        </div>
    );
}

// This lets other components pass arbitrary children to them by nesting the JSX:

function Dialog(props) {
    return (
      <FancyBoarder color="blue">
        <h1 className="dialog-title">
            {props.title}
        </h1>
        <p className="dialog-message">
            {props.message}
         </p>
          {props.children}
      </FancyBoarder>
    );
}

// 2. Use your own convention instead of using children
// While this is less common, sometimes you might need multiple “holes” in a component.
// In such cases you may come up with your own convention instead of using children:

function SplitPane(props) {
    return (
        <div className="splitPane">
            <div className="splitPane-left">
                {props.paneLeft}
            </div>
            <div className="splitPane-right">
                {props.paneRight}
            </div>
        </div>
    );
}

function Contacts() {
    return <div className="Contacts">Contacts</div>;
}

function Chat() {
  return <div className="Chat">Chat</div>;
}

function Pane() {
    return (
        <div>
            <h1>Pane</h1>
            <br/>
            <SplitPane
                paneLeft={
                    <div>
                        <h2>Panel Left </h2>
                        <Contacts />
                    </div>
                }
                paneRight={
                    <div>
                        <h2>Panel Right </h2>
                        <Chat />
                    </div>
                }
            />
        </div>
    );
}

// 3. Specialization
// Sometimes we think about components as being “special cases” of other components.
// For example, we might say that a WelcomeDialog is a special case of Dialog.
// In React, this is also achieved by composition, where a more “specific” component renders a
// more “generic” one and configures it with props:

// Check Dialog on line 22
function ExtendedDialog() {
    return (
        <Dialog
            title="Extended Dialog"
            message= "Dialog message extended"
        />
    );
}


export class Welcome extends React.Component {
   // constructor(props) {
   //      super(props);
   //      this.state = {
   //          name: 'Zoki'
   //      }
   // }
   
   render() {
        return (
            <div>
                <Dialog
                    title="Dialog"
                    message= "Dialog message"
                />
                <br/>
                <hr/>
                <Pane/>
                <ExtendedDialog/>
            </div>
        );
   }
}// end of CLASS

// 4. Composition works equally well for components defined as classes:
export class SignUpForMars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
    }

    handleChange(e) {
        this.setState({
            login: e.target.value
        })
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }

    render () {
        return (
          <div>
              <Dialog
                  title="Mars Exploration Program"
                  message="How should we refer to you?">
                  <input value={this.state.login}
                         onChange={this.handleChange}
                  />

                  <br/>
                  <br/>
                  <button onClick={this.handleSignUp}>
                      Sign me Up
                  </button>
              </Dialog>
          </div>
        );
    }


}// end of class
