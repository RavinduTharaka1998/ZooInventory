const mongoose = require('mongoose');
const Schema = mongoose.Schema;

Equipments = new Schema({
    itemno: {
        type: String
    },
    date: {
        type: String
    },
    category: {
        type: String
    },
    name: {
        type: String
    },
    qty: {
        type: String
    },
    lastcheckdate: {
        type: String
    },
    nextcheckdate: {
        type: String
    },
    vender: {
        type: String
    },
    maintaner: {
        type: String
    }
}, {
    collation: 'equipments'
});

module.exports = mongoose.model('Equipments',Equipments);