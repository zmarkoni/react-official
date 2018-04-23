import React from 'react';

// Transforming arrays into lists of elements
// https://reactjs.org/docs/lists-and-keys.html

// Component that accepts an array of numbers and outputs an unordered list of elements.
function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NumberList(props) {
    const numbers=props.numbers;
    // A good rule of thumb is that elements inside the map() call need keys.
    const listItems = numbers.map((number) => (
        {/*
            <li key={number.toString()}> //Key should be specified inside the array.
                {number}
            </li>
        */},
        // Or like this if we use another component -> Extracting Components with Keys
        <ListItem
            key={number.toString()}
            value={number}
        />

    ));

    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];

export class List extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            name: 'Zoki'
        }
   }

   render() {
        return (
            <div>
                <NumberList numbers={numbers} />
            </div>
        );
   }
}// end of CLASS

// Keys
// Keys help React identify which items have changed, are added, or are removed.
// Keys should be given to the elements inside the array to give the elements a stable identity:

// The best way to pick a key is to use a string that uniquely identifies a list item among its siblings.
// Most often you would use IDs from your data as keys:

// const todoItems = todos.map((todo) =>
//   <li key={todo.id}>
//     {todo.text}
//   </li>
// );

// For more info check DOCS!!!

function Blog(props) {
    const posts = props.posts;
    const listItems = posts.map((post) =>
        <li key={post.id}>
            {post.title}
        </li>
    );

    const sidebar = (
        <div>
            <p>Sadrzaj:</p>
            <ul>
                {listItems}
            </ul>
        </div>
    );

    const content = posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );

    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    )
}

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'},
  {id: 3, title: 'Test', content: 'Test Lists and Keys.'}
];

export class Posts extends React.Component {
    render() {
        return (
          <div>
              <Blog posts={posts} />
          </div>
        );
    }
}// end of class