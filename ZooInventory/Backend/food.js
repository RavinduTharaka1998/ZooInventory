const mongoose = require('mongoose');
const Schema = mongoose.Schema;

Foods = new Schema({
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
    edate: {
        type: String
    },
    uprice: {
        type: String
    },
    vender: {
        type: String
    },
    reorderlevel: {
        type: String
    }
}, {
    collation: 'foods'
});

module.exports = mongoose.model('Foods',Foods);