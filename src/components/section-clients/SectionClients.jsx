import SectionTitle from "../section-title/SectionTitle"
import SectionText from "../section-text/SectionText"
import { ClientsContainer, ClientsGradient, ClientsHead, StyledClients } from "./styles"
import { SECTION_TITLES, SECTION_TEXTS, FONT_SIZE, CLIENTS } from "../../constants/consts"
import CardClients from "../card-clients/CardClients"

const SectionClients = () => {
    return <ClientsContainer>
        <StyledClients>
            <ClientsHead>
                <SectionTitle title={SECTION_TITLES.clients} size={FONT_SIZE.xxl} sizeDsktp={FONT_SIZE.xxlDsktp} />
            </ClientsHead>
            <CardClients items={CLIENTS} />
            <ClientsGradient />
        </StyledClients>

    </ClientsContainer>
}

export default SectionClients