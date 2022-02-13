import information from '../../assets/icons/information.svg'
import { Container, Text } from './styles/bannertext'



const BannerText = ({ children, ...restProps }) => {
    return (
        <Container {...restProps}>
            <img src={information} alt="information" />
            <Text>{{ ...restProps}.bannerText}</Text>
        </Container>
    )
}

export default BannerText;