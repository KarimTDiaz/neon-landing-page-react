import { COLORS } from "../../constants/consts";
import styled from "styled-components";

const ClientsContainer = styled.div`
position: relative;
	background-image: linear-gradient(to bottom, #37415149, transparent, transparent, transparent);
	background-size: auto;
	background-repeat: no-repeat;
`;

const StyledClients = styled.div`
max-width: 1104px;
margin-left: auto;
margin-right: auto;
padding: 2rem 1rem;
text-align: center;
`
const ClientsHead = styled.div`
@media screen and (min-width:768px) {
	width: 700px;
margin-left: auto;
margin-right: auto;	
}
`
const ClientsGradient = styled.div`
position: absolute;
bottom: 0;
z-index: 100;
width:92%;
height: 300px;
background-image: linear-gradient(to top, ${COLORS.bgColor}, transparent);
@media screen and (min-width: 768px) {
	width: 1104px;
height: 300px;
}
`



export { ClientsContainer, StyledClients, ClientsGradient, ClientsHead }