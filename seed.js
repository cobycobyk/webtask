require('dotenv').config();
require('./config/database');

const Car = require('./models/car');

(async function() {
  
  await Car.deleteMany({});
  const cars = await Car.create([
    {name: "Audi RS5",
    year: 2018,
    priceLow: "63,000",
    priceHigh: "68,990",
    mileage: 13049,
    vin: "WUAPWAF51JA905206",
    cylinders: "V6 Twin Turbo",
    citympg: 18,
    highwaympg: 26,
    engine: "2.9 Liter"}
  ])
  
  const images = await Car.findOne({name: 'Audi RS5'}, function(err, car) {
    console.log(car)
    car.images.push(
      {name: "hero", desc: "hero", img: "https://cdnblob.fastly.carvana.io/2001112991/pre/original/2001112991-edc-03.jpg?dpr=1&width=383&v=2021-06-23T18:28:21.437Z"},
    )
    console.log(car.images)
    car.save()
  })
  console.log(cars)

  process.exit()

})();