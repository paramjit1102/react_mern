const express=require('express');
const app=express();
const path=require('path');
const port=process.env.port||8000;
const bodyParser = require('body-parser');
const router=require('./router')
const { sequelize } = require('../models');
const cores=require('./cores')

app.use(bodyParser.json());
// Enable CORS
app.use(cores())
app.use(express.static(path.join(__dirname, '../../myapp/build')));
router(app)

// Sync the database and start the server
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});
