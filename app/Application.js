Ext.define('TestApp.Application', {
  extend: 'Ext.app.Application',
  name: 'TestApp',
  
  models: ['TestApp.model.User', 'TestApp.model.Items'],

  stores: ['TestApp.store.Users', 'TestApp.store.Store'],

  views: [
    'TestApp.view.login.Login',
    'TestApp.view.main.Main',
    'TestApp.view.products.Products'
  ],

  defaultToken: 'main',

  launch: function() {
    Ext.create('TestApp.view.main.Main');
  }
})