import {
    StyledFocusCard,
    FocusCardIcon,
    FocusCardTitle,
    FocusCardData
} from './styles';

const CardFocus = ({ url, title, text }) => {
    return (
        <StyledFocusCard>
            <FocusCardIcon src={url} alt={title} />
            <FocusCardTitle>{title}</FocusCardTitle>
            <FocusCardData>{text}</FocusCardData>
        </StyledFocusCard>
    );
};

export default CardFocus;
