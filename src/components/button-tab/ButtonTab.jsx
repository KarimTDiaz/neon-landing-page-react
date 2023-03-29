

import { PlaneIcon } from '../../constants/icons';
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
				<PlaneIcon />
				{data}
			</StyledButtonTab>
		</ButtonContainer>
	);
};

export default ButtonTab;
