const express = require('express')
const app = express()
const port = 3000

const users = [] // 회원데이터(명부)

app.use(express,json()) // json 데이터 형식 해석

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {// 서버의 지원을 획득
    res.send('Hello World!')
})
  
app.post('create', (req, res) => {
    users.push(req.body);
    console.log("회원 데이터", users
    )})
