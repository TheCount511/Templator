import { BrowseheaderContainer, BrowseInfo, TemplateCount } from "./styles/browseheader"


const Browseheader =({children, ...restProps})=>{
    return <BrowseheaderContainer {...restProps}>{children}</BrowseheaderContainer>
}

Browseheader.BrowseInfo =({children, ...restProps})=>{
    return <BrowseInfo{...restProps}>{children}</BrowseInfo>
} 

Browseheader.TemplateCount =({children, ...restProps})=>{
    return <TemplateCount{...restProps}>{children}</TemplateCount>
} 

export default Browseheader;