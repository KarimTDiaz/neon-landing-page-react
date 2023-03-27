import IconTabs from '../icon-tabs/IconTabs';
import { StyledTabCard, TabCardsContainer, TabCardData } from './styles';

const CardTabs = ({ items, tabSelected }) => {
	return (
		<TabCardsContainer>
			{items.map((item, index) => (
				<StyledTabCard key={item.id}>
					<IconTabs icon={item.url} tabSelected={tabSelected} />
					<TabCardData>{item.resource}</TabCardData>
				</StyledTabCard>
			))}
		</TabCardsContainer>
	);
};

export default CardTabs;
