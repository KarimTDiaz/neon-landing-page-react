import styled from "styled-components"
import { COLORS, FONT_SIZE } from "../../constants/consts"

const StyledSectionTitle = styled.h2`
font-size: ${FONT_SIZE.xxl};
color: ${COLORS.titleColor};
@media screen and (min-width: 768px){
    font-size: ${FONT_SIZE.xxlDsktp};
}
`

export { StyledSectionTitle }