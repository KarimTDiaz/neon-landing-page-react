import styled from "styled-components";
import { COLORS, FONT_SIZE } from "../../constants/consts";

const HeaderContainer = styled.div`
background-color: ${COLORS.bgColor};
background-image: url('./images/hero-illustration.svg'),  linear-gradient(to top,#37415149,transparent,transparent, transparent );
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`

const StyledHeader = styled.header`
max-width: 1104px;
margin-left:auto;
margin-right: auto;
padding: 0.8rem 1rem 4rem 1rem;
@media screen and (min-width: 768px) {
    padding: 1.25rem 0 4.5rem 0;
}
`

const HeaderTop = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 4rem;
`

const HeaderTopBtnContainer = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`

const HeaderData = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
text-align: center;
@media screen and (min-width:768px) {
    align-items: start;
    width: 660px;
    text-align: left;
}
`

const HeaderTitle = styled.h1`
margin: 0;
font-size: ${FONT_SIZE.xxxl};
color: ${COLORS.titleColor};
@media screen and (min-width:768px) {
    font-size: ${FONT_SIZE.xxxxl};
}
`

const HeaderDescription = styled.p`
margin: 0;
font-size: ${FONT_SIZE.m};
line-height: 1.5;
color: ${COLORS.textColor};
`
const HeaderDataBtnContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
@media screen and (min-width:768px) {
    flex-direction: row;
}
`




export { StyledHeader, HeaderTop, HeaderTopBtnContainer, HeaderData, HeaderTitle, HeaderDescription, HeaderDataBtnContainer, HeaderContainer }