import styled from "styled-components"
import { COLORS } from "../../constants/consts"

const StyledSectionTitle = styled.h2`
margin-bottom: 1rem;
font-size: ${({ size }) => size};
color: ${COLORS.titleColor};
@media screen and (min-width: 768px){
    font-size: ${({ sizeDsktp }) => sizeDsktp};
}

`

export { StyledSectionTitle }