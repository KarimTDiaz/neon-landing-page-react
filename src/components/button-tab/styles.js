import styled from "styled-components";
import { COLORS, FONT_SIZE } from "../../constants/consts";

const ButtonContainer = styled.div`
position: relative;
&::after{
    content: '';
    position: absolute;
    z-index: -1;
    left: -2%;
    top: -5%;
    width: 104%;
    height: 110%;
    background-image: linear-gradient(to top, #1f2937,#4b5563,#1f2937);
    border-radius:5rem;
}
`
const StyledButtonTab = styled.a`
display: flex;
align-items:center ;
justify-content: center;
padding: 0.5rem 1rem;
font-size: ${FONT_SIZE.xxs};
background-color: ${COLORS.secondaryColor};
color:${COLORS.textColor};
border-radius:5rem;
`


export { ButtonContainer, StyledButtonTab }