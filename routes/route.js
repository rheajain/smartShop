var express = require('express');
var router = express.Router();

router.get("/", function(req, res){
    if(req.user.latitude && req.user.longitude){
        
    }
});

module.exports = router;