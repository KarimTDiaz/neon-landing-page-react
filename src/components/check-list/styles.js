import styled from "styled-components";
import { COLORS, FONT_SIZE } from "../../constants/consts";

const StyledCheckItem = styled.li`
display: flex;
align-items: center;
gap: 1rem;
margin-bottom: 0.8rem;
`

const CheckIcon = styled.img`
width: 16px;
height: 12px;
`
const CheckData = styled.span`
font-size: ${FONT_SIZE.s};
color: ${COLORS.textColor};
`
export { StyledCheckItem, CheckIcon, CheckData }