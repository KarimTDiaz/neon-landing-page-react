import styled from "styled-components";

const StyledFocus = styled.section`
max-width: 1104px;
margin-left:auto;
margin-right: auto;
padding: 0 1rem;
text-align: center;
`
const FocusImage = styled.img`
margin-bottom: 2rem;
`

const FocusCardsContainer = styled.div`
@media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    gap: 3rem;
}
`

export { StyledFocus, FocusImage, FocusCardsContainer }