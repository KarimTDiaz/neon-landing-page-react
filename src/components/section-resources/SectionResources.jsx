import SectionTitle from '../section-title/SectionTitle';
import { FONT_SIZE, SECTION_TITLES } from '../../constants/consts';
import { ResourcesHead, StyledResources } from './styles';
import Tabs from '../tabs/Tabs';

const SectionResources = () => {
    return (
        <>
            <StyledResources>
                <ResourcesHead>
                    <SectionTitle
                        title={SECTION_TITLES.resources}
                        size={FONT_SIZE.xxl}
                        sizeDsktp={FONT_SIZE.xxlDsktp}
                    />
                </ResourcesHead>
                <Tabs />
            </StyledResources>
        </>
    );
};

export default SectionResources;
