const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const knex = require('knex');
const app = express();

const database = knex({
    client: 'pg',
    connection: {
        host : '127.0.0.1',
        user : 'postgres',
        password : 'Mm13580373527',
        database : 'retail_db'
    }
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/customers', (req, res)=>{
    database.select('*').from('customers').where({customer_id: '2'})
        .then(data=>{
            res.setHeader('Content-Type', 'application/json');
            res.send(data)
    });
});

app.get('/customers/:id', (req, res)=>{
    database.select('*').from('customers').where({customer_id: req.params.id})
        .then(data=>{
            res.setHeader('Content-Type', 'application/json');
            res.send(data)
        });
});

app.delete('/customer/:id', (req, res)=>{
    database('customers').where({customer_id: req.params.id}).del()
        .then(data=> {
            res.status(204);
            res.send();
        }).catch((error)=> {console.log(error)
        });
});

app.delete('/supplier/:id', (req, res)=>{
    database('suppliers').where({supplier_id: req.params.id}).del()
        .then(data=> {
            res.status(204);
            res.send();
        }).catch((error)=> {console.log(error)
    });
});

app.post('/customer/', (req, res)=>{
    database('customers').insert({
        customer_id: req.body.selectedID,
        customer_name:req.body.selectedName,
        address: req.body.selectedAddress,
        contact_number: req.body.selectedNumber,
        customer_email: req.body.selectedEmail,
        total_orders: req.body.selectedTotal,
        prefer_store_id: req.body.selectedPrefer})
        .then(data=>{
            res.setHeader('Content-Type', 'application/json');
            res.send(data)
        }).catch((error)=> {
            console.log(error)
    });
});

app.post('/supplier/', (req, res)=>{
    database('suppliers').insert({
        supplier_id: req.body.selectedID,
        supplier_name:req.body.selectedName,
        address: req.body.selectedAddress,
        contact_number: req.body.selectedNumber,
        })
        .then(data=>{
            res.setHeader('Content-Type', 'application/json');
            res.send(data)
        }).catch((error)=> {
        console.log(error)
    });
});

app.get('/customerUpdate/:name/:address/:number/:email', (req, res)=>{
    database('customers').where({customer_id: 2}).update({customer_name: req.params.name, address: req.params.address,
        contact_number: req.params.number, customer_email: req.params.email},
        ['customer_id', 'customer_name', 'address', 'contact_number', 'customer_email', 'total_orders', 'prefer_store_id'])
        .then(data=>{
            res.setHeader('Content-Type', 'application/json');
            res.send(data)
        });
});

app.get('/items/:id', (req, res)=>{
    database.select('*').from('items').where({item_id: req.params.id})
        .then(data=>{
            res.setHeader('Content-Type', 'application/json');
            res.send(data)
        });
});

app.get('/purchases/:id', (req, res)=>{
    database.select('*').from('purchases').where({bill_number: req.params.id})
        .then(data=>{
            res.setHeader('Content-Type', 'application/json');
            res.send(data)
        });
});

app.get('/inventory/:id', (req, res)=>{
    database.select('*').from('inventory').where({item_id: req.params.id})
        .then(data=>{
            res.setHeader('Content-Type', 'application/json');
            res.send(data)
        });
});

app.get('/suppliers/:id', (req, res)=>{
    database.select('*').from('suppliers').where({supplier_id: req.params.id})
        .then(data=>{
            res.setHeader('Content-Type', 'application/json');
            res.send(data)
        });
});

app.get('/comboPurchase/:storeID/:itemID', (req, res)=>{
    database.select('*').from('purchases').join('items_sold', {'purchases.bill_number':'items_sold.bill_number'})
        .where({store_id: req.params.storeID, item_id: req.params.itemID})
        .then(data=>{
            res.setHeader('Content-Type', 'application/json');
            res.send(data)
        });
});




database.select('*').from('stores').then(data=>{
    app.get('/stores', (req, res)=>{
        res.send(data)
    })
});



app.listen(8000,()=>{
    console.log('Server is running on port 8000')
});







