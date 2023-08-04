const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    obj = [{
        "id" : "1",
        "date":"September 2017" ,
        "header":"Some news 1" ,
        "content":"Text 1"
      },
      {
        "id" : "2",
        "date":"Oktober 2017" ,
        "header":"Some news 2" ,
        "content":"Text 2"
      },
      {
        "id" : "3",
        "date":"November 2017" ,
        "header":"Some news n" ,
        "content":"Text n"
      }]
    res.json(obj)
})

module.exports = router