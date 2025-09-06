import { Link, withRouter } from "react-router-dom"

import { AddButton, AppLogo, HeaderContainer, LinkItem, LinksContainer } from "./styledComponents"

const Header = () => (
    <HeaderContainer>
        <Link to='/'>
            <AppLogo src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1756974085/ChatGPT_Image_Sep_4_2025_12_10_00_PM_tazfwx.png" alt="company connect logo" />
        </Link>
        <LinksContainer>
            <LinkItem>
                <Link to='/'>Home</Link>
            </LinkItem>
            <LinkItem>
                <Link to='/customers'>Customers</Link>
            </LinkItem>
            <LinkItem>
                <Link to='/customers/add' target="_blank">
                    <AddButton type="button">Add Customer</AddButton>
                </Link>
            </LinkItem>
        </LinksContainer>
    </HeaderContainer>
)

export default withRouter(Header)