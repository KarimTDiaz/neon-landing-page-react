import styled from "styled-components";
import { COLORS } from "../../constants/consts";


const StyledSocials = styled.ul`
position: relative;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 1.5rem 1rem;
margin-bottom: 5rem;
&::after{
    content: '';
    position: absolute;
    bottom: 0;
    width: 80%;
    height: 1px;
    background-color: #37415149;
}
`
const SocialsItem = styled.li`
display: flex;
justify-content: center;
width: 168px;
padding: 1rem;
`

const SocialIcon = styled.img`

`

export { StyledSocials, SocialsItem, SocialIcon }
