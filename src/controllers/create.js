const Food = require('../models/food');

exports.createFood = (req, res, next) => {
    const name = req.body.name;
    const serving = req.body.serving;
    const calories = req.body.calories;
    const protein = req.body.protein;
    const carbs = req.body.carbs;
    const fat = req.body.fat;
    const barcode = req.body.barcode;
    const image = req.body.image;

    const food = new Food({
        name: name,
        serving: serving,
        calories: calories,
        protein: protein,
        carbs: carbs,
        fat: fat,
        barcode: barcode,
        image: image
    });
    food
        .save()
        .then(result => {
            console.log('Created Food');
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
        });
  };