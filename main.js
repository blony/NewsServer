const express = require('express')
const axios = require('axios')
const cors = require('cors')


const app = express()
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())
app.get('/latlng',(req,res,next)=> {
    let from = req.query.from
    let to = req.query.to
    let latlng = req.query.latlng
    async function getAPI(i,o,points) {
    let res = await axios.get('http://api.gpsspg.com/convert/coord',{
        params: {
            oid: 6778,
            from: i,
            to: o,
            latlng: points
        }
    })
    return res
   }
   getAPI(from,to,latlng).then((obj)=>{
    let points = obj.data.result
    res.json(points)
   })
})

app.listen(9697, ()=> {
    console.log('服务启动成功！')
})