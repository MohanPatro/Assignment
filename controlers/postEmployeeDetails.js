const connection=require('../database/connection');



exports.postEmployeeDetails=(req, res) => {

    const department=req.body.department;
    const role=req.body.role;
    const shift=req.body.shift;
    const brandSD=req.body.brandSD;
    const deviceDate=req.body.deviceDate;
    const engineerName=req.body.engineerName;
    const inChargeName=req.body.inChargeName;

  
  
    const sql = `
      INSERT INTO employeeData (department, role, shift, brandSD, deviceDate, engineerName, inChargeName)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
  
    connection.query(
      sql,
      [department, role, shift, brandSD, deviceDate, engineerName, inChargeName],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          res.status(201).json({ message: 'Record added successfully' });
        }
      }
    );
  }