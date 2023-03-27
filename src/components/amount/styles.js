import styled from "styled-components";

const StyledAmount = styled.div`
display: flex;
align-items: center;
gap: 0.2rem;
`

const AmountItem = styled.span`
color: ${({ color }) => color};
font-size: ${({ size }) => size};
font-weight: ${({ weight }) => weight};
`



export { StyledAmount, AmountItem }