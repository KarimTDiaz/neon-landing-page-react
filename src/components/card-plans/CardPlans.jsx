import {
	CardPlansTitle,
	CardPlansData,
	StyledCardPlans,
	CardPlansContainer
} from './styles';
import ButtonBlue from '../button-blue/ButtonBlue';
import CheckList from '../check-list/CheckList';
import Amount from '../amount/Amount';

const CardPlans = ({ items }) => {
	return (
		<CardPlansContainer>
			{items.map((item, index) => (
				<StyledCardPlans key={item.id}>
					<CardPlansTitle>{item.title}</CardPlansTitle>
					<Amount amount={item.amount} />
					<CardPlansData>{item.text}</CardPlansData>
					<ButtonBlue
						text='Start Free Trial'
						width='295px'
						height='40px'
						margin={1}
					/>
					<CheckList items={item.checkItems} />
				</StyledCardPlans>
			))}
		</CardPlansContainer>
	);
};

export default CardPlans;
