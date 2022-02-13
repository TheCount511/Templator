import styled from "styled-components/macro";

export const PaginationContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 10px 50px;
align-items: center;
`;

export const PageNav = styled.div`
font-weight: 600;
display: flex;
cursor: pointer;
span{
    padding: 7px;
}
`;

export const PageNumbering = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 90px;
font-weight: 700;
`;

export const PageNumber = styled.span`
    border: ${props=>props.pageInView && "1px solid #4a4a4a"};
    border-radius: 2px;
    padding: 4px 7px;
`