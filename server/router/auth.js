const express = require('express');
const axios = require('axios');
const router = express.Router();
const _ = require("lodash");



// const dbUrl = 'mongodb+srv://covid19tracker:xd5duo5vZHG9BpnX@cluster0.bt3xj.mongodb.net/covid19trackerdb?retryWrites=true&w=majority';
// mongoose.connect(dbUrl,  { useNewUrlParser: true, useUnifiedTopology: true, 'useFindAndModify': false});


// const storeSchema = mongoose.Schema({
//     name : String,
//     address : String,
//     contact : String,
//     medicine : String,
//     district : String
// });

// const Store = mongoose.model('Store', storeSchema);

const Store = require('../model/storeSchema');


router.post("/addlead",function(req,res){
    const storeName = req.body.storeName;
    const storeDistrict = _.capitalize(req.body.district);
    const storeContact = _.capitalize(req.body.contact);
    const storeAddress = _.capitalize(req.body.contact);
    const storeMedicine = _.capitalize(req.body.medicine);
  
    // console.log(storeName);
    // console.log(storeDistrict);
    // console.log(storeContact);
    // console.log(storeAddress);
    // console.log(storeMedicine);
  
    const store = new Store({
        name : storeName,
        address : storeDistrict,
        contact : storeContact,
        medicine : storeMedicine,
        district : storeAddress
      })

    store.save().then(() => {
        console.log("data sent cuccessfully");
        res.status(201).json({message: "Data Saved Successfully" });
    }).catch((err) => res.status(500).json({error: "Failed to store the data "}));
  
});


router.get("/medicines",function(req,res){

    Store.find({},function(err,foundItems){
        res.send({newListItems: foundItems});
    })
  
    
});





router.post('/pinsearch', (req, res) => {
    console.log(req.body);
    var pincode = req.body.pincode;
    var today = new Date();
    var date = today.toJSON().slice(0, 10);
    var nDate = date.slice(8, 10) + '-' + date.slice(5, 7) + '-' + date.slice(0, 4);
    let pincodeconfig = {
        method: 'get',
        url: 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=' + pincode +'&date=' + nDate ,
        headers: {
            'accept': 'application/json',
            'Accept-Language': 'hi_IN',
            'User-Agent': 'hvs42'
        }
      };
      
        axios(pincodeconfig)
                .then((response) => {
                    res.send(response.data);
                })
                .catch(error => {
                    res.send(error);
                });
    
    // res.send("mera register page");
});


router.post('/distsearch', (req, res) => {
    console.log(req.body);
    var distid = req.body.distcode;
    var today = new Date();
    var date = today.toJSON().slice(0, 10);
    var nDate = date.slice(8, 10) + '-' + date.slice(5, 7) + '-' + date.slice(0, 4);
    let districtconfig = {
        method: 'get',
        url: 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=' + distid + '&date=' + nDate,
        headers: {
            'accept': 'application/json',
            'Accept-Language': 'hi_IN',
            'User-Agent': 'covid19'
        }
      };
      
        axios(districtconfig)
                .then((response) => {
                    res.send(response.data);
                })
                .catch(error => {
                    res.send(error);
                });
    
    // res.send("mera register page");
});

module.exports = router;