import SectionTitle from "../section-title/SectionTitle"
import SectionText from "../section-text/SectionText"
import { ClientsContainer, ClientsGradient, StyledClients } from "./styles"
import { SECTION_TITLES, SECTION_TEXTS, FONT_SIZE, CLIENTS } from "../../constants/consts"
import CardClients from "../card-clients/CardClients"

const SectionClients = () => {
    return <ClientsContainer>
        <StyledClients>
            <SectionTitle title={SECTION_TITLES.clients} size={FONT_SIZE.xxl} sizeDsktp={FONT_SIZE.xxlDsktp} />
            <CardClients items={CLIENTS} />
            <ClientsGradient />
        </StyledClients>

    </ClientsContainer>
}

export default SectionClients