import styled from "styled-components";
import { COLORS, FONT_WEIGHT } from "../../constants/consts";

const CardPlansContainer = styled.ul`
display: flex;
flex-direction: column;
gap: 2rem;
justify-content: space-between;
@media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 1rem;
    padding: 3rem 0;
}
`

const StyledCardPlans = styled.div`
display: flex;
flex-direction: column;
width: 352px;
padding: 1.5rem;
text-align: left;
`

const CardPlansTitle = styled.h3`
margin: 0;
color: ${COLORS.titleColor};

`

const CardPlansData = styled.p`
color: ${COLORS.textColor};

`
export { CardPlansContainer, StyledCardPlans, CardPlansTitle, CardPlansData }