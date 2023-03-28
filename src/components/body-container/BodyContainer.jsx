import Header from '../header/Header';
import SectionClients from '../section-clients/SectionClients';
import SectionFeatures from '../section-features/SectionFeatures';
import SectionFocus from '../section-focus/SectionFocus';
import SectionPlans from '../section-plans/SectionPlans';
import SectionResources from '../section-resources/SectionResources';
import SectionStarted from '../section-started/SectionStarted';
import Socials from '../socials/Socials';
const BodyContainer = () => {
    return (
        <>
            <Header />
            <Socials />
            <SectionFocus />
            <SectionFeatures />
            <SectionPlans />
            <SectionClients />
            <SectionResources />
            <SectionStarted />
        </>
    );
};

export default BodyContainer;
