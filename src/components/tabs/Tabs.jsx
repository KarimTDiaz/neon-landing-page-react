import { TABS, TABS_INFO } from "../../constants/consts"
import ButtonTab from "../button-tab/ButtonTab"
import { TabsButtons } from "./styles"

const Tabs = () => {
    return <TabsButtons>
        {TABS.map(tab => (
            <ButtonTab data={tab} />
        ))}
    </TabsButtons>

}

export default Tabs