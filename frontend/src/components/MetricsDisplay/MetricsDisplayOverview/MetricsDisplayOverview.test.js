import {shallow, mount} from 'enzyme'
import MetricsDisplayOverview from "./MetricsDisplayOverview";

describe("MetricsDisplayOverview", function () {
    it("should render profile photo, username, and engagement metrics with sample response data", function () {
        const fakeUsername = "myusername"
        const fakeProfileEngRate = "123.0"
        const wrapper = shallow(<MetricsDisplayOverview username={fakeUsername} profileEngRate={fakeProfileEngRate}/>);

        expect(wrapper.exists(".user__profile-photo")).toBe(true);
        expect(wrapper.find(".user__username").text()).toMatch(fakeUsername);
        expect(wrapper.find(".user-profile").text()).toMatch(fakeProfileEngRate);
    })
})