import styled from "styled-components";

export const PaginationContainer = styled.div`
    width: 11vw;
    height: 3vh;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: auto;
    margin-right: 15px;
    margin-bottom: 10px;
`

export const PreviousButton = styled.button`
    width: 4vw;
    height: 100%;
    background-color: #3e9ede;
    color: #ffffff;
    font-size: 12px;
    font-family: "Roboto";
    padding: 2px;
    border-width: 0px;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
`

export const PageContainer = styled.div`
    width: 2vw;
    height: 100%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px #334155 solid;
`

export const PageText = styled.p`
    color: #334155;
    font-size: 12px;
    font-family: "Roboto";
    font-weight: 400;
`