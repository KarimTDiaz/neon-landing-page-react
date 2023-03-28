import styled from "styled-components";
import { COLORS } from "../../constants/consts";

const StartedContainer = styled.section`
padding: 2rem 1rem;
`
const StyledStarted = styled.div`
padding: 2rem 1.5rem;
text-align: center;
background-color: red;
background-image: linear-gradient(to bottom left , ${COLORS.decoColor}, ${COLORS.primaryColor});
border-radius: 5px;

`

export { StyledStarted, StartedContainer }