const express = require('express')
const cors = require('cors')


const app = express()
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

// 将路由文件引入
const route = require('./routes/index');

//初始化所有路由
route(app);

app.listen(5657, ()=> {
    console.log('服务启动成功！')
})