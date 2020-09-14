Ext.define('TestApp.store.Store', {
    extend: 'Ext.data.ArrayStore',
    model: 'TestApp.model.Items',
    storeId: 'store1',
    data: [
        [ 1, 'Notebook Lenovo', 'Ноутбук', '100', '3'],
        [ 2, 'Keyboard OKLICK', 'Клавиатура', '20', '1'],
        [ 3, 'Airpods', 'Наушники', '10', '15']
    ]
});

