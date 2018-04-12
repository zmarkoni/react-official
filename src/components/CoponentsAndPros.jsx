import React from 'react';

// Function can represent Component
function Welcome(props) {
    return <h1>Welcome, {props.name}</h1>
}


//When React sees an element representing a user-defined component,
//it passes JSX attributes to this component as a single object. We call this object “props”.
const element = <Welcome name="Sara" />; //Welcome is a function

//Let’s recap what happens in this example:
// 1.We call ReactDOM.render() with the <Welcome name="Sara" /> element.
// 2.React calls the Welcome component with {name: 'Sara'} as the props.
// 3.Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
// 4.React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.

// Extracting components example
function Avatar(props) {
    return (
        <img className="Avatar"
             src={props.user.avatarUrl}
             alt={props.user.name}
        />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function formatDate(date) {
  return date.toLocaleDateString();
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

//create Comment element Object where we store data
const commentElement = {
    author: {
        name: 'Zoran Markovic',
        avatarUrl: 'http://placekitten.com/g/64/64'
    },
    date: new Date(),
    text: 'Comment text: "I hope you enjoy learning React!"'
};

// Class also can represent Component
// Important! -> Props are Read-Only
// All React components must act like pure functions with respect to their props.
export class ComponentsAndPros extends React.Component {
    render() {
        return (
            <div>{element}</div>,
            // Call Comment component with commentElement data as props(properties - crveno)!!!
            <Comment
                author={commentElement.author}
                date={commentElement.date}
                text={commentElement.text}
            />
        );
    }
}

