const mysql2 = require('mysql2');

const pool = mysql2.createPool({
  host: 'b3kvj3xa2g6rtcrqrpac-mysql.services.clever-cloud.com',
  user: 'umutobxrmzmtxrzh',
  password: '5wnMdvt7IxW9hfJAa5d8',
  database: 'b3kvj3xa2g6rtcrqrpac',
});

module.exports = pool.promise();