import SectionTitle from "../section-title/SectionTitle";
import CardFocus from "../card-focus/CardFocus";
import { FOCUS, FONT_SIZE, SECTION_TITLES } from "../../constants/consts";
import { StyledFocus, FocusImage, FocusCardsContainer } from "./styles";

const SectionFocus = () => {
    return <StyledFocus>
        <SectionTitle title={SECTION_TITLES.focus} size={FONT_SIZE.xxl} sizeDsktp={FONT_SIZE.xxlDsktp} />
        <FocusImage src="./public/images/features.svg" />
        <FocusCardsContainer>
            {FOCUS.map(item => (
                <CardFocus {...item} />
            ))}
        </FocusCardsContainer>
    </StyledFocus>
}

export default SectionFocus