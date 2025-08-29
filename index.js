
require('dotenv').config();
const express = require('express');
const app = express();

//cors
const cors = require('cors');
app.use(cors({
  origin: "*",
  methods: ['GET','POST','OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


const getTablas = require('./routers/get/obtenerTablas');
app.use(getTablas);

const getTareas = require('./routers/get/obtenerTareas');
app.use(getTareas);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
