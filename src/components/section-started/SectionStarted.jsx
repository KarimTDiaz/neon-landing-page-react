import {
	SECTION_TEXTS,
	SECTION_TITLES,
	FONT_SIZE
} from '../../constants/consts';
import ButtonBlue from '../button-blue/ButtonBlue';
import SectionText from '../section-text/SectionText';
import SectionTitle from '../section-title/SectionTitle';
import { StartedContainer, StyledStarted } from './styles';

const SectionStarted = () => {
	return (
		<StartedContainer>
			<StyledStarted>
				<div>
					<SectionTitle
						title={SECTION_TITLES.started}
						size={FONT_SIZE.xxl}
						sizeDsktp={FONT_SIZE.xxl}
					/>
					<SectionText text={SECTION_TEXTS.started} />
				</div>
				<ButtonBlue text='Start Free Trial' width='10.125rem' height='2.5rem' />
			</StyledStarted>
		</StartedContainer>
	);
};

export default SectionStarted;
