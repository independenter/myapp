import Link from 'umi/link';
import styles from './index.css';


export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
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
