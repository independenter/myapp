
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: false,
      dynamicImport: false,
      title: 'Umi School --local',
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
    ],
  },
  routes: [
    { 
      path: '/', component: './../layouts/index', routes: [
        { path: '/', component: './index' },
        { path: '/users', component: './users' },
        { path: '/404', component: './404' },
      ] 
    }
  ]
}
