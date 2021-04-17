import {mount, shallow} from 'enzyme'
import MetricsDisplay from "./MetricsDisplay";

describe("MetricsDisplay", function () {
    const fakeProps = {
        "username": "fakeUsername",
        "profileEngRate":"123.00%"
    }
    it("should render overview component and pass props to overview", function (){
        const wrapper = shallow(<MetricsDisplay username={fakeProps.username} profileData={fakeProps.profileEngRate}/>);

        expect(wrapper.exists("MetricsDisplayOverview")).toBe(true);
        expect(wrapper.find("MetricsDisplayOverview").prop("username")).toBe(fakeProps.username);
        expect(wrapper.find("MetricsDisplayOverview").prop("profileData")).toBe(fakeProps.profileEngRate);
    })
})