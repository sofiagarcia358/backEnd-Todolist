
require('dotenv').config();
const express = require('express');
const app = express();

//cors
const cors = require('cors');
app.use(cors({
  origin: ['http://localhost:5500', 'http://127.0.0.1:5500', 'https://todo-list-ou7j.onrender.com','https://sofiagarcia358.github.io/Todo_list/'],
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
