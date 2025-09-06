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

//Add new customer API
app.post('/customers', async (request, response) => {
  const {firstName, lastName, phoneNumber} = request.body

  const addCustomerQuery = `
    INSERT INTO customers
    (first_name, last_name, phone_number)

    VALUES
    ('${firstName}', '${lastName}', '${phoneNumber}');
  `

  try {
    await db.run(addCustomerQuery)
    response.status(200)
    response.json('Added customer successfully')
  } catch (error) {
    if (error.message.includes('UNIQUE constraint failed')) {
        return response.status(400).json({ error: 'Phone number already exists' });
      }
      response.json(error.message)
  }
  
})

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

    const singleCustomer = await db.get(getSingleCustomerQuery)
    response.status(200)
    response.json({'data': singleCustomer})
})

//Update customer API
app.put('/customers/:id', async (request, response) => {
  const {id} = request.params

  const getCustomerQuery = `
    SELECT
      *
    FROM
      customers
    WHERE
      id=${id};
  `
  const customer = await db.get(getCustomerQuery)

  const {firstName=customer.first_name, lastName=customer.last_name, phoneNumber=customer.phone_number} = request.body

  const updateExistingCustomer = `
    UPDATE
      customers
    SET
      first_name='${firstName}',
      last_name='${lastName}',
      phone_number ='${phoneNumber}'
    WHERE
      id=${id};
  `
  try {
    await db.run(updateExistingCustomer)

    response.status(200)
    response.json('Customer details updated successfully')
  } catch (error) {
    response.status(400)
    response.json(error.message)
  }
})

//Delete customer details API
app.delete('/customers/:id', async (request, response) => {
  const {id} = request.params

  const deleteCustomerQuery = `
    DELETE FROM 
      customers
    WHERE
      id=${id};
  `

  try{
    await db.run(deleteCustomerQuery)
    response.status(200)
    response.json('Deleted customer details successfully')
  } catch (error) {
    response.status(400)
    response.json(error.message)
  }
})

app.post('/customers/:id/addresses', async (request, response) => {
  const {id: customerId} = request.params
  const {addressDetails, city, state, pinCode} = request.body

  const addAddressQuery = `
    INSERT INTO 
      addresses
      (customer_id, address_details, city, state, pin_code)
    VALUES
      (${customerId}, '${addressDetails}', '${city}', '${state}', '${pinCode}');
  `

  try {
    await db.run(addAddressQuery)
    response.status(200)
    response.json('Address added successfully')
  } catch (error) {
    response.status(400)
    response.json(error.message)
  }
})

app.get('/customers/:id/addresses', async (request, response) => {
  const {id: customerId} = request.params

  getAddressQuery = `
    SELECT
      *
    FROM
      addresses
    WHERE
      customer_id=${customerId};
  `

  const addressData = await db.all(getAddressQuery)
  response.status(200)
  response.json({'data': addressData})
})

app.put('/addresses/:addressId', async (request, response) => {
  const {addressId} = request.params
  
  const getAddressQuery = `
    SELECT
      *
    FROM
      addresses
    WHERE
      id=${addressId};
  `
  const address = await db.get(getAddressQuery)
  const {addressDetails=address.address_details, city=address.city, state=address.state, pinCode=address.pin_code} = request.body

  const updateAddressQuery = `
    UPDATE
      addresses
    SET
      address_details='${addressDetails}',
      city='${city}',
      state='${state}',
      pin_code='${pinCode}'
    WHERE
      id=${addressId};
  `
  try {
    await db.run(updateAddressQuery)
    response.status(200)
    response.json('Updated address successfully')
  } catch (error) {
    response.status(400)
    response.json(error.message)
  }
})

app.delete('/addresses/:addressId', async (request, response) => {
  const {addressId} = request.params

  const deleteAddressQuery = `
    DELETE FROM
      addresses
    WHERE
      id=${addressId};
  `
  try {
    await db.run(deleteAddressQuery)
    response.status(200)
    response.json('Deleted address successfully')
  } catch (error) {
    response.status(400)
    response.json(error.message)
  }
})