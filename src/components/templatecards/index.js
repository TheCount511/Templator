import { CardContainer, DescriptionContainer, TemplateHeader, TemplateText, SelectionContainer, TemplateSelect } from "./styles/templatecards"

const TemplateCard = ({ children, ...restProps }) => {
    return <CardContainer {...restProps}>
        <DescriptionContainer>
            <TemplateHeader>{{...restProps}.title}</TemplateHeader>
            <TemplateText>{{...restProps}.description}</TemplateText>
        </DescriptionContainer>
        <SelectionContainer>
            <TemplateSelect>Use Template</TemplateSelect>
        </SelectionContainer>
    </CardContainer>
}
export default TemplateCard