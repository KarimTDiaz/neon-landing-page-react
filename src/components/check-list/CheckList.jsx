import { CheckData, CheckIcon, StyledCheckItem } from './styles';

const CheckList = ({ items }) => {
	return (
		<ul>
			{items.map(item => (
				<StyledCheckItem key={item.id}>
					<CheckIcon src='public/images/check.svg' alt='icono de check' />
					<CheckData>{item.text}</CheckData>
				</StyledCheckItem>
			))}
		</ul>
	);
};

export default CheckList;
