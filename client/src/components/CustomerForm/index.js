import { useState } from "react"
import { CustomerAddButton, CustomerAdditionFailureMsg, CustomerAdditionSuccessMsg, CustomerFormBgContainer, CustomerFormContainer, CustomerFormDetailsContainer, CustomerFormImage, CustomerFormTitle, CustomerInputContainer, CustomerInputText, CustomerLabelHeading } from "./styledComponents"

const CustomerForm = () => {
    const [firstName, setNewCustomerFirstName] = useState('')
    const [lastName, setNewCustomerLastName] = useState('')
    const [phoneNumber, setNewCustomerPhoneNumber] = useState('')
    const [successMsg, setSuccessMsg] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const onChangeFirstName = event => setNewCustomerFirstName(event.target.value)
    const onChangeLastName = event => setNewCustomerLastName(event.target.value)
    const onChangePhoneNumber = event => setNewCustomerPhoneNumber(event.target.value)

    const onSubmitCustomerForm = async event => {
        event.preventDefault()
        if (
            !firstName.trim() ||
            !lastName.trim() ||
            !phoneNumber.trim()
        ) {
            setErrMsg('Please fill in all fields.')
            return
        }
        const newCustomerDetails =  {firstName, lastName, phoneNumber}
        const apiUrl = `${REACT_APP_API_URL}/customers`
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCustomerDetails)
        }

        const response = await fetch(apiUrl, options)
        const msg = await response.json()

        if (response.ok) {
            setNewCustomerFirstName('')
            setNewCustomerLastName('')
            setNewCustomerPhoneNumber('')
            setSuccessMsg(msg)
            setErrMsg('')
        } else {
            setErrMsg(msg.error)
            setSuccessMsg('')
        }     
    }

    return (
        <CustomerFormBgContainer>
            <CustomerFormTitle>Add Customer details in the below form</CustomerFormTitle>
            <CustomerFormDetailsContainer onSubmit={onSubmitCustomerForm}>
                <CustomerFormImage src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1757071884/ChatGPT_Image_Sep_5_2025_11_55_01_AM_jwkcoa.png" alt="customer form image" />
                <CustomerFormContainer>
                    <CustomerInputContainer>
                        <CustomerLabelHeading htmlFor="first-name">First Name</CustomerLabelHeading>
                        <CustomerInputText type="text" placeholder="Enter first name" value={firstName} id="first-name" onChange={onChangeFirstName} />
                    </CustomerInputContainer>
                    <CustomerInputContainer>
                        <CustomerLabelHeading htmlFor="last-name">Last Name</CustomerLabelHeading>
                        <CustomerInputText type="text" placeholder="Enter last name" value={lastName} id="last-name" onChange={onChangeLastName} />
                    </CustomerInputContainer>
                    <CustomerInputContainer>
                        <CustomerLabelHeading htmlFor="phone-number">Phone Number</CustomerLabelHeading>
                        <CustomerInputText type="text" placeholder="Enter phone number" value={phoneNumber} id="phone-number" onChange={onChangePhoneNumber} />
                    </CustomerInputContainer>
                    <CustomerAddButton type="submit">Add Customer</CustomerAddButton>
                    {successMsg && <CustomerAdditionSuccessMsg>{successMsg}</CustomerAdditionSuccessMsg>}
                    {errMsg && <CustomerAdditionFailureMsg>{errMsg}</CustomerAdditionFailureMsg>}
                </CustomerFormContainer>
            </CustomerFormDetailsContainer>
        </CustomerFormBgContainer>
    )
}

export default CustomerForm