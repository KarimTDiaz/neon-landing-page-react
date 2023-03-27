import { IconTabContainer, IconTab } from './styles';

const IconTabs = ({ icon }) => {
	return (
		<IconTabContainer>
			<IconTab src={icon} />
		</IconTabContainer>
	);
};

export default IconTabs;
