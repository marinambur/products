Ext.define('TestApp.store.Users', {
	extend: 'Ext.data.ArrayStore',
	model: 'TestApp.model.User',
	storeId: 'usersStore',
	data: [
		['admin', 'padmin']
	]
});