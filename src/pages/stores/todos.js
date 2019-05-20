export default {
  dataSource: [],
  async refresh() {
		this.dataSource = await (await fetch('http://localhost:8000/api/users')).json();
		// fetch('http://localhost:8000/api/users').then(resp=>{
		// 	if(resp.status === 200) return resp.json(); 
		// }).then(json => {
  //       console.log(json);
  //   }).catch(error => {
  //       console.log(error);
  //   })
		// for(var i in this.dataSource){
		// 	console.log(this.dataSource[i]);
		// }
  },
  async action() {
    // ...
  },
  actionSync() {
    // ...
  },
};