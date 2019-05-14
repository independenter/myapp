import styles from './index.css';
import Header from './header';
import Footer from './footer';


function BasicLayout(props) {
  //console.log("props:",props);
	var comments = [
    { "author": "KXX", "date": "2018-8-17", "text":"天气不错！"},
    { "author": "KXX2", "date": "2018-8-17", "text":"天气不错2！"}
	];
	
  if(props.location.pathname === '/'){
  	return (
  		<div>
        <Header data={comments}/>
        { props.children }
				<Footer />
      </div>
  	);
  }
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      {props.children}
			<Footer props={props}/>
    </div>
  );
}

export default BasicLayout;
