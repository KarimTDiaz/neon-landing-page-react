import SectionTitle from "../section-title/SectionTitle";
import CardFocus from "../card-focus/CardFocus";
import { StyledFocus, FocusImage, FocusCardsContainer } from "./styles";
import { FOCUS } from "../../constants/consts";

const SectionFocus = () => {
    return <StyledFocus>
        <SectionTitle text='Focus on solving bigger problems' />
        <FocusImage src="./public/images/features.svg" />
        <FocusCardsContainer>
            {FOCUS.map(item => (
                <CardFocus {...item} />
            ))}
        </FocusCardsContainer>


    </StyledFocus>
}

export default SectionFocus