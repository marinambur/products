Ext.define('TestApp.view.products.Products', {
    extend: 'Ext.panel.Panel',
    xtype: 'products',


    requires: [
        'TestApp.view.products.productsController'
    ],

    controller: 'products',
    title: 'Учет товаров',
    width: 'fit',
    height: 650,
    bodyPadding: 15,
    autoPaging: true,
    renderTo: Ext.getBody(),


    tbar: [{
        xtype: 'button',
        text: 'Main',
        handler: 'onButtonMain'
    }],
    items: [
        {
            xtype: 'label',
            forId: 'myFieldId',
            text: 'ID',
            margin: '0 0 0 10',
            width: 400,
            bodyPadding: 10,
        },

        {
            xtype: 'textfield',
            hideLabel: false,
            flex: 1,
            placeHolder: 'Enter your username',
            name: 'id1',
            listeners: {
                specialkey: function (field, e) {
                    if (e.getKey() === e.ENTER) {
                        Ext.getStore('store1').filterBy(function (record, id) {
                            return record.get('id') == field.lastValue || field.lastValue == '';
                        });

                    }
                }
            }

        },
        {
            xtype: 'label',
            forId: 'myFieldId',
            text: 'Описание',
            margin: '0 0 0 10',
            width: 400,
            bodyPadding: 10,
        },

        {
            xtype: 'textfield',
            hideLabel: true,
            flex: 1,
            listeners: {
                specialkey: function (field, e) {
                    if (e.getKey() === e.ENTER) {

                        Ext.getStore('store1').filterBy(function (record, id) {
                            const recordName = record.get('name').toLowerCase();
                            const recordField = field.lastValue.toLowerCase();
                            return recordName.includes(recordField);
                        });

                    }
                }
            }
        },
        {
            xtype: 'label',
            html: '<h2>Список товаров</h2>',
            margin: 5,
        }, {
            xtype: 'grid',
            store: 'store1',
            width: 'fit',
            margin: 5,
            listeners: {
                itemclick: function (view, record) {
                    var f = Ext.create('Ext.form.Panel', {
                        renderTo: Ext.getBody(),
                        requires: [
                            'TestApp.view.panel.PanelController'
                        ],
                        reference: 'popupWindow',
                        xtype: 'popupWindow',
                        //controller: 'panel',
                        title: 'Карточка товара: ' + record.data.name,
                        height: 230,
                        width: 350,
                        bodyPadding: 10,
                        floating: true,
                        closable: true,


                        defaultType: 'textfield',
                        items: [
                            {
                                fieldLabel: 'ID',
                                name: 'id',
                                xtype: 'numberfield',
                                disabled: true
                            },
                            {
                                fieldLabel: 'Наименование',
                                name: 'desc',
                                xtype: 'textfield',
                                disabled: true
                            },
                            {
                                fieldLabel: 'Цена',
                                name: 'price',
                                id: 'price_val',
                                xtype: 'numberfield',
                                disabled: false,
                                allowDecimals: true,
                                stepValue: 0.01,
                                minValue: 0,
                                step: 0.1,


                            },
                            {
                                fieldLabel: 'Кол-во',
                                name: 'quantity',
                                id: 'quantity_val',
                                xtype: 'numberfield',
                                disabled: false,
                                minValue: 0,
                            }

                        ],

                        buttons: [{
                            text: 'Сохранить',
                            formBind: true,
                            enableKeyEvents: true,
                            listeners: {
                                click: function (b, e) {
                                    if ((record.data.price == Ext.getCmp('price_val').getValue()) && (record.data.quantity == Ext.getCmp('quantity_val').getValue())) {
                                        f.destroy()
                                    } else {
                                        alert('Внимание! Данные изменены!')
                                        f.updateRecord(record)
                                        f.destroy()
                                    }

                                },

                            }

                        },
                            {
                                text: 'Отмена',
                                formBind: true,
                                enableKeyEvents: true,
                                listeners: {
                                    click: function () {
                                        f.destroy()
                                    },

                                }


                            }]


                    });
                    f.show();
                    f.loadRecord(record);
                },
            },

            columns: [
                {
                    text: 'ID', dataIndex: 'id', flex: 1, sortable: true
                },
                {
                    text: 'Имя', dataIndex: 'name', flex: 1, sortable: true
                },
                {
                    text: 'Описание', dataIndex: 'desc', flex: 1, sortable: true
                },
                {
                    text: 'Цена', dataIndex: 'price', flex: 1, sortable: true,
                    allowDecimals: true,
                    //decimals: 2,
                    stepValue: 0.01,
                    step: 0.1,
                    minValue: 0.01,
                },

                {
                    text: 'Кол-во', dataIndex: 'quantity', flex: 1, sortable: true,
                    renderer: function (value, meta) {
                        if (parseInt(value) < 1) {
                            meta.style = "background-color:red;";
                        } else {
                            meta.style = "background-color:none;";
                        }
                        return value;
                    }

                }]
        }],
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'store1',
        dock: 'bottom',
        displayInfo: true
    }],
});









