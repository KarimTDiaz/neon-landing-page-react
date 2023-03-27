import SectionText from "../section-text/SectionText"
import SectionTitle from "../section-title/SectionTitle"
import { SECTION_TITLES, SECTION_TEXTS, FONT_SIZE, PLANS } from "../../constants/consts"
import { PlansHead, StyledPlans } from "./styles"
import CardPlans from "../card-plans/CardPlans"

const SectionPlans = () => {
    return <StyledPlans>
        <PlansHead>
            <SectionTitle title={SECTION_TITLES.plans} size={FONT_SIZE.xxl} sizeDsktp={FONT_SIZE.xxlDsktp} />
            <SectionText text={SECTION_TEXTS.plans} size={FONT_SIZE.m} />
        </PlansHead>
        <CardPlans items={PLANS} />
    </StyledPlans>
}

export default SectionPlans