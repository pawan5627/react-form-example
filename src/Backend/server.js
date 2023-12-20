// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const propertyRoutes = require('./routes/propertyRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb+srv://manager:admin@cluster0.1nyb66u.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.use('/api', propertyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
