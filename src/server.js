const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const knex = require('knex');
const app = express();

const database = knex({
    client: 'pg',
    connection: {
        host : 'localhost',
        user : 'postgres',
        password : 'shenlin',
        database : 'retailer_db'
    }
});


app.use(cors());
app.use(bodyParser.json());

app.get('/test', (req, res) => res.send('Hello World!'))

app.get('/customers', (req, res)=>{
    console.log('in customers')
    database.select('*').from('customers').then(data=>{
        res.setHeader('Content-Type', 'application/json');
        res.send(data)
    });  
    consle.log('hello')
})



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// database.select('*').from('inventory').then(data=>{
//     app.get('/inventory', (req, res)=>{
//         res.send(JSON.stringify(data))
//     })
// });

// database.select('*').from('items').then(data=>{
//     app.get('/items', (req, res)=>{
//         res.send(JSON.stringify(data))
//     })
// });

// database.select('*').from('items_sold').then(data=>{
//     app.get('/items_sold', (req, res)=>{
//         res.send(JSON.stringify(data))
//     })
// });

// database.select('*').from('purchases').then(data=>{
//     app.get('/purchases', (req, res)=>{
//         res.send(JSON.stringify(data))
//     })
// });

// database.select('*').from('stores').then(data=>{
//     app.get('/stores', (req, res)=>{
//         res.send(JSON.stringify(data))
//     })
// });

// database.select('*').from('suppliers').then(data=>{
//     app.get('/suppliers', (req, res)=>{
//         res.send(JSON.stringify(data))
//     })
// });


app.listen(8000,()=>{
    console.log('Server is running on port 8000')
});







