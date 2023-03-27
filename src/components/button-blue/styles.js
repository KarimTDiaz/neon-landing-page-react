import styled from "styled-components"
import { FONT_WEIGHT } from "../../constants/consts"
import { COLORS } from "../../constants/consts"

const StyledButtonBlue = styled.a`
position: relative;
display: flex;
justify-content: center;
align-items: center;
padding-right:12px;
width: ${({ width }) => width};
height: ${({ height }) => height} ;
margin-left: auto;
margin-right: auto;
margin-bottom: ${({ margin }) => margin === 1 ? '2rem' : '0'};
font-weight: ${FONT_WEIGHT.m};
color: ${COLORS.titleColor};
border-radius: 5px;
background-image: linear-gradient(${COLORS.primaryColorSoft} ,${COLORS.primaryColor});
`
export { StyledButtonBlue }