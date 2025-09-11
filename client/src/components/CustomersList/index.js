import { useState, useEffect } from "react"

import {Link} from 'react-router-dom'

import { CustomerDeleteButton, CustomerListBgContainer, CustomerListCell, CustomerListContainer, CustomerListHeader } from "./styledComponents"
import Header from "../Header"
import Pagination from "../Pagination"

const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [page, setPages] = useState(1)
    const customersPerPage = customers.slice((page*5)- 5, page*5)

    useEffect(() => {
        const getCustomersList = async () => {
            const apiUrl = `${process.env.REACT_APP_API_URL}/customers`
            const response = await fetch(apiUrl)
            const customersData = await response.json()
            console.log(customersData)
            const {data} = customersData
            const updatedCustomersData = data.map(eachCustomer => ({
                id: eachCustomer.id,
                firstName: eachCustomer.first_name,
                lastName: eachCustomer.last_name,
                phoneNumber: eachCustomer.phone_number
            }))

            setCustomers(updatedCustomersData)
        }

        getCustomersList()
    }, [])

    const onClickPrev = () => {
        if (page > 1) {
            setPages(prev => prev - 1)
        }
    }

    const onClickNext = () => {
        const totalPages = Math.ceil(customers.length / 5)
        if (page < totalPages) {
            setPages(prev => prev + 1)
        }
    }

    const onClickDeleteCustomer = async customerId => {
        const confirmed = window.confirm("Are you sure you want to delete this customer?");
        if (!confirmed) return

        const apiUrl = `${process.env.REACT_APP_API_URL}/${customerId}`
        const options = {
           method: 'DELETE'
        }

        const response = await fetch(apiUrl, options)

        if (response.ok) {
            window.alert("Customer deleted successfully.");
            setCustomers(prev => prev.filter(customer => customer.id !== customerId));
        } else {
            window.alert("Failed to delete the customer. Please try again.");
        }
    }

    return (
        <CustomerListBgContainer>
            <Header />
            <CustomerListContainer>
                <CustomerListHeader key="first name">First Name</CustomerListHeader>
                <CustomerListHeader key="last name">Last Name</CustomerListHeader>
                <CustomerListHeader key="phone number">Phone Number</CustomerListHeader>
                <CustomerListHeader key="delete customer">Delete Customer</CustomerListHeader>
                <CustomerListHeader key="view customer">View</CustomerListHeader>
                {customersPerPage.map(eachCustomer => 
                    <>
                        <CustomerListCell key={eachCustomer.firstName}>{eachCustomer.firstName}</CustomerListCell>
                        <CustomerListCell key={eachCustomer.lastName}>{eachCustomer.lastName}</CustomerListCell>
                        <CustomerListCell key={eachCustomer.phoneNumber}>{eachCustomer.phoneNumber}</CustomerListCell>
                        <CustomerListCell key={eachCustomer.id}>
                            <CustomerDeleteButton type="button" onClick={() => onClickDeleteCustomer(eachCustomer.id)}>Delete</CustomerDeleteButton>
                        </CustomerListCell>
                        <CustomerListCell key={`${eachCustomer.firstName} ${eachCustomer.lastName}`}>
                            <Link to={`/customers/${eachCustomer.id}`}>
                                <CustomerDeleteButton type="button">View Details</CustomerDeleteButton>
                            </Link>
                        </CustomerListCell>
                    </>
                )}
            </CustomerListContainer>
            <Pagination
                page={page}
                customers={customers}
                onClickPrev={onClickPrev}
                onClickNext={onClickNext}
            />
        </CustomerListBgContainer>
    )
}

export default CustomerList