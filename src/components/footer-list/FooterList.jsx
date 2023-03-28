import {
	FooterListItem,
	FooterListLink,
	FooterListTitle,
	StyledFooterList
} from './styles';

const FooterList = ({ title, list }) => {
	console.log(list);
	return (
		<StyledFooterList>
			<FooterListTitle>{title}</FooterListTitle>
			{list.map(item => (
				<FooterListItem key={item.id}>
					<FooterListLink>{item.text}</FooterListLink>
				</FooterListItem>
			))}
		</StyledFooterList>
	);
};

export default FooterList;
