
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'Umi School --dev',
      dll: false,
      
      routes: {
        exclude: [
          /components\//,
        ],
      },
    }],
  ],
  mock: {
    exclude: [
      'mock/**/_*.txt',
			'node_modules/'
    ],
  },
  routes: [
    { 
      path: '/', component: './../layouts/index', routes: [
        { path: '/', component: './index' },
        { path: '/list', component: './list.js', Routes: ['./src/pages/routes/PrivateRoute.js']},
        { path: '/users', component: './users/_layout.js', 
          routes: [
           { path: '/users/detail', component: './users/users.js' },
           { path: '/users/:id?',component: './users/$id.js' }
         ],
        },
        { path: '/404', component: './404' },
      ] 
    }
  ],
}
