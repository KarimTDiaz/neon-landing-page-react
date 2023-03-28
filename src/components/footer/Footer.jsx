import Logo from '../logo/Logo';
import { PrivacyLink, PrivacyLinksContainer, StyledFooter } from './styles';
import { FOOTER } from '../../constants/footer';
import FooterList from '../footer-list/Footerlist';

const Footer = () => {
	return (
		<StyledFooter>
			<div>
				<Logo />
				<PrivacyLinksContainer>
					<PrivacyLink>Terms</PrivacyLink>
					<PrivacyLink>Privacy Policy</PrivacyLink>
				</PrivacyLinksContainer>
			</div>
			{FOOTER.map(item => (
				<FooterList key={item.id} title={item.title} list={item.list} />
			))}
		</StyledFooter>
	);
};

export default Footer;
