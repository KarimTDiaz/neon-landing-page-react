import styled from 'styled-components';
import { COLORS, FONT_SIZE } from '../../constants/consts';

const StyledFocusCard = styled.div`
margin-bottom: 2rem;
`;
const FocusCardIcon = styled.img`
margin-left: auto;
margin-right: auto;
`;

const FocusCardTitle = styled.h3`
font-size: ${FONT_SIZE.l};
color: ${COLORS.titleColor};
`;

const FocusCardData = styled.p`
font-size: ${FONT_SIZE.s};
line-height: 1.5;
color: ${COLORS.textColor};
`;

export {
    StyledFocusCard,
    FocusCardIcon,
    FocusCardTitle,
    FocusCardData
};
