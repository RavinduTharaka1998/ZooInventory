const mongoose = require('mongoose');
const Schema = mongoose.Schema;

Medicines = new Schema({
    itemno: {
        type: String
    },
    date: {
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
    collation: 'medicines'
});

module.exports = mongoose.model('Medicines',Medicines);