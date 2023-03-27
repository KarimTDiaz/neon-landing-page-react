import styled from "styled-components";
import { COLORS } from "../../constants/consts";
import { FONT_SIZE } from "../../constants/consts";

const ButtonContainer = styled.div`
position: relative;
width:160px ;
height: 40px;
&::after{
    content: '';
    position: absolute;
    z-index: -1;
    left: -2%;
    top: -5%;
    width: 160px;
    height: 40px;
    background-image: linear-gradient(to top, #1f2937,#4b5563,#1f2937);
    border-radius:5rem;
}
`
const StyledButtonTab = styled.a`
display: flex;
align-items:center ;
justify-content: center;
z-index: 10;
width: 155px;
height: 35px;
font-size: ${FONT_SIZE.xxs};
background-color: ${COLORS.secondaryColor};
color:${COLORS.textColor};
border-radius:5rem;
`


export { ButtonContainer, StyledButtonTab }