import styled from "styled-components";

export const CustomerListBgContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

export const CustomerListContainer = styled.div`
    width: 100vw;
    height: 80vh;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    border-radius: 4px;
    overflow: scroll;
    margin-top: 1vw;

    @media (width <= 776px) {
        width: 100vw;
    }
`

export const CustomerListHeader = styled.div`
    width: 100%;
    height: 7vh;
    background-color: #777777;
    color: #333333;
    padding: 12px;
    font-weight: bold;
`

export const CustomerListCell = styled.div`
    width: 100%;
    height: 5vh;
    color: #1b354eff;
    font-size: 16px;
    font-family: "Roboto";
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 12px;
    margin: 0px;
    border-bottom: 1px #D1D4D8 solid;

    @media (width <= 776px) {
        font-size: 12px;
    }
`

export const CustomerDeleteButton = styled.button`
    width: 100px;
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
        width: 70px;
        font-size: 10px;
    }
`