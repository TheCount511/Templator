import styled from "styled-components/macro";

export const NavbarContainer = styled.div`
display:flex;
width:100%;
justify-content:space-between;
align-items:center;
`


export const SearchbarWrapper = styled.div`
position:relative;
width:240px;
display:flex;
height:40px;
padding:1px 5px 1px 20px;
border: 2px solid #e4e4e4;
align-items:center;
`

export const SearchBarInput = styled.input`
border:0;
height:36px;
width:80%;
outline:0;

`

export const SearchBarIcon = styled.img`
height:30px;
cursor: pointer;

:hover{
   filter: invert(68%) sepia(86%) saturate(335%) hue-rotate(82deg) brightness(87%) contrast(91%);
}
`


export const SortContainer = styled.div`
display:flex;
min-width:600px;
max-width:700px;
align-items:center;
cursor: pointer;

`

export const SortLabel = styled.span`
color:#acacac;
margin-right:20px;`

export const SortItems = styled.div`
display:flex;
align-items:center;
min-width:85%;

justify-content:space-between;
`

export const SortItem = styled.div`
`

export const SortOptions = styled.fieldset`
height: 44px;
    width: 160px;
    display: flex;
    border: 2px solid #e4e4e4;
    padding: 3px 50px;
    align-items: center;
    border-radius:3px;
    margin: 0;
    padding: 3px 15px;
`
export const SortSelect = styled.div`
width: 100%;
border:0;
display: flex;
padding: 3px;
outline: 0;
justify-content:space-between;
`
export const SelectText = styled.span`
width: 70%;
font-size:16px;
align-self:center;
`

export const SelectIcon = styled.img`

`
export const SelectMenu = styled.div`
   width:160px;
   position:absolute;
   border-left: 1px solid #e4e4e4;
   border-right: 1px solid #e4e4e4;
   border-radius:5px;
   display:${({dropdownIsVisible})=> (dropdownIsVisible === true ? 'block':"none")};
   z-index:2;
   top:85px;
   
   
`
export const SortOption = styled.option`
border-bottom: 0.5px solid #e4e4e4;
&:first-child {border-top: 1px solid #e4e4e4;}
&:last-child{border-bottom: 1px solid #e4e4e4;}
width:100%;
padding:5px;
height:33px;
background-color: #fff;

:hover{
   background-color:#8c8f8a;
}
`
export const Legend = styled.legend`
font-size:10px;
`



