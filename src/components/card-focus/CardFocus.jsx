import SectionText from '../section-text/SectionText';
import SectionTitle from '../section-title/SectionTitle';
import { FONT_SIZE } from '../../constants/consts';
import { StyledFocusCard, FocusCardIcon } from './styles';

const CardFocus = ({ url, title, text }) => {
    return (
        <StyledFocusCard>
            <FocusCardIcon src={url} alt={title} />
            <SectionTitle title={title} size={FONT_SIZE.l} sizeDsktp={FONT_SIZE.l} />
            <SectionText text={text} size={FONT_SIZE.s} />
        </StyledFocusCard>
    );
};

export default CardFocus;
