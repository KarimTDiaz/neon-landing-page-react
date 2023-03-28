import styled from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../constants/consts";

const TabCardsContainer = styled.ul`
display: flex;
flex-direction: column;
gap: 1rem;
@media screen and (min-width:768px) {
    flex-direction: row;
}
`

const StyledTabCard = styled.div`
position: relative;
z-index: -5;
width: 345px;
height: 140px;
padding: 1.5rem;
text-align: left;
background-color: ${COLORS.secondaryColor};
`

const TabCardData = styled.p`
font-weight: ${FONT_WEIGHT.l};
color: ${COLORS.titleColor};
`

export { StyledTabCard, TabCardsContainer, TabCardData }