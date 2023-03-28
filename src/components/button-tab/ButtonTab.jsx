import { ButtonContainer, StyledButtonTab } from './styles';

const ButtonTab = ({ data, index, setTabSelected, isActive }) => {
	return (
		<ButtonContainer isActive={isActive}>
			<StyledButtonTab
				onClick={() => {
					setTabSelected(index);
				}}
				isActive={isActive}
			>
				{data}
			</StyledButtonTab>
		</ButtonContainer>
	);
};

export default ButtonTab;
