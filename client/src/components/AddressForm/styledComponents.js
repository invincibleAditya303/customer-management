import styled from 'styled-components'

export const AddressrFormBgContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #1f1f1f;
`

export const AddressFormTitle = styled.h1`
    color: #ffffff;
    font-size: 32px;
    font-family: "Roboto";
    font-weight: 700;
    text-align: center;
    padding-top: 20px;

    @media (width <= 776px) {
        f0nt-size: 18px;
    }
`

export const AddressFormDetailsContainer = styled.div`
    width: 100vw;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (width <= 776px) {
        height: 90vh;
        flex-direction: column;
        justify-content: flex-start;
    }
`

export const AddressFormContainer = styled.form`
    width: 45vw;
    height: 75vh;
    background-color: #ebe7e2;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;

    @media (width <= 776px) {
        width: 80vw;
        height: 55vh;
        
    }
`

export const AddressInputContainer = styled.div`
    width: 35vw;
    height: 8vh;
    margin-top: 40px;

    @media (width <= 776px) {
        width: 70vw;
        height: 6vh;
        margin-top: 30px;
    }
`

export const AddressLabelHeading = styled.label`
    color: #333333;
    font-size: 20px;
    font-family: "Roboto";
    font-weight: 500;
    padding-left: 5px;
    padding-bottom: 12px;

    @media (width <= 776px) {
        font-size: 14px;
    }
`

export const AddressInputText = styled.input`
    width: 100%;
    height: 7vh;
    background-color: transparent;
    color: #333333;
    font-size: 20px;
    font-family: "Roboto";
    font-weight: 400;
    padding-left: 10px;
    border-radius: 20px;
    border: 2px #1f1f1f solid;
    outline: none;

    @media (width <= 776px) {
        width: 70vw;
        height: 5vh;
    }
`

export const AddressAddButton = styled.button`
    width: 120px;
    height: 36px;
    background-color: #306acf;
    color: #ffffff;
    font-size: 16px;
    font-family: "Roboto";
    padding: 7px;
    border-radius: 8px;
    border-width: 0px;
    margin-top: 40px;
    cursor: pointer;
    outline: none;

    @media (width <= 776px) {
        width: 80px;
        font-size: 10px;
    }
`

export const AddressFormImage = styled.img`
    width: 35vw;
    height: 75vh;
    border-radius: 30px;
    margin-right: 20px;

    @media (width <= 776px) {
        width: 80vw;
        height: 30vh;
        margin-bottom: 20px;
    }
`

export const AddressAdditionSuccessMsg = styled.p`
    color: #279123;
    font-size: 16px;
    font-family: "Roboto";
    padding-bottom: 20px;

    @media (width <= 776px) {
        font-size: 12px;
    }
`

export const AddressAdditionFailureMsg = styled.p`
    color: #e04226;
    font-size: 16px;
    font-family: "Roboto";
    padding-bottom: 5px;

    @media (width <= 776px) {
        font-family: 12px;
    }
`