import styled from 'styled-components';


const FeaturesContainer = styled.div`
	background-image: url('./images/features-illustration.svg'),
		linear-gradient(to bottom, #37415149, transparent, transparent, transparent);
	background-size: auto;
	background-repeat: no-repeat;
	background-position: top right -15%;
`;

const StyledFeatures = styled.section`
position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1104px;
	margin-left: auto;
	margin-right:auto;
	padding: 2rem 1rem;
	text-align: center;
	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 1px;
		background-color: #37415149;
	}
`;

const FeaturedHead = styled.div`
	@media screen and (min-width: 768px) {
		margin-left: auto;
		margin-right: auto;
		width: 760px;
	}
`;

const FeaturesDataContainer = styled.div`
	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		align-items: center;
		text-align: left;
		gap: 4rem;
	}
`;

const FeaturesImage = styled.img`
	padding-top: 3rem;
	@media screen and (min-width: 768px) {
		width: 540px;
		height: 580px;
	}
`;

const FeaturesCheckList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	@media screen and (min-width: 768px) {
		gap: 0.5rem;
		align-items: baseline;
	}
`;

export {
	FeaturesContainer,
	StyledFeatures,
	FeaturedHead,
	FeaturesImage,
	FeaturesDataContainer,
	FeaturesCheckList
};
