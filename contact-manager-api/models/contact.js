const mongoose = require('./mongo'); //importing connection config
const autoIncrement = require('mongoose-auto-increment'); // for auto incrementing during
const Schema = mongoose.Schema;

//schema 
const Contact = new Schema(
    {
        contactId: Number,
        name: String,
        phone: String,
        email: String,
        status: String,
        createdBy: String,
        createdOn: { type: Date, default: Date.now },
        updatedBy: String,
        updatedOn: { type: Date, default: Date.now }
    }
);

Contact.plugin(autoIncrement.plugin, {model:'Contact', field:'contactId', startAt: 1});
module.exports = mongoose.model('Contact', Contact);