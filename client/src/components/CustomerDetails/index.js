import { useState, useEffect } from "react"

import { Link, useParams } from "react-router-dom"

import { AddressButton, AddressButtonContainer, CustomerAddressText, CustomerDetailsBgContainer, CustomerDetailsContainer, CustomerName, CustomerTitle } from "./styledComponents"

import Header from '../Header'

const CustomerDetails = () => {
    const {id} = useParams()
    const [customerDetails, setCustomerDetails] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: ''
    })

    useEffect(() => {
        const getCustomerDetails = async () => {
            console.log(id)
            const apiUrl = `http://localhost:5000/customers/${id}`

            const response = await fetch(apiUrl)
            const customerData = await response.json()
            const data = customerData.data
            console.log(data)

            setCustomerDetails({
                firstName: data.first_name,
                lastName: data.last_name,
                phoneNumber: data.phone_number
            })

        }

        getCustomerDetails()
    }, [id])

    console.log(customerDetails)

    return (
        <>
            <Header />
            <CustomerDetailsBgContainer>
                <CustomerDetailsContainer>
                    <CustomerName>
                        <CustomerTitle>First Name:</CustomerTitle> {customerDetails.firstName}
                    </CustomerName>
                    <CustomerName>
                        <CustomerTitle>Lat Name: </CustomerTitle>{customerDetails.lastName}
                    </CustomerName>
                    <CustomerName>
                        <CustomerTitle>Phone Number: </CustomerTitle>{customerDetails.phoneNumber}
                    </CustomerName>
                    <AddressButtonContainer>
                        <CustomerAddressText>Click on below button to get Customer's adresses</CustomerAddressText>
                        <Link to={`/customers/${id}/addresses`}>
                            <AddressButton>Go to Addresses</AddressButton>
                        </Link>
                    </AddressButtonContainer>
                </CustomerDetailsContainer>
            </CustomerDetailsBgContainer>
        </>
    )
}

export default CustomerDetails