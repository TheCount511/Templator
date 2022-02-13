import { PaginationContainer, PageNav, PageNumbering, PageNumber } from "./styles/pagination"

const Pagination =({children, ...restProps})=>{
    return <PaginationContainer {...restProps}> {children} </PaginationContainer>
}

Pagination.PageNav =({children, ...restProps})=>{
    return <PageNav {...restProps}>{children}</PageNav>
}

Pagination.PageNumbering =({children, ...restProps})=>{
    return <PageNumbering {...restProps}>
        <PageNumber pageInView>{1}</PageNumber> <span>of</span> <PageNumber>{14}</PageNumber>
    </PageNumbering>
}

export default Pagination;