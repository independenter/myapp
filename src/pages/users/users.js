import styles from './users.css';
import global from '../../global'

export default function() {
  //var history = require('../../../assets/mysql/history')
	//<button onClick={() => { router.goBack();console.log(router); }}>go back</button>
  console.log("global:",global)
  return (
    <div className={styles.normal}>
      <h1>Page users</h1>
    </div>
  );
}
