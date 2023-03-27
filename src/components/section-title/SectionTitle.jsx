import { StyledSectionTitle } from "./styles"

const SectionTitle = ({ title, size, sizeDsktp, margin }) => {
    return <StyledSectionTitle size={size} sizeDsktp={sizeDsktp} margin={margin}>{title}</StyledSectionTitle>
}

export default SectionTitle
