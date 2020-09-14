Ext.define('TestApp.view.main.MainController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.main',

	routes: {
		'login': 'onLogin',
		'help': 'onHelp',
		'products': 'onProducts',
		'panel': 'onPanel'
	},

	beforeInit: function() {
		if (!localStorage.getItem("checkedUser")) {
			this.redirectTo('login');
		}
	},

	onButtonLogout: function() {
		localStorage.removeItem('checkedUser');
		this.redirectTo('login');
	},

	onButtonHelp: function() {
		this.redirectTo('help');
	},
	onButtonProducts: function() {
		this.redirectTo('products');
	},
	onButtonPanel: function() {
		this.redirectTo('panel');
	},

// routes
	onLogin: function() {
		this.getView().destroy();
		Ext.create('TestApp.view.login.Login');
	},
	onHelp: function() {
		this.getView().destroy();
		Ext.create('TestApp.view.help.Help');
	},
	onProducts: function() {
		this.getView().destroy();
		Ext.create('TestApp.view.products.Products');
	},
	onPanel: function() {
		this.getView().destroy();
		Ext.create('TestApp.view.panel.Panel');
	}
});