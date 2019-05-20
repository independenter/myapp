import Link from 'umi/link';
import styles from './index.css';
// src/index.js
import React, { useEffect } from 'react';
//import ReactDOM from 'react-dom';
import icestore from './stores';

function Button(props){
	console.log("props:",props.text)
	return (
		<div>{props.text}</div>
	)
}

function Todo() {
  const todos = icestore.useStore('todos');
  const { dataSource } = todos; //Array.from(todos);

  useEffect(() => {
    todos.refresh();
  }, []);
	
  return (
    <div>
      <h2>Todo</h2>
      <ul>
        {dataSource.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
};

// ReactDOM.render(
//   <Todo />,
//   document.body
// );

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
				<Todo />
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
				<Button text="确定"/><Button text="取消"/>
				<li>
					<Link to="/users/detail">go to /users</Link>
				</li>
				<li>
					<Link to="/users/111">go to /users/111</Link>
				</li>
				<li>
					<Link to="/list">go to /list</Link>
				</li>
      </ul>
      
    </div>
  );
}
