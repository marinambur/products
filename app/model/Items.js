Ext.define('TestApp.model.Items', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'desc', type: 'string'},
        {name: 'price', type: 'number' },
        {name: 'quantity', type: 'int'}

    ]
});

