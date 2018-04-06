import React from 'react';

function formatName(user) {
    if (user) {
        return user.firstName + ' ' + user.lastName;
    }
    return 'stranger';
}

const user = {
    firstName: 'Zoran',
    lastName: 'Markovic',
    age: 34,
    avatarUrl: 'http://lorempixel.com/400/200/'
};

// Specifying Attributes and Specifying Children with JSX
const CustomElement = (
    <div>
        <h2>Mr. {user.lastName}</h2>
        <p>have {user.age} years! </p>
    </div>
);
const UserImg = (<img src={user.avatarUrl} alt={user.firstName} />);

// Warning:
// Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.
// For example, class becomes className in JSX, and tabindex becomes tabIndex.

export class Element extends React.Component {
    render() {
        return (
            <h1>
                Hello, {formatName(user)}
            </h1>,
            <p>
                UserImg: {UserImg}
            </p>,
            CustomElement
        );
    }
}

