// controllers/propertyController.js

const Property = require('../models/PropertyModel');

exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createProperty = async (req, res) => {
  try {
    const {
      developerName,
      projectName,
      unitName,
      unitType,
      level,
      location,
      exposure,
      size,
      bedRoom,
      bathRoom,
      parking,
      locker,
      balcony,
    } = req.body;

    const newProperty = new Property({
      developerName,
      projectName,
      unitName,
      unitType,
      level,
      location,
      exposure,
      size,
      bedRoom,
      bathRoom,
      parking,
      locker,
      balcony,
    });

    await newProperty.save();
    res.json(newProperty);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateProperty = async (req, res) => {
  try {
    const {
      developerName,
      projectName,
      unitName,
      unitType,
      level,
      location,
      exposure,
      size,
      bedRoom,
      bathRoom,
      parking,
      locker,
      balcony,
    } = req.body;

    const updatedProperty = await Property.findByIdAndUpdate(
      req.params.id,
      {
        developerName,
        projectName,
        unitName,
        unitType,
        level,
        location,
        exposure,
        size,
        bedRoom,
        bathRoom,
        parking,
        locker,
        balcony,
      },
      { new: true }
    );

    if (!updatedProperty) {
      return res.status(404).json({ error: 'Property not found' });
    }

    res.json(updatedProperty);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    const deletedProperty = await Property.findByIdAndDelete(req.params.id);

    if (!deletedProperty) {
      return res.status(404).json({ error: 'Property not found' });
    }

    res.json(deletedProperty);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
