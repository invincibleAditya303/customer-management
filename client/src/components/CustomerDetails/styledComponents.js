import styled from "styled-components";

export const CustomerDetailsBgContainer = styled.div`
    width: 100vw;
    min-height: 90vh;
    background-color: #ebe7e2;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CustomerDetailsContainer = styled.div`
    width: 60vw;
    min-height: 80vh;
    background-color: #ffffff;

    @media (width <= 776px) {
        display: flex;
        flex-direction: column;
        justify-content: center
    }
`

export const CustomerName = styled.h1`
    color: #333333;
    font-size: 36px;
    font-family: "Bree Serif";
    font-style: Italic;
    font-weight: bold;
    padding-left: 20px;

    @media (width <= 776px) {
        font-size: 20px;
    }
`

export const CustomerTitle = styled.span`
    font-size: 20px;
    font-family: "Roboto";
    font-style: normal;

    @media (width <= 776px) {
        font-size: 14px;
    }
`

export const CustomerAddressText = styled.p`
    color: #333333;
    font-size: 24px;
    font-family: "Roboto";
    padding-left: 20px;

    @media (width <= 776px) {
        font-size: 14px;
    }
`

export const AddressButtonContainer = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AddressButton = styled.button`
    width: 130px;
    height: 36px;
    background-color: #306acf;
    color: #ffffff;
    font-size: 16px;
    font-family: "Roboto";
    padding: 5px;
    border-radius: 5px;
    border-width: 0px;
    cursor: pointer;
    outline: none; 
    
    @media (width <= 776px) {
        width: 100px;
        font-size: 10px;
    }
`