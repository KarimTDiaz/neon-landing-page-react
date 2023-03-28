import styled from "styled-components";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "../../constants/consts";


const StyledFooter= styled.footer`
display: flex;
flex-direction: column;
gap: 1rem;
padding: 2rem 1rem;
@media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content:left;
    gap: 6.5rem;
    max-width: 1104px;
    margin-left:auto;
    margin-right: auto;
}
`

const PrivacyLinksContainer = styled.span`
padding-top: 1rem;
display: flex;
gap: 0.5rem;
`

const PrivacyLink = styled.a`
font-size: ${FONT_SIZE.xxs};
font-weight: ${FONT_WEIGHT.xs};
color:${COLORS.textColor};
cursor: pointer;
`

export {StyledFooter, PrivacyLinksContainer,PrivacyLink}