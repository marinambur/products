Ext.define('TestApp.view.login.Login', {
	extend: 'Ext.window.Window',
	xtype: 'login',


	requires: [
		'TestApp.view.login.LoginController'
	],

	controller: 'login',
	bodyPadding: 10,
	title: 'Окно входа',
	closable: false,
	autoShow: true,

	items: {
		xtype: 'form',
		reference: 'form',
		items: [{
			xtype: 'textfield',
			name: 'username',
			reference: 'username',
			fieldLabel: 'Пользователь',
			allowBlank: false
		}, {
			xtype: 'textfield',
			name: 'password',
			reference: 'password',
			inputType: 'password',
			fieldLabel: 'Пароль',
			allowBlank: false
		}],
		buttons: [{
			text: 'Войти',
			formBind: true,
			enableKeyEvents:true,
			listeners: {
				click: 'onLoginClick',

			}

		}]
	}
});
