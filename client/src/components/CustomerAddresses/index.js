import { useEffect, useState } from "react"
import { AddAddressButton, AddAddressText, AddressAddButtonContainer, AddressesList, AddressListItem, AddressListItemButtonContainer, AddressListItemTitle, AddressListItemValue, AddressTitle, CustomerAddressesBgContainer, CustomerAddressesContainer, EditButton } from "./styledComponents"
import { Link, useParams } from "react-router-dom"
import Header from "../Header"

const CustomerAddresses = () => {
    const {id} = useParams()
const [customerAddressList, setCustomerAddressList] = useState([])

useEffect(() => {
    const getAddressesList = async () => {
        const apiUrl = `http://localhost:5000/customers/${id}/addresses`
        const response = await fetch(apiUrl)
        const addressesData = await response.json()
        const {data} = addressesData

        const updatedAddressesData = data.map(eachAddress => ({
            id: eachAddress.id,
            customerId: eachAddress.customer_id,
            addressDetails: eachAddress.address_details,
            city: eachAddress.city,
            state: eachAddress.state,
            pinCode: eachAddress.pin_code
        }))

        setCustomerAddressList(updatedAddressesData)
    }

    getAddressesList()

}, [id])

const onClickDelete = async addressId => {
    const confirmed = window.confirm("Are you sure you want to delete this address?");
    if (!confirmed) return

    const apiUrl = `http:localhost:5000/addresses/${addressId}`
    const options = {
        method: 'DELETE'
    }

    const response = await fetch(apiUrl, options)

    if (response.ok) {
      window.alert("Address deleted successfully.");
      setCustomerAddressList(prev => prev.filter(addr => addr.id !== addressId));
    } else {
      window.alert("Failed to delete the address. Please try again.");
    }
}

    return (
        <>
            <Header />
            <CustomerAddressesBgContainer>
                <CustomerAddressesContainer>
                    <AddressTitle>Address List</AddressTitle>
                    <AddressAddButtonContainer>
                        <AddAddressText>Want to add Address?</AddAddressText>
                        <Link to={`/customers/${id}/addresses/add`} target="_blank">
                            <AddAddressButton type="button">Click to add Address</AddAddressButton>
                        </Link>
                    </AddressAddButtonContainer>
                    <AddressesList>
                        {customerAddressList.map(eachAddress => 
                            <AddressListItem key={eachAddress.id}>
                                <AddressListItemTitle>
                                    Street: <AddressListItemValue>{eachAddress.addressDetails}</AddressListItemValue>
                                </AddressListItemTitle>
                                <AddressListItemTitle>
                                    City: <AddressListItemValue>{eachAddress.city}</AddressListItemValue>
                                </AddressListItemTitle>
                                <AddressListItemTitle>
                                    State: <AddressListItemValue>{eachAddress.state}</AddressListItemValue>
                                </AddressListItemTitle>
                                <AddressListItemTitle>
                                    Pin Code: <AddressListItemValue>{eachAddress.pinCode}</AddressListItemValue>
                                </AddressListItemTitle>
                                <AddressListItemButtonContainer>
                                    <Link to={{pathname: `/addresses/${eachAddress.id}/add`, 
                                        search: `?details=${encodeURIComponent(JSON.stringify(eachAddress))}`}} 
                                        target="_blank"
                                    >
                                        <EditButton type="button">Edit</EditButton>
                                    </Link>
                                    <EditButton type="button" onClick={() => onClickDelete(eachAddress.id)}>Delete</EditButton>
                                </AddressListItemButtonContainer>
                            </AddressListItem>
                        )}
                    </AddressesList>
                </CustomerAddressesContainer>
            </CustomerAddressesBgContainer>
        </>
    )
}

export default CustomerAddresses