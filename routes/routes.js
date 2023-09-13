const express=require('express');

const router=express.Router()

const getEmployeeData=require('../controlers/getEmployeeDetails')
const postEmployeeData=require('../controlers/postEmployeeDetails')


router.get('/get/employeeData',getEmployeeData.employeeDetails)

router.post('/post/employeeData',postEmployeeData.postEmployeeDetails)


module.exports=router