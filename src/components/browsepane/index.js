import { Container } from "./styles/browsepane";

const BrowsePane =({children,restProps})=>{
    return <Container {...restProps}>
        {children}
    </Container>
}

export default BrowsePane;