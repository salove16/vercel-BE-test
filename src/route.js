const router = require('express').Router();
const dummyDataController=require("./controller/dummyDataController")
// console.log(getDummyData)

router.get('/data', dummyDataController.getDummyData);

module.exports = router