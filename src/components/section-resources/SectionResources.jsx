import SectionTitle from "../section-title/SectionTitle"
import { FONT_SIZE, SECTION_TITLES } from "../../constants/consts"
import ButtonLearn from "../button-learn/ButtonLearn"
import ButtonTab from "../button-tab/ButtonTab"


const SectionResources = () => {
    return <><SectionTitle title={SECTION_TITLES.resources} size={FONT_SIZE.xxl} sizeDsktp={FONT_SIZE.xxlDsktp} />
        <ButtonTab /></>
}

export default SectionResources