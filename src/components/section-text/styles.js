import styled from "styled-components"
import { COLORS } from "../../constants/consts"

const StyledSectionText = styled.p`
margin: 0;
margin-bottom: 1rem;
font-size: ${({ size }) => size};
line-height: 1.5;
color: ${COLORS.textColor};
`

export { StyledSectionText }