import SectionText from "../section-text/SectionText"
import { ClientsBottomContainer, ClientsCompany, ClientsImg, ClientsItem, ClientsName, StyledCardClients } from "./styles"



const CardClients = ({ items }) => {
    return <StyledCardClients>
        {items.map(item => (
            <ClientsItem key={item.id}>
                <ClientsImg src={item.url} alt='Imagen de perfil' />
                <SectionText text={item.text} />
                <ClientsBottomContainer>
                    <ClientsName>{item.user}</ClientsName>
                    <ClientsCompany>{item.company}</ClientsCompany>
                </ClientsBottomContainer>
            </ClientsItem>
        ))}

    </StyledCardClients>
}

export default CardClients