# Customer Management App

A full-stack web application to manage customers and their addresses. Users can create, view, update, and delete customers, as well as maintain multiple addresses per customer.

# Table of Contents

- [Description](#Description)
- [Features](#Features)
- [Tech Stack](#TechStack)
- [Installation](#Installation)
- [Usage](#Usage)
- [API Endpoints](#APIEndpoints)
- [Database Schema](#DatabaseSchema)
- [Validation & Error Handling](#Validation&ErrorHandling)

# Description

- What it does:
  - Lets you manage customers and their addresses via a web interface.
  - Supports CRUD operations (Create, Read, Update, Delete) for both customers and addresses.

- How it works:
  - Backend is built with Node.js + Express.js serving a REST API.
  - SQLite is used as a lightweight database storing customers and addresses in a one-to-many relation.
  - Frontend built with React JS, using React Router for navigation. Axios handles HTTP calls to the backend.

# Features
- Create, read, update, delete customers
- Add, view, edit, delete multiple addresses per customer
- Pagination support on customer list
- Form validation (both client-side and server-side)

# Tech Stack
- Layer	Technologies
- Backend	Node.js, Express.js
- Database	SQLite
- CORS and JSON parsing	cors, express.json()
- Frontend	React JS, React Router Dom, Axios

# Usage
- Navigate to Customer List page to see all customers.
- Click a customer to view details and associated addresses.
- Use forms to add/edit customer or address.
- Delete buttons available to remove customers or addresses.

# Database Schema

**users Table**

| Column      | Type    | Constraints               |
| --------    | ------- | ------------------------- |
| id          | INTEGER | PRIMARY KEY AUTOINCREMENT |
| first_name  | TEXT    | NOT NULL                  |
| last_name   | TEXT    | NOT NULL                  |
| phone_number| TEXT    | NOT NULL UNIQUE           |

**addresses Table**

| Column              | Type    | Constraints
| ------------------- | ------- | ------------------------- |
| id                  | INTEGER | PRIMARY KEY AUTOINCREMENT |
| customer_id         | INETGER | FOREIGN KEY               |
| address_details     | INTEGER | NOT NULL                  |
| city                | TEXT    | NOT NULL                  |
| state               | INTEGER | NOT NULL                  |
| pin_code            | TEXT    | NOT NULL                  |

# API Endpoints
** Routes **
| Route	                            | Method |	Description
| --------------------------------- | ------ | -------------------------------------------------------------- |
| POST /api/customers	              | POST	 | Create a new customer                                          |
| GET /api/customers	              | GET	   | List all customers (with support for search, sort, pagination) |
| GET /api/customers/:id            | GET    |	Get details of one customer                                   |
| PUT /api/customers/:id            |	PUT    |	Update a customer                                             |
| DELETE /api/customers/:id         |	DELETE |	Delete a customer                                             |
| POST /api/customers/:id/addresses |	POST   |	Add address for a customer                                    |
| GET /api/customers/:id/addresses  |	GET    |	Get all addresses for a customer                              |
| PUT /api/addresses/:addressId     |	PUT    |	Update specific address                                       |
| DELETE /api/addresses/:addressId  |	DELETE |	Delete specific address                                       |

## Setup & Installation

### Backend

```bash
cd backend
npm install
# Ensure MongoDB is running
npm run seed          # Parses JSON and populates the database
npm start             # Launches the API server

### Frontend

cd frontend
npm install
npm start             # Runs the React app (default: http://localhost:3000)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
