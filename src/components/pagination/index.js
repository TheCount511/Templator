import { PaginationContainer, PageNav, PageNumbering, PageNumber } from "./styles/pagination"

const Pagination =({children, ...restProps})=>{
    return <PaginationContainer {...restProps}> {children} </PaginationContainer>
}

Pagination.PageNav =({children, ...restProps})=>{
    return <PageNav {...restProps} activeState={{...restProps}.activeState}>{children}</PageNav>
}

Pagination.PageNumbering =({children, ...restProps})=>{
    return <PageNumbering {...restProps}>
        {console.log({...restProps}.numberofPages)}
        <PageNumber pageInView>{{...restProps}.currentPage}</PageNumber> <span>of</span> <PageNumber>{{...restProps}.numberofPages}</PageNumber>
    </PageNumbering>
}

export default Pagination;