import styled from "styled-components";

const StyledArrow = styled.span`
position: absolute;
top: 20px;
margin-left: 5px;
width: 12px;
height: 1px;
background-color: white;
&::after,
&::before{
    content: '';
    position: absolute;
    width: 6px;
    height: 1px;
    right: 0;
    background-color: white;
    transform: rotate(45deg);
    transform-origin: right;
}
&::before{
    transform: rotate(-45deg);
}
`

export { StyledArrow }