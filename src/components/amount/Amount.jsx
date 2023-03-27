
import { AmountItem, StyledAmount } from './styles';
import { COLORS, FONT_SIZE, FONT_WEIGHT } from '../../constants/consts';

const Amount = ({ amount }) => {
    return (
        <StyledAmount>
            <AmountItem color={COLORS.textColor} size={FONT_SIZE.xl}>$</AmountItem>
            <AmountItem color={COLORS.titleColor} size={FONT_SIZE.xxlDsktp} weight={FONT_WEIGHT.xl}>{amount}</AmountItem>
            <AmountItem color={COLORS.textColor} >/mo</AmountItem>
        </StyledAmount>
    );
};

export default Amount;
