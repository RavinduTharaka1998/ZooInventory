const express = require('express');
const zooRoute = express.Router();

let Foods = require('./food');
let Medicines = require('./medicine');
let Equipments = require('./equipment');


//food api 
zooRoute.route('/addfood').post(function (req,res){
    console.log("Food Add called.");
    let foods = new Foods(req.body);
    foods.save()
        .then(foods => {
            res.status(200).json({'food' : 'food is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

zooRoute.route('/food').get(function (req, res){
    console.log("Food Get called.");
    Foods.find(function (err,food){
        if(err)
            console.log("your erorr :" +err);
        else{
            res.json(food);
        }
    });
});

zooRoute.route('/editfood/:id').get(function (req,res){
    let id = req.params.id;
    console.log("Food Edit called." +id);
    Foods.findById(id, function (err,foods){
        res.json(foods);
    });
});

zooRoute.route('/updatefood/:id').post(function (req,res){
    let id = req.params.id;
    console.log("Food Update called." +id);
    Foods.findById(id, function (err, foods){
        if(!foods)
            res.status(404).send("Data is not found??");
        else{
            foods.itemno = req.body.itemno;
            foods.date = req.body.date;
            foods.category = req.body.category;
            foods.name = req.body.name;
            foods.qty = req.body.qty;
            foods.edate = req.body.edate;
            foods.uprice = req.body.uprice;
            foods.vendor = req.body.vendor;
            foods.reorderlevel = req.body.reorderlevel;


            foods.save().then(foods => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

zooRoute.route('/deletefood/:id').get(function(req,res){
    Foods.findByIdAndRemove({_id:req.params.id}, function (err, food){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

zooRoute.route('/vegetable/:id').get(function (req,res){
    let id = req.params.id;
    console.log("Vegetable Food Get called " +id);
    Foods.findOne({$and:[{category : id}]}, function (err,foods){
        //console.log(foods);
        res.json(foods);
    });
});

zooRoute.route('/fruits/:id').get(function (req,res){
    let id = req.params.id;
    console.log("Fruits Food Get called " +id);
    Foods.findOne({$and:[{category : id}]}, function (err,foods){
        //console.log(foods);
        res.json(foods);
    });
});

zooRoute.route('/meats/:id').get(function (req,res){
    let id = req.params.id;
    console.log("Meats Food Get called " +id);
    Foods.findOne({$and:[{category : id}]}, function (err,foods){
        //console.log(foods);
        res.json(foods);
    });
});

zooRoute.route('/fish/:id').get(function (req,res){
    let id = req.params.id;
    console.log("Fish Food Get called " +id);
    Foods.findOne({$and:[{category : id}]}, function (err,foods){
        //console.log(foods);
        res.json(foods);
    });
});

zooRoute.route('/milk/:id').get(function (req,res){
    let id = req.params.id;
    console.log("Fish Food Get called " +id);
    Foods.findOne({$and:[{category : id}]}, function (err,foods){
        //console.log(foods);
        res.json(foods);
    });
});



//medicine api
zooRoute.route('/addmedicine').post(function (req,res){
    console.log("Medicines Add called.");
    let medicines = new Medicines(req.body);
    medicines.save()
        .then(medicines => {
            res.status(200).json({'medicine' : 'medicines is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

zooRoute.route('/medicine').get(function (req, res){
    console.log("Medicine Get called.");
    Medicines.find(function (err,medicines){
        if(err)
            console.log("your erorr :" +err);
        else{
            res.json(medicines);
        }
    });
});

zooRoute.route('/editmedicine/:id').get(function (req,res){
    let id = req.params.id;
    console.log("Medicines Edit called." +id);
    Medicines.findById(id, function (err,medicines){
        res.json(medicines);
    });
});

zooRoute.route('/updatemedicine/:id').post(function (req,res){
    let id = req.params.id;
    console.log("Medicines Update called." +id);
    Medicines.findById(id, function (err, medicines){
        if(!medicines)
            res.status(404).send("Data is not found??");
        else{
            medicines.itemno = req.body.itemno;
            medicines.date = req.body.date;
            medicines.name = req.body.name;
            medicines.qty = req.body.qty;
            medicines.edate = req.body.edate;
            medicines.uprice = req.body.uprice;
            medicines.vendor = req.body.vendor;
            medicines.reorderlevel = req.body.reorderlevel;


            medicines.save().then(medicines => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

zooRoute.route('/deletemedicine/:id').get(function(req,res){
    Medicines.findByIdAndRemove({_id:req.params.id}, function (err, medicines){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});




//equipment api
zooRoute.route('/addequipment').post(function (req,res){
    console.log("Equipment Add called.");
    let equipments = new Equipments(req.body);
    equipments.save()
        .then(equipments => {
            res.status(200).json({'equipment' : 'equipment is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

zooRoute.route('/equipment').get(function (req, res){
    console.log("Equipments Get called.");
    Equipments.find(function (err,equipments){
        if(err)
            console.log("your erorr :" +err);
        else{
            res.json(equipments);
        }
    });
});

zooRoute.route('/editequipment/:id').get(function (req,res){
    let id = req.params.id;
    console.log("Equipments Edit called." +id);
    Equipments.findById(id, function (err,equipments){
        res.json(equipments);
    });
});

zooRoute.route('/updateequipment/:id').post(function (req,res){
    let id = req.params.id;
    console.log("Equipments Update called." +id);
    Equipments.findById(id, function (err, equipments){
        if(!equipments)
            res.status(404).send("Data is not found??");
        else{
            equipments.itemno = req.body.itemno;
            equipments.date = req.body.date;
            equipments.category = req.body.category;
            equipments.name = req.body.name;
            equipments.qty = req.body.qty;
            equipments.lastcheckdate = req.body.lastcheckdate;
            equipments.nextcheckdate = req.body.nextcheckdate;
            equipments.vendor = req.body.vendor;
            equipments.maintaner = req.body.maintaner;


            equipments.save().then(equipments => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

zooRoute.route('/deleteequipment/:id').get(function(req,res){
    Equipments.findByIdAndRemove({_id:req.params.id}, function (err, equipments){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

// zooRoute.route('/adminorders/:id').get(function (req, res){

//     let station = req.params.id;
//     console.log("your station is "+station);
//     Orders.find({$and:[{station : station}]},function (err,ord){
//         if(err)
//             console.log(err);
//         else{
//             res.json(ord)
//         }
//     });
// });

// adminRoutes.route('/adminassigndeliver/:id').post(function (req,res){
//     let id = req.params.id;
//     Orders.findById(id, function (err, orders){
//         if(!orders)
//             res.status(404).send("Data is not found??");
//         else{
            
//             orders.deliveryby = req.body.deliveryby;


//             orders.save().then(orders => {
//                 res.json('Update Complete');
//             })
//                 .catch(err =>{
//                     res.status(400).send("Unable to update data");
//                 });
//         }
//     });
// });


// adminRoutes.route('/adminaddfood').post(function (req,res){
//     let foods = new Foods(req.body);
//     foods.save()
//         .then(foods => {
//             res.status(200).json({'food' : 'customer is added successfull'});
//         })
//         .catch(err => {
//             res.status(400).send("Unable to save database")
//         });
// });

// adminRoutes.route('/adminfood/:id').get(function (req, res){

//     let station = req.params.id;
//     console.log("your station is "+station);
//     Foods.find({$and:[{station : station}]},function (err,food){
//         if(err)
//             console.log(err);
//         else{
//             res.json(food)
//         }
//     });
// });

// adminRoutes.route('/adminfoodedit/:id').get(function (req,res){
//     let id = req.params.id;
//     Foods.findById(id, function (err,foods){
//         res.json(foods);
//     });
// });

// adminRoutes.route('/adminfoodupdate/:id').post(function (req,res){
//     let id = req.params.id;
//     Foods.findById(id, function (err, foods){
//         if(!foods)
//             res.status(404).send("Data is not found??");
//         else{
//             foods.foodname = req.body.foodname;
//             foods.price = req.body.price;
//             foods.size = req.body.size;
//             foods.station = req.body.station;


//             foods.save().then(foods => {
//                 res.json('Update Complete');
//             })
//                 .catch(err =>{
//                     res.status(400).send("Unable to update data");
//                 });
//         }
//     });
// });

// adminRoutes.route('/admindeleteFood/:id').get(function(req,res){
//     Foods.findByIdAndRemove({_id:req.params.id}, function (err, foods){
//         if(err)res.json(err);

//         else res.json('Successfully Removed');
//     });
// });

// adminRoutes.route('/adminadddeliver').post(function (req,res){
//     let delivers = new Delivers(req.body);
//     //alert("deliver backend called");
//     delivers.save()
//         .then(delivers => {
//             res.status(200).json({'deliver' : 'deliver is added successfull'});
//         })
//         .catch(err => {
//             res.status(400).send("Unable to save database")
//         });
// });

// adminRoutes.route('/admindeliver/:id').get(function (req, res){

//     let station = req.params.id;
//     console.log("your station is "+station);
//     Delivers.find({$and:[{station : station}]},function (err,food){
//         if(err)
//             console.log(err);
//         else{
//             res.json(food)
//         }
//     });
// });

// adminRoutes.route('/admindeliveredit/:id').get(function (req,res){
//     let id = req.params.id;
//     Delivers.findById(id, function (err,delivers){
//         res.json(delivers);
//     });
// });

// adminRoutes.route('/admindeliverupdate/:id').post(function (req,res){
//     let id = req.params.id;
//     Delivers.findById(id, function (err, delivers){
//         if(!delivers)
//             res.status(404).send("Data is not found??");
//         else{
//             delivers.name = req.body.name;
//             delivers.phone = req.body.phone;
//             delivers.nic = req.body.nic;
//             delivers.station = req.body.station;


//             delivers.save().then(delivers => {
//                 res.json('Update Complete');
//             })
//                 .catch(err =>{
//                     res.status(400).send("Unable to update data");
//                 });
//         }
//     });
// });

// adminRoutes.route('/admindeleteDeliver/:id').get(function(req,res){
//     Delivers.findByIdAndRemove({_id:req.params.id}, function (err, foods){
//         if(err)res.json(err);

//         else res.json('Successfully Removed');
//     });
// });


// adminRoutes.route('/adminaddtrain').post(function (req,res){
//     let trains = new Trains(req.body);
//     trains.save()
//         .then(trains => {
//             res.status(200).json({'train' : 'train is added successfull'});
//         })
//         .catch(err => {
//             res.status(400).send("Unable to save database")
//         });
// });

// adminRoutes.route('/admintrain/:id').get(function (req, res){

//     let station = req.params.id;
//     console.log("your station is "+station);
//     Trains.find({$and:[{station : station}]},function (err,train){
//         if(err)
//             console.log(err);
//         else{
//             res.json(train)
//         }
//     });
// });

// adminRoutes.route('/admintrainedit/:id').get(function (req,res){
//     let id = req.params.id;
//     Trains.findById(id, function (err,trains){
//         res.json(trains);
//     });
// });

// adminRoutes.route('/admintrainupdate/:id').post(function (req,res){
//     let id = req.params.id;
//     Trains.findById(id, function (err, trains){
//         if(!trains)
//             res.status(404).send("Data is not found??");
//         else{
//             trains.name = req.body.name;
//             trains.arrival = req.body.arrival;
//             trains.deparcher = req.body.deparcher;
//             trains.station = req.body.station;


//             trains.save().then(trains => {
//                 res.json('Update Complete');
//             })
//                 .catch(err =>{
//                     res.status(400).send("Unable to update data");
//                 });
//         }
//     });
// });

// adminRoutes.route('/admindeleteTrain/:id').get(function(req,res){
//     Trains.findByIdAndRemove({_id:req.params.id}, function (err, trains){
//         if(err)res.json(err);

//         else res.json('Successfully Removed');
//     });
// });



// //search function implement
// adminRoutes.route('/adminorderssearch/:pathParam1?/:pathParam2?').get(function (req, res){
//     let search = req.params.pathParam1;
//     let station = req.params.pathParam2;
//     console.log("your search is "+search);
//     console.log("your search is "+station);
   
//     Orders.find({$and:[{$or: [{date: search}, {trainname: search},{email: search},{phone: search},{deliveryby: search}]},{station: station}]},function (err,srch){ 
   
//         if(err)
//             console.log(err);
//         else{
//             res.json(srch)
//         }
//     });
// });

// adminRoutes.route('/adminsearchdeliver/:pathParam1?/:pathParam2?').get(function (req, res){
//     let search = req.params.pathParam1;
//     let station = req.params.pathParam2;
//     console.log("your search is "+search);
//     console.log("your search is "+station);
   
//     Delivers.find({$and:[{$or: [{name: search}, {phone: search},{nic: search}]},{station: station}]},function (err,srch){ 
   
//         if(err)
//             console.log(err);
//         else{
//             res.json(srch)
//         }
//     });
// });

// adminRoutes.route('/adminsearchtrain/:pathParam1?/:pathParam2?').get(function (req, res){
//     let search = req.params.pathParam1;
//     let station = req.params.pathParam2;
//     console.log("your search is "+search);
//     console.log("your search is "+station);
   
//     Trains.find({$and:[{$or: [{name: search}, {arrival: search},{deparcher: search}]},{station: station}]},function (err,srch){ 
   
//         if(err)
//             console.log(err);
//         else{
//             res.json(srch)
//         }
//     });
// });

// adminRoutes.route('/adminsearchfood/:pathParam1?/:pathParam2?').get(function (req, res){
//     let search = req.params.pathParam1;
//     let station = req.params.pathParam2;
//     console.log("your search is "+search);
//     console.log("your search is "+station);
   
//     Foods.find({$and:[{$or: [{foodname: search}, {price: search},{size: search}]},{station: station}]},function (err,srch){ 
   
//         if(err)
//             console.log(err);
//         else{
//             res.json(srch)
//         }
//     });
// });


module.exports = zooRoute;