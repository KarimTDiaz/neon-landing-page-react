import styled from "styled-components"
import { FONT_WEIGHT } from "../../constants/consts"
import { COLORS } from "../../constants/consts"

const StyledButtonGrey = styled.a`
display: flex;
justify-content: center;
align-items: center;
width: ${({ width }) => width};
height: ${({ height }) => height} ;
font-weight: ${FONT_WEIGHT.m};
color: ${COLORS.titleColor};
border-radius: 5px;
background-image: linear-gradient(${COLORS.secondaryColorSoft} ,${COLORS.secondaryColor});
`
export { StyledButtonGrey }