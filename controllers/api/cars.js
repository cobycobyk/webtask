const Car = require('../../models/car');

module.exports = {
  show,
}

async function show(req, res) {
  const car = await Car.findOne({name: 'Audi RS5'});
  res.json(car);
}