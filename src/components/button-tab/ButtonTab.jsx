import { ButtonContainer, StyledButtonLearn } from "./styles";

const ButtonTab = ({ items }) => {
    return (
        <ButtonContainer>
            <StyledButtonLearn>
                {items}
            </StyledButtonLearn>
        </ButtonContainer>
    );
}

export default ButtonTab