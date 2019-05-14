import styles from './index.css';

export default function(chain) {
	//console.log('footer:',chain)
  return (
    <div  className={styles.normal}>
       Ant Design ©2018 Created by Ant UED
	   <button onClick={() => { chain.props.history.goBack(); }}>go back</button>
    </div>
  );
}
