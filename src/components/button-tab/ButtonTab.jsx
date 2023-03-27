import { ButtonContainer, StyledButtonTab } from "./styles";

const ButtonTab = ({ data }) => {
    return (
        <ButtonContainer>
            <StyledButtonTab>
                {data}
            </StyledButtonTab>
        </ButtonContainer>
    );
}

export default ButtonTab