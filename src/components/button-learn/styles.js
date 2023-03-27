import styled from "styled-components";
import { COLORS } from "../../constants/consts";
import { FONT_SIZE } from "../../constants/consts";

const StyledButtonLearn = styled.a`
position: relative;
z-index: 10;
padding:0.29rem 1.2rem;
font-size: ${FONT_SIZE.xxs};
background-color: ${COLORS.secondaryColor};
color:${COLORS.textColor};
border-radius:5rem;
&::after{
    content: '';
    position: absolute;
    z-index: -1;
    left: -2.8px;
    top: -2.4px;
    width: 328.33px;
    height: 30px;
    background-image: linear-gradient(to top, #1f2937,#4b5563,#1f2937);
    border-radius:5rem;
}
`

const LearnLink = styled.span`
color:${COLORS.primaryColor};
`

export { StyledButtonLearn, LearnLink }