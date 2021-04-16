import {mount, shallow} from 'enzyme'
import MetricsDisplay from "./MetricsDisplay";

describe("MetricsDisplay", function () {
    it("should render overview component", function (){
        const wrapper = shallow(<MetricsDisplay/>);

        expect(wrapper.exists("MetricsDisplayOverview")).toBe(true);
    })
})