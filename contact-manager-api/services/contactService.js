// 1.connect to db 
var Contact = require('../models/contact');

// CREATE Contact
exports.createContact = function (contactData, callback) {
    console.log(contactData);
    console.log(callback);

    // 2. constructing the qurey
    var contactDao = new Contact(contactData);
    // 3. executing the query
    contactDao.save(function (err, data) {  //4. get the result
        if (!err) {
            console.log(data);
        } else {
            console.log(err);
        }
        callback(err, data); // 5. send the result

    });
    // contactData.id = 1;
    // var status = {
    //     code: 200,
    //     info: 'Saved Successfully',
    //     data: contactData
    // }

    // callback(false, status);
}

// GET Contacts
exports.getContacts = function (callback) {
    Contact.find(function(err,data){
        if(!err){
            console.log(data);
        }else{
            console.log(err);
        }
        callback(err,data);
    });
    
    // var contactList = [{
    //     id: 1,
    //     name: 'JD',
    //     email: 'j@d.com'
    // }]
}


// GET Contact by ID
exports.getContactByID = function (requestID, callback) {
    console.log(requestID);
    Contact.findOne({contactId : requestID},function(err,data){
        if(!err){
            console.log(data);
        }else{
            console.log(err);
        }
        callback(err, data);
    });



    // let contactData = {
    //     name: 'Mogee',
    //     phone: 123456,
    //     email: 'a@b.com'
    // }
    // contactData.id = requestID;
    // callback(false, contactData);
}

// PUT Contact

exports.updateContact = function (urlID, requestData, callback) {
    console.log(requestData);
    console.log(urlID);
    var query = {contactId: urlID};
    
    console.log(query);
    Contact.findOneAndUpdate(query, requestData, function(err){
        let status; 
        if(!err){
            status = {
                    code: 200,
                    info: 'Update Successfully'
                }
            console.log('Sucess');
        }else{
            console.log(err);
        }
        callback(err,status);
    });



    // requestData.id = urlID;
    // let status = {
    //     code: 200,
    //     info: 'Update Successfully',
    //     data: requestData
    // }
    // callback(false, status);
}

// DELETE Contact
exports.deleteContact = function (callback) {
    console.log('Delete function');
    Contact.deleteOne({name:'James'},function(err){
        let status
        if(!err){
            status = {
                    code: 200,
                    info: 'Deleted Successfully'
                }
        }else{
            console.log(err);
        }
        callback(err,status);
    });
    // let status = {
    //     code: 200,
    //     info: 'Deleted Successfully'
    // }
    // callback(false, status);
}