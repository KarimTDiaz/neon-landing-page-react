import styled from "styled-components";
import { COLORS } from "../../constants/consts";

const IconTabContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
width: 50px;
height: 50px;
background-color: ${COLORS.secondaryColor};
border-radius: 50%;
&::after{
    content: '';
    position: absolute;
    z-index: -1;
    left: -5%;
    top: -5%;
    width: 110%;
    height: 110%;
    background-image: linear-gradient(to top, #1f2937,#4b5563,#1f2937);
    border-radius:50%
}
`

const IconTab = styled.img`
width: 30px;
`


export {IconTabContainer, IconTab}