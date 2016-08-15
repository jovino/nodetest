var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
module.exports.model = mongoose.model('Site', new Schema({
    name: String,
    desc: String,
    definition: String,
    html: String
    

}));
 
 
module.exports.form = [
    {
        "name": "_id",
        "type": "hidden",
        "label": "_id"
    },
    {
        "name": "name",
        "type": "text",
        "label": "Name"
    },
    {
        "name": "desc",
        "type": "text",
        "label": "Description"
    },
      {
        "name": "html",
        "type": "code",
        "label": "Html"
    }
];
 
module.exports.list= [
    {
        "name": "_id",
        "type": "hidden",
        "label": "_id"
    },
    {
        "name": "name",
        "type": "text",
        "label": "Name"
    },
    {
        "name": "desc",
        "type": "text",
        "label": "Description"
    },
      {
        "name": "html",
        "type": "file",
        "label": "Html"
    }
];