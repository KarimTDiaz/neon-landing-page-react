import {
    HeaderTop,
    HeaderTopBtnContainer,
    StyledHeader,
    HeaderData,
    HeaderTitle,
    HeaderDescription,
    HeaderDataBtnContainer,
    HeaderContainer
} from './styles';

import { COLORS } from '../../constants/consts';
import Logo from '../logo/Logo';

import ButtonBlue from '../button-blue/ButtonBlue';
import ButtonTransparent from '../button-transparent/ButtonTransparent';
import ButtonLearn from '../button-learn/ButtonLearn';
import ButtonGrey from '../button-grey/ButtonGrey';

const Header = () => {
    return (
        <>
            <HeaderContainer>
                <StyledHeader>
                    <HeaderTop>
                        <Logo />
                        <HeaderTopBtnContainer>
                            <ButtonTransparent text='Sign in' />
                            <ButtonBlue text='Get Started' width='138px' height='40px' />
                        </HeaderTopBtnContainer>
                    </HeaderTop>
                    <HeaderData>
                        <ButtonLearn />
                        <HeaderTitle>Where the world builds software</HeaderTitle>
                        <HeaderDescription>
                            Our landing page template works on all devices, so you only have to
                            set it up once, and get beautiful results forever.
                        </HeaderDescription>
                        <HeaderDataBtnContainer>
                            <ButtonBlue text='Get Started For Free' width='320px' height='48px' />
                            <ButtonGrey text='Explore Docs' width='320px' height='48px' />
                        </HeaderDataBtnContainer>
                    </HeaderData>
                </StyledHeader>
            </HeaderContainer>
        </>
    );
};

export default Header;
