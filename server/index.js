// server/index.js
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const path = require('path')
const dbPath = path.join(__dirname, 'customerData.db')

const {open} = require('sqlite')
const sqlite3 = require('sqlite3');
const { request } = require('http');

const PORT = process.env.PORT || 5000

let db = null

const intializeDbAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })

    app.listen(PORT, () => {
      console.log('Server running at http://localhost:5000')
    })
  } catch (e) {
    console.log(`DB Error: ${e.messsage}`)
  }
}

intializeDbAndServer()

//Get all customers API
  app.get('/customers/',  async (request, response) => {
    const getAllCustomersQuery = `
        SELECT
            *
        FROM
            customers;
    `

    const allCustomers = await db.all(getAllCustomersQuery)

    response.status(200)
    response.json({'data': allCustomers})
  })

//Get a single customer API
app.get('/customers/:id/', async (request, response) => {
    const {id} = request.params

    const getSingleCustomerQuery = `
        SELECT
            *
        FROM
            customers
        WHERE
            id = ${id};
    `

    const singleCustomer = await db.run(getSingleCustomerQuery)
    response.status(200)
    response.json({'data': singleCustomer})
})