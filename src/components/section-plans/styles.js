import styled from "styled-components";

const StyledPlans = styled.section`
max-width: 1104px;
margin-left: auto;
margin-right: auto;
padding:2rem 1rem;
text-align: center;
@media screen and (min-width: 768px) {
    padding: 2rem 0;
}
`

const PlansHead = styled.div`
@media screen and (min-width: 768px) {
    width: 700px;
    margin-left: auto;
    margin-right: auto;
}
`

export { StyledPlans, PlansHead }