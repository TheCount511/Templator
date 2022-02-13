import SearchIcon from '../../assets/icons/SearchIcon.svg';
import ExpandMore from '../../assets/icons/expand_more.svg';
import ExpandLess from '../../assets/icons/expand_less.svg';
import {
    NavbarContainer, SearchBarIcon, SearchBarInput, SearchbarWrapper, SortContainer, SortItem, SortItems, SortOptions,
    SelectMenu, SortLabel, Legend, SortSelect,  SelectText, SelectIcon, SortOption
} from "./styles/navbar";

const Navbar = ({ children, ...restProps }) => {
    return <NavbarContainer {...restProps}>{children}</NavbarContainer>;
};

Navbar.SearchBar = ({ children, ...restProps }) => {
    return (
        <SearchbarWrapper {...restProps}>
            <SearchBarInput placeholder="Search Templates" type="text" />
            <SearchBarIcon src={SearchIcon} />
        </SearchbarWrapper>
    );
};

Navbar.SortContainer = ({ children, ...restProps }) => {
    return <SortContainer className='low'{...restProps}>{children}</SortContainer>;
};

Navbar.SortLabel = ({ children, ...restProps }) => {
    return <SortLabel {...restProps}>{children}</SortLabel>;
};
Navbar.SortItems =({children, ...restProps})=>{
    return <SortItems {...restProps}>{children}</SortItems>
}

Navbar.SortItem = ({ onClick, dropdownIsVisible, ...restProps }) => {
    console.log()
    return (
        <SortItem onClick={onClick}>
            <SortOptions {...restProps}>

                <Legend>{{ ...restProps }.name}</Legend>

                <SortSelect>
                    <SelectText>{`All`}</SelectText>
                    <SelectIcon src={(dropdownIsVisible===true)?ExpandLess:ExpandMore} />
                </SortSelect>
            </SortOptions>

            <SelectMenu dropdownIsVisible={dropdownIsVisible}>
                {console.log(dropdownIsVisible)}
               { {...restProps}.options.map((option, index)=>{
                   return <SortOption  key={`${{...restProps}.name}${index}`}>{option}</SortOption>
               })}
            </SelectMenu>
</SortItem>

    )
};



export default Navbar;
