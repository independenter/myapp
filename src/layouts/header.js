import styles from './index.css';

export default (props)=>{
	//console.log('header:',props)
	return (
	  <div className={styles.normal}>
      	<h1 className={styles.title}>Yay! Welcome to umi!</h1>
      </div>
	);
}