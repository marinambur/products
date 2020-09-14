Ext.define('TestApp.view.main.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'app-main',

	requires: [
		'TestApp.view.main.MainController'
	],

	controller: 'main',

	title: 'Главное окно',
	width: 'fit',
	height: 'fit',
	html: '<h1>Выберите товары</h1>',
	bodyPadding: 15,
	renderTo: Ext.getBody(),
	
	tbar: [{
		xtype: 'button',
		text: 'Товары',
		handler: 'onButtonProducts'
	}, {
		xtype: 'button',
		text: 'Выход',
		handler: 'onButtonLogout'
	}],

});