import styled from "styled-components";
import { COLORS, FONT_SIZE, FONT_WEIGHT } from "../../constants/consts";

const StyledFooterList = styled.ul`

`

const FooterListTitle = styled.h3`
margin-bottom: 0.3rem;
font-size: ${FONT_SIZE.xxxs};
font-weight: ${FONT_WEIGHT.m};
color: ${COLORS.titleColor};
`

const FooterListItem = styled.li`
margin-bottom: 0.3rem;
`

const FooterListLink = styled.a`
font-size: ${FONT_SIZE.xxs};
font-weight: ${FONT_WEIGHT.xs};
color: ${COLORS.textColor};
`

export {StyledFooterList, FooterListTitle, FooterListItem, FooterListLink}