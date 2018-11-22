<p align="center">
  <img width="600" src="/src/public/logo.png">
  <h3 align="center">nutritional facts without restrictions</h3>
</p>

<br><br>
[![gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg)](https://gitter.im/openfoodbaseproject/community)
[![docs](https://img.shields.io/badge/docs-on%20postman-brightgreen.svg)](https://documenter.getpostman.com/view/5984947/Rzn9uhMB)
![items](https://img.shields.io/badge/items%20in%20db-%3C1k-red.svg)
![license](https://img.shields.io/badge/license-MIT-blue.svg)

## About

OpenFoodBase is a **free** and **open source** database which contains nutritional facts on food.
The **live** database can be found <a href="https://openfoodbase.herokuapp.com">here</a>.

## Getting Started

Creating and searching food in the database can be done with a set of API calls.

**Detailed information** about the different API calls can be found <a href="https://documenter.getpostman.com/view/5984947/Rzn9uhMB">here</a>. Please use this API calls with respect to the OpenFoodBase project and to other users! Please do **not** insert wrong informartion! If you made a mistake, please contact me!

Here are a few example calls:

#### 📊 List all food items in the database

(by default the number of food items is limited to 20)

Perform a GET request to:

```http
https://openfoodbase.herokuapp.com/search/food/all
```

this leads to the following result (truncated):

```json
[
  {
    "_id": "5c25006c21e4dfd83dc151c3",
    "name": "Apple",
    "serving": "100g",
    "calories": 54,
    "protein": 0.3,
    "carbs": 14.3,
    "fat": 0.1,
    "barcode": 123123123,
    "image": "putyourimageurlhere",
    "__v": 0
  },
```

#### 🛠 Create a new food item

Perform a POST request with the body:
```json
{
	"name": "Apple",
	"serving": "100g",
	"calories": 54,
	"protein": 0.3,
	"carbs": 14.3,
	"fat": 0.1
}
```
to:
```http
https://openfoodbase.herokuapp.com/create/food
```

## Run API locally

#### 🔌 Installation and Start

If you wish to run the API on your local machine, use the following instructions.

Make sure to have Node installed on your system and navigate to the `src` directory.

```bash
cd src
```
 
run:

```bash
npm install
````

to start the Node server:

```bash
npm run dev
````

Congratulations, you are now running OpenFoodBase on `localhost:3000`! Enjoy 🎉

## Limitations

Please feel free to adapt it to your needs. I would be very grateful to include your inprovements. Thanks for your support!
