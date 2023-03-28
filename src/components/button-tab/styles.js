import styled from "styled-components";
import { COLORS, FONT_SIZE } from "../../constants/consts";

const ButtonContainer = styled.div`
position: relative;
transform:${({ isActive }) => isActive ? 'rotate(3deg)' : 'rotate(0)'};

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
    box-shadow: ${({ isActive }) => isActive ? `0 10px 15px -3px ${COLORS.primaryColor},0 4px 6px -4px ${COLORS.primaryColor}` : 'none'}
}
`
const StyledButtonTab = styled.a`
display: flex;
align-items:center ;
justify-content: center;
padding: 0.5rem 1rem;
font-size: ${FONT_SIZE.xs};
background-color: ${COLORS.secondaryColor};
color:${({ isActive }) => isActive ? `${COLORS.primaryColor}` : `${COLORS.textColor}`};
border-radius: 5rem;
cursor:pointer;
`


export { ButtonContainer, StyledButtonTab }