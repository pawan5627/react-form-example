// models/Property.js

const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  developerName: String,
  projectName: String,
  unitName: String,
  unitType: String,
  level: String,
  location: String,
  exposure: String,
  size: String,
  bedRoom: Number,
  bathRoom: Number,
  parking: Boolean,
  locker: Boolean,
  balcony: Boolean,
});

const Property = mongoose.model('PropertyModel', propertySchema);

module.exports = Property;
