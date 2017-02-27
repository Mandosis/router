console.log('Hello World!');

let router = new Router.default([
  {
    path: '/',
    template: '<h1>Hello World!</h1>'
  },
  {
    path: 'parent',
    template: '<h1>Parent Template</h1><router-outlet></router-outlet>',
    children: [
      {
        path: 'child',
        template: '<h2>Child Template</h2>'
      }
    ]
  }
]);