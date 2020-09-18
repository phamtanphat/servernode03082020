const express = require('express')
var {json} = require('body-parser')
const app = express()
 
app.use(json())
app.get('/cong/:a/:b', function (req, res) {
//   const name = req.query.name
//   const name = req.params.name
    const {a , b} = req.params
    if(isNaN(a) || isNaN(b)){
        res.send({success : false ,message : "Giá trị không phải là số"})
    }else{
        res.send({success : true , value : parseInt(a) + parseInt(b)})
    }
    res.end();
})

app.post('/tru' , function(req ,res){
    console.log(req.body)
})
 
app.listen(3000)




