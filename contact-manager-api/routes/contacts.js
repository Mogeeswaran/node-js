var express = require('express');
var router = express.Router();

var contactService = require('../services/contactService');

/* GET localhost:3000/api/contacts */
router.get('/', function (req, res, next) {

    contactService.getContacts(function (err, data) {
        if (!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    });
    // let contacts = [{
    //     id: 1,
    //     name: 'Mogee',
    //     Phone: '123456',
    //     email: 'a@b.com'
    // }]
    // res.json(contacts);
});

/* POST localhost:3000/api/contacts */
router.post('/', function (req, res, next) {
    console.log(req.body);
    contactService.createContact(req.body, function (err, data) {
        if (!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    });

    // req.body.id = 2;
    // let status = {
    //     code: 200,
    //     info: 'Saved Successfully',
    //     data: req.body
    // }
    // res.json(status);    
});


/* GET with URL Params localhost:3000/api/contacts/:id ==== :id refers to any*/
router.get('/:id', function (req, res, next) {
    //URL Params
    console.log(req.params.id);
    contactService.getContactByID(req.params.id, function (err, data) {
        if (!err) {
            res.json(data);
        } else {
            res.json(err);
        }
    });
    // console.log(req.params);
    // var contact = {
    //     id: req.params.id,
    //     name: 'Mogee',
    //     phone: 123456,
    //     email: 'a@b.com'
    // };
    // res.json(contact);
})

router.put('/:id', function (req, res, next) {
    console.log(req.params.id);
    console.log(req.body);
    contactService.updateContact(req.params.id, req.body, function (err, data) {
        if (!err) {

            contactService.getContactByID(req.params.id, function (_err, _data) {
                if(!_err){
                    res.json(_data);
                }else{
                    res.json(_err);
                }
            });           
        } else {
            res.json(err);
        }
    });
   
});

router.delete('/', function (req, res, next) {
    console.log(req.params.id);
    console.log(req.body);

    contactService.deleteContact(function (err, data) {
        if (!err) {
            res.json(data);
        } else {
            res.json(err);
        }

    });
    //     let status ={
    //         code: 200,
    //         info: 'Deleted Successfully'
    //     }
    //     res.json(status);
});

module.exports = router;
