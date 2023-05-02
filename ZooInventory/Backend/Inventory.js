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
    Foods.find({$and:[{category : id}]}, function (err,foods){
        //console.log(foods);
        res.json(foods);
    });
});

zooRoute.route('/fruits/:id').get(function (req,res){
    let id = req.params.id;
    console.log("Fruits Food Get called " +id);
    Foods.find({$and:[{category : id}]}, function (err,foods){
        //console.log(foods);
        res.json(foods);
    });
});

zooRoute.route('/meats/:id').get(function (req,res){
    let id = req.params.id;
    console.log("Meats Food Get called " +id);
    Foods.find({$and:[{category : id}]}, function (err,foods){
        //console.log(foods);
        res.json(foods);
    });
});

zooRoute.route('/fish/:id').get(function (req,res){
    let id = req.params.id;
    console.log("Fish Food Get called " +id);
    Foods.find({$and:[{category : id}]}, function (err,foods){
        //console.log(foods);
        res.json(foods);
    });
});

zooRoute.route('/milk/:id').get(function (req,res){
    let id = req.params.id;
    console.log("Fish Food Get called " +id);
    Foods.find({$and:[{category : id}]}, function (err,foods){
        //console.log(foods);
        res.json(foods);
    });
});

zooRoute.route('/searchfood/:id').get(function (req,res){
    let id = req.params.id;
    console.log("Search Food Get called " +id);
    Foods.find({$or:[{itemno : id},{date : id},{category : id},{name : id},{qty : id},{edate : id},{uprice : id},{vendor : id},{reorderlevel : id}]}, function (err,foods){
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

zooRoute.route('/searchmedicine/:id').get(function (req,res){
    let id = req.params.id;
    console.log("Search Medicine Get called " +id);
    Medicines.find({$or:[{itemno : id},{date : id},{name : id},{qty : id},{edate : id},{uprice : id},{vendor : id},{reorderlevel : id}]}, function (err,foods){
        //console.log(foods);
        res.json(foods);
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

zooRoute.route('/searchequipment/:id').get(function (req,res){
    let id = req.params.id;
    console.log("Search Equipment Get called " +id);
    Equipments.find({$or:[{itemno : id},{date : id},{category : id},{name : id},{qty : id},{lastcheckdate : id},{nextcheckdate : id},{vendor : id},{maintaner : id}]}, function (err,foods){
        //console.log(foods);
        res.json(foods);
    });
});


module.exports = zooRoute;