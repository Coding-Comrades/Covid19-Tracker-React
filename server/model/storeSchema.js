const mongooose = require('mongoose');

const storeSchema = mongooose.Schema({
    name : String,
    address : String,
    contact : String,
    medicine : String,
    district : String
});

const Store = mongooose.model('Store', storeSchema);

module.exports = Store;