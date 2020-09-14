
Ext.define('TestApp.view.products.productsController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.products',
	routes: {
		'main': 'onMain',
		'panel': 'onPanel',

	},

	onButtonMain: function() {
		this.redirectTo('main');
	},

	onButtonName: function() {
		this.redirectTo('panel');
	},

	onMain: function() {
		this.getView().destroy();
		Ext.create('TestApp.view.main.Main');
	},
	onPanel: function() {
		this.getView().destroy();
		Ext.create('TestApp.view.panel.Panel');
	}
})