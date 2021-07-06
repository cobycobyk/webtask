const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  name: {type: String},
  desc: {type: String},
  img: {type: String}
}, {
  timestamps: true
});

const carSchema = new Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  priceLow: { type: String, required: true },
  priceHigh: { type: String, required: true },
  mileage: { type: Number, required: true },
  vin: { type: String, required: true },
  cylinders: { type: String, required: true },
  citympg: { type: Number, required: true },
  highwaympg: { type: Number, required: true },
  engine: { type: String, required: true },
  images: [imageSchema],
}, {
  timestamps: true
});

module.exports = mongoose.model('Car', carSchema);