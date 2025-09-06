import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100vw;
    height: 10vh;
    background-color: #ded4dfff;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (width <= 776px) {
        height: 8vh;
    }
`

export const AppLogo = styled.img`
    width: 10vw;
    height: 8vh;
    margin-left: 20px;

    @media (width <= 776px) {
        width: 12vw;
        height: 6vh;
    }
`

export const LinksContainer = styled.ul`
    width: 25vw;
    height: 6vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-left: 0px;

    @media (width <= 776px) {
        width: 60vw;
    }
`

export const LinkItem = styled.li`
    color: #333333;
    font-size: 16px;
    font-family: "Roboto";
    list-style-type: none;

    @media (width <= 776px) {
        font-size: 12px;
    }
`

export const AddButton = styled.button`
    width: 120px;
    height: 36px;
    background-color: #306acf;
    color: #ffffff;
    font-size: 16px;
    font-family: "Roboto";
    padding: 5px;
    border-radius: 8px;
    border-width: 0px;
    cursor: pointer;
    outline: none;

    @media (width <= 776px) {
    width: 80px;    
    font-size: 10px;
    }
`