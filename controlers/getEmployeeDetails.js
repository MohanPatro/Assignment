const connection=require('../database/connection');


exports.employeeDetails=(req, res) => {

    const sql = 'SELECT * FROM Leaving'; 
  
    connection.query(sql, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.status(200).json(results);
      }
    });
  }