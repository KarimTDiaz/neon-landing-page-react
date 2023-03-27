import SectionTitle from '../section-title/SectionTitle';
import SectionText from '../section-text/SectionText';
import {
	FONT_SIZE,
	SECTION_TITLES,
	SECTION_TEXTS,
	FEATURES_CHECKLIST
} from '../../constants/consts';
import {
	FeaturedHead,
	FeaturesCheckList,
	FeaturesContainer,
	FeaturesDataContainer,
	FeaturesImage,
	StyledFeatures
} from './styles';
import CheckList from '../check-list/CheckList';

const SectionFeatures = () => {
	return (
		<FeaturesContainer>
			<StyledFeatures>
				<FeaturedHead>
					<SectionTitle
						title={SECTION_TITLES.features}
						size={FONT_SIZE.xxl}
						sizeDsktp={FONT_SIZE.xxlDsktp}
					/>
					<SectionText text={SECTION_TEXTS.features} size={FONT_SIZE.m} />
				</FeaturedHead>
				<FeaturesDataContainer>
					<FeaturesImage
						src='./public/images/features-02.png'
						alt='Foto Features'
					/>
					<FeaturesCheckList>
						<SectionTitle
							title={SECTION_TITLES.standarized}
							size={FONT_SIZE.xxl}
							sizeDsktp={FONT_SIZE.xxl}
						/>
						<SectionText text={SECTION_TEXTS.standarized} size={FONT_SIZE.m} />
						<CheckList items={FEATURES_CHECKLIST} />
					</FeaturesCheckList>
				</FeaturesDataContainer>
			</StyledFeatures>
		</FeaturesContainer>
	);
};

export default SectionFeatures;
