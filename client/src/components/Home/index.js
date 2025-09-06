import { AppDescription, AppDescriptionContainer, AppTitle, AppTitleStyle, CustomerManagementImage, HomeBgContainer, HomeContainer, KnowButton } from "./styledComponents"
import Header from "../Header"

const Home = () => (
    <HomeBgContainer>
        <Header />
        <HomeContainer>
            <AppDescriptionContainer>
                <AppTitle>
                    Welcome to <AppTitleStyle>Customer Connect</AppTitleStyle>
                </AppTitle>
                <AppDescription>
                    CustomerConnect is a sleek, intuitive, and efficient customer-management app
                    designed to streamline how small businesses manage their customer data. 
                    Built with clarity and functionality in mind, it offers a clean interface 
                    for listing, viewing, and deleting customer profiles—and empowers users to 
                    maintain customer records with ease and confidence.
                </AppDescription>
                <KnowButton type="button">Know More</KnowButton>
            </AppDescriptionContainer>
            <CustomerManagementImage src="https://res.cloudinary.com/dtrjr55q7/image/upload/v1756967632/ChatGPT_Image_Sep_4_2025_12_01_39_PM_rs4tm7.png" alt="customer connect" />
        </HomeContainer>
    </HomeBgContainer>
)

export default Home