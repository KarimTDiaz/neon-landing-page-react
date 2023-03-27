import { ButtonContainer, StyledButtonTab } from './styles';

const ButtonTab = ({ data, index, setTabSelected }) => {
	return (
		<ButtonContainer>
			<StyledButtonTab
				onClick={() => {
					setTabSelected(index);
				}}
			>
				{data}
			</StyledButtonTab>
		</ButtonContainer>
	);
};

export default ButtonTab;
