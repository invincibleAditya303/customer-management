import { useState } from "react"
import { useParams } from "react-router-dom"
import { AddressAddButton, AddressAdditionFailureMsg, AddressAdditionSuccessMsg, AddressFormContainer, AddressFormDetailsContainer, AddressFormImage, AddressFormTitle, AddressInputContainer, AddressInputText, AddressLabelHeading, AddressrFormBgContainer } from "./styledComponents"

const AddressForm = props => {
    const {id, addressId} = useParams()
    const {location} = props

    const searchParams = new URLSearchParams(location.search)
    const detailsParam = searchParams.get('details');

    const isEdit = Boolean(addressId)
    let parsed = null;
    if (detailsParam) {
        try {
            parsed = JSON.parse(decodeURIComponent(detailsParam));
        } catch {
            console.warn('Invalid details query parameter');
        }
    }

    const [addressDetails, setAddressDeatils] = useState(parsed?.addressDetails || '')
    const [city, setCity] = useState(parsed?.city)
    const [state, setNewState] = useState(parsed?.state || '')
    const [pinCode, setPinCode] = useState(parsed?.pinCode)
    const [successMsg, setSuccessMsg] = useState('')
    const[errMsg, setErrMsg] = useState('')

    const onChangeAddressDetails = event => setAddressDeatils(event.target.value)
    const onChangeCity = event => setCity(event.target.value)
    const onChangeState = event => setNewState(event.target.value)
    const onChangePinCode = event => setPinCode(event.target.value)

    const onSubmitAddressForm = async event => {
        event.preventDefault()

        if (
            !addressDetails.trim() ||
            !city.trim() ||
            !state.trim() ||
            !pinCode.trim()
        ) {
            setErrMsg('Please fill all the fields')
            return
        }

        const endpoint = isEdit
        ? `/addresses/${addressId}`
        : `/customers/${id}/addresses`

        const newAddressDetails = {addressDetails, city, state, pinCode}
        const apiUrl = `${process.env.REACT_APP_API_URL}/${endpoint}`
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAddressDetails)
        }

        const response = await fetch(apiUrl, options)
        const msg = await response.json()

        if (response.ok) {
            setAddressDeatils('')
            setCity('')
            setNewState('')
            setPinCode('')
            setSuccessMsg(msg)
            setErrMsg('')
        } else {
            setErrMsg(msg.error)
            setSuccessMsg('')
        }
    }

    return (
        <AddressrFormBgContainer>
            <AddressFormTitle>Add an Address in the below form</AddressFormTitle>
            <AddressFormDetailsContainer>
                <AddressFormImage src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1757139582/Gemini_Generated_Image_mq6kl4mq6kl4mq6k_i3jqpa.png" alt="address form" />
                <AddressFormContainer onSubmit={onSubmitAddressForm}>
                    <AddressInputContainer>
                        <AddressLabelHeading htmlFor="street-no">Street No.</AddressLabelHeading>
                        <AddressInputText type="text" placeholder="Enter street no" value={addressDetails} id="street-no" onChange={onChangeAddressDetails} />
                    </AddressInputContainer>
                    <AddressInputContainer>
                        <AddressLabelHeading htmlFor="city">City</AddressLabelHeading>
                        <AddressInputText type="text" placeholder="Enter city" value={city} id="city" onChange={onChangeCity} />
                    </AddressInputContainer>
                    <AddressInputContainer>
                        <AddressLabelHeading htmlFor="state">State</AddressLabelHeading>
                        <AddressInputText type="text" placeholder="Enter state" value={state} id="state" onChange={onChangeState} />
                    </AddressInputContainer>
                    <AddressInputContainer>
                        <AddressLabelHeading htmlFor="pin-code">Pin Code</AddressLabelHeading>
                        <AddressInputText type="text" placeholder="Enter pin code" value={pinCode} id="pin-code" onChange={onChangePinCode} />
                    </AddressInputContainer>
                    <AddressAddButton type="submit">Add Address</AddressAddButton>
                    {successMsg && <AddressAdditionSuccessMsg>{successMsg}</AddressAdditionSuccessMsg>}
                    {errMsg && <AddressAdditionFailureMsg>{errMsg}</AddressAdditionFailureMsg>}
                </AddressFormContainer>
            </AddressFormDetailsContainer>
        </AddressrFormBgContainer>
    )
}

export default AddressForm