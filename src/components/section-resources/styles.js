import styled from "styled-components";

const StyledResources = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
max-width: 1104px;
margin-left:auto;
margin-right: auto;
padding: 2rem 1rem;
text-align: center;
`

const ResourcesHead = styled.div`
@media screen and (min-width:768px) {
	width: 700px;
margin-left: auto;
margin-right: auto;	
}
`


export { StyledResources, ResourcesHead }