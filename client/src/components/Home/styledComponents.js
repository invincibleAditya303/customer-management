import styled from 'styled-components'

export const HomeBgContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

export const HomeContainer = styled.div`
    width: 100%;
    height: 90%;
    background-color: #1f1f1f;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (width <= 776px) {
        flex-direction: column;
        justify-content: center;
    }
`

export const AppDescriptionContainer = styled.div`
    width: 40vw;
    height: 50vh;

    @media (width <= 776px) {
        width: 90%;
        height: 30vh;
        order: 1;
    }
`

export const AppTitle = styled.h1`
    color: #ffffff;
    font-size: 36px;
    font-family: "Roboto";
    font-weight: 700;

    @media (width <= 776px) {
        font-size: 20px;
    }
`

export const AppTitleStyle = styled.span`
    color: #e2a31aff;
    font-family: "Sans Serif";
    font-style: Italic;
    text-decoration: underline;
`

export const AppDescription = styled.p`
    color: #ffffff;
    font-size: 24px;
    font-family: "Roboto";
    font-weight: 400;

    @media (width <= 776px) {
        font-size: 14px;
    }
`

export const KnowButton = styled.button`
    width: 110px;
    height: 36px;
    background-color: #306acf;
    color: #ffffff;
    font-size: 18px;
    font-family: "Roboto";
    padding: 5px;
    border-radius: 5px;
    border-width: 0px;
    cursor: pointer;
    outline: none;
`

export const CustomerManagementImage = styled.img`
    width: 30vw;
    height: 50vh;

    @media (width <= 776px) {
    width: 50vw;    
    height: 30vh;
    }
`