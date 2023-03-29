import { TABS_INFO } from '../../constants/consts';
import ButtonTab from '../button-tab/ButtonTab';
import CardTabs from '../card-tabs/CardTabs';
import { TabsButtons } from './styles';
import { useState } from 'react';

const Tabs = () => {
	const [tabSelected, setTabSelected] = useState(0);
	return (
		<>
			<TabsButtons>
				{TABS_INFO.map((tab, index) => (
					< ButtonTab
						key={tab.id}
						data={tab.tab}
						index={index}
						setTabSelected={setTabSelected}
						isActive={tabSelected === index}
					/>
				))}
			</TabsButtons>
			<CardTabs
				items={TABS_INFO[tabSelected].cardInfo}
				tabSelected={tabSelected}
			/>
		</>
	);
};

export default Tabs;
