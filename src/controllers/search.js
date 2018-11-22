const Food = require('../models/food');

exports.searchFood = (req, res, next) => {
    var limit = 20;

    if (req.query.limit) {
        limit = Number(req.query.limit);
    }

    if (req.query.id) {
        Food.findById(req.query.id)
            .then(food => {
                res.status(200).json(food);
            })
            .catch(err => {
                console.log(err);
            });
    }
    else if (req.query.name) {
        if (req.query.short) {
            Food.find({ name: { $regex : new RegExp(req.query.name, "i") } })
                .limit(limit)
                .select("-protein -carbs -fat -image")
                .then(food => {
                    res.status(200).json(food);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        else {
            Food.find({ name: { $regex : new RegExp(req.query.name, "i") } })
                .limit(limit)
                .then(food => {
                    res.status(200).json(food);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
    else if (req.query.barcode) {
        Food.find({ barcode: req.query.barcode })
            .then(food => {
                res.status(200).json(food);
            })
            .catch(err => {
                console.log(err);
            });
    }
};

exports.searchAllFood = (req, res, next) => {
    var limit = 20;
    
    if (req.query.limit) {
        limit = Number(req.query.limit);
    }

    if (req.query.short) {
        Food.find()
            .limit(limit)
            .select("-protein -carbs -fat -image")
            .then(foods => {
                res.status(200).json(foods);
            })
            .catch(err => {
                console.log(err);
            });
    }
    else {
        Food.find()
            .limit(limit)
            .then(foods => {
                res.status(200).json(foods);
            })
            .catch(err => {
                console.log(err);
            });
    }
};