import { PageContainer, PageText, PaginationContainer, PreviousButton } from "./styledComponents"

const Pagination = props => {
    const {page, customers, onClickPrev, onClickNext} = props
    const totalPages = Math.ceil(customers.length/5)

    const onClickPrevButton = () => onClickPrev()
    const onClickNextButton = () => onClickNext()

    return (
        <PaginationContainer>
            <PreviousButton type="button" onClick={onClickPrevButton}>Prev</PreviousButton>
            <PageContainer>
                <PageText>{page}/{totalPages}</PageText>
            </PageContainer>
            <PreviousButton type="button" onClick={onClickNextButton}>Next</PreviousButton>
        </PaginationContainer>
    )
}

export default Pagination