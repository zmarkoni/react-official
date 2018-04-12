import React from 'react';

const user = {
    firstName: 'Zoran',
    lastName: 'Markovic',
    age: 34,
    avatarUrl: 'http://lorempixel.com/400/200/'
};

function formatName(user) {
    if (user) {
        return user.firstName + ' ' + user.lastName;
    }
    return 'stranger';
}

// Specifying Attributes and Specifying Children with JSX
const UserDescription = (
    <p className="user__description">Have {user.age} years! </p>
);
const UserImg = <img className="user__img" src={user.avatarUrl} alt={user.firstName} />;

// Warning:
// Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.
// For example, class becomes className in JSX, and tabindex becomes tabIndex.

export class Element extends React.Component {
    render() {
        return (
            <div className="user">
                <h1 className="user__name">{formatName(user)}</h1>
                {UserImg}
                {UserDescription}
            </div>
        );
    }
}

