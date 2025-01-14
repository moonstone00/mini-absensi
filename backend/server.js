const express = require('express');
const cors = require('cors');
const sequelize = require('./db.config');
const userEndpoint = require('./routes/users');
const absensiEndpoint = require('./routes/absensi');
const User = require('./models/users'); // Import model User

const port = 3200;

const app = express();
app.use(cors());
app.use(express.json());

// Ini tuh akal2 an bang dea
sequelize.sync()
    .then(() => console.log('Database Ready!!!'))
    .catch(err => console.error('Database sync failed:', err));

app.use('/users', userEndpoint);
app.use('/absensi', absensiEndpoint);

app.listen(port, () => console.log(`running server on port ${port}`));
