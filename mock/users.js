//import config from './config.js';

// !(function(n){
// 	console.log(n)
	// var mysql = require('mysql');
	// var connection=mysql.createConnection({
	// 								host     : n.mysql.host,
	// 								user     : n.mysql.username,
	// 								password : n.mysql.password,
	// 								port: n.mysql.port,
	// 								database: n.mysql.database,
	// 							})
	// var history = {};
	// var history_extend = {
	// 	version: '1.0.0',
	// 	test:function (req, res) {
	// 			connection.query('select * from history',
	// 				function selectCb(err, results, fields) {
	// 					if(err){
	// 						console.log('[SELECT ERROR]:',err.message);
	// 						//return reject(err)
	// 					}
	// 					if(results){
	// 						//console.log(results)
	// 						res.send(results)
	// 						//return resolve(results);
	// 					}
	// 				}
	// 			);
 //    },
	// }
	// 
	// history = Object.assign({}, history, history_extend)
 //  
	// console.log(history)
	// if(connection!==null || connection!==undefined){
	// 	connection.end()
	// }
// })(config)
// var a = true;
// var b = function(){
// 	console.log(11)
// };
// var c = function(){
// 	console.log(222)
// }
// a ? b() : c()

export default {
	//'/api/users': ['a', 'b'], http://localhost:8000/api/users
	// 支持值为 Object 和 Array
	'GET /api/users': { users: [1, 2] },
	  
	// GET POST 可省略
	'/api/users/1': { id: 1 },

	'/history': (req, res) => {
		setTimeout(() => {
			res.send('Ok');
			//history.test(req, res);
		}, 1000);
	},

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => { res.end('OK'); }
}