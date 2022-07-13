const mysql =  require('mysql')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'password',
    database : 'curd'
});


app.use(bodyParser.urlencoded({extended:true}))

app.use(express.json())

app.use(cors())


db.connect((con) =>{
    if(!con) console.log("DATA BASE CONNECTED");
    else console.log("gone case " +JSON.stringify(con, undefined,2))
})

// db.connect()
// .then(con => console.log("successfull"))
// .catch(err  => console.log("error"))

app.post("/api/login", (req,res) => {


    const email = req.body.email
    const password = req.body.password


    const sqlInsert = "INSERT INTO credentials (username, password) VALUES (?,?);"
    db.query(sqlInsert, [email,password], (err,result) => {
            console.log(result)

    })
        
})

app.listen(3001, () =>{
    console.log("running")
     })
