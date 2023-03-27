import { StyledSocials, SocialsItem, SocialIcon } from './styles';
import { SOCIALS } from '../../constants/consts';

const Socials = () => {
    return (
        <section>
            <StyledSocials>
                {SOCIALS.map(icon => (
                    <SocialsItem key={icon.id}>
                        <SocialIcon src={icon.url} />
                    </SocialsItem>
                ))}
            </StyledSocials>
        </section>
    );
};

export default Socials;
