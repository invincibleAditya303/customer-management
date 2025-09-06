import styled from "styled-components";

export const CustomerAddressesBgContainer = styled.div`
    width: 100vw;
    min-height: 90vh;
    background-color: #ebe7e2;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CustomerAddressesContainer = styled.div`
    width: 60vw;
    min-height: 80vh;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (width <= 776px) {
        width: 80vw;
    }
`

export const AddressTitle = styled.p`
    color: #333333;
    font-size: 32px;
    font-family: "Roboto";
    font-weight: 700;

    @media (width <= 776px) {
        font-size: 18px;
    }
`

export const AddressAddButtonContainer = styled.div`
    width: 90%;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const AddAddressText = styled.p`
    color: #333333;
    font-size: 24px;
    font-family: "Roboto";
    font-weight: 700;

    @media (width <= 776px) {
        font-size: 14px;
    }
`

export const AddAddressButton = styled.button`
    width: 160px;
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
    width: 120px;    
    font-size: 10px;
    }
`

export const AddressesList = styled.ul`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 0px;

    @media (width <= 776px) {
        flex-direction: column;
        justify-content: flex-start;
    }
`

export const AddressListItem = styled.li`
    width: 48%;
    height: 35vh;
    background-color: #ecf8fa;
    list-style-type: none;
    border-radius: 15px;
    margin-bottom: 20px;

    @media (width <= 776px) {
        width: 90%;
        height: 22vh;
    }
`

export const AddressListItemTitle = styled.p`
    color: #333333;
    font-size: 24px;
    font-family: "Roboto";
    font-weight: 700;
    padding-left: 15px;

    @media (width <= 776px) {
        font-size: 14px;
    }
`

export const AddressListItemValue = styled.span`
    font-weight: 400;
`

export const AddressListItemButtonContainer = styled.div`
    width: 90%;
    height: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 15px;
`

export const EditButton = styled.button`
    width: 80px;
    height: 36px;
    background-color: #cccccc;
    color: #2c364c;
    font-size: 16px;
    font-family: "Roboto";
    padding: 5px;
    border-radius: 5px;
    border-width: 0px;
    cursor: pointer;
    outline: none;

    @media (width <= 776px) {
        width: 60px;
        font-size: 10px;
    }
`