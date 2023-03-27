import styled from "styled-components";
import { COLORS, FONT_SIZE } from "../../constants/consts";

const StyledCardClients = styled.ul`
display: grid;
gap: 1rem;
text-align: left;
@media screen and (min-width:768px){
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
}
`

const ClientsItem = styled.div`
width: 343px;
height: 218px;
padding: 1.5rem 1rem;
background-color: ${COLORS.secondaryColor};
`

const ClientsImg = styled.img`
width: 48px;
margin-bottom: 0.5rem;
border-radius: 50%;
`

const ClientsBottomContainer = styled.div`
`

const ClientsName = styled.span`
font-size: ${FONT_SIZE.xxs};
color: ${COLORS.textColor};
margin: 0;
`

const ClientsCompany = styled.span`
color: ${COLORS.primaryColor};
`

export { StyledCardClients, ClientsItem, ClientsImg, ClientsBottomContainer, ClientsName, ClientsCompany }