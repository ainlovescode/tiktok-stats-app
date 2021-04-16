import {shallow, mount} from 'enzyme'
import MetricsDisplayOverview from "./MetricsDisplayOverview";

describe("MetricsDisplayOverview", function () {
    it("should render profile photo, username, and engagement metrics with sample response data", function () {
        const fakeUsername = "myusername"
        const fakeProfileRate = "123.0"
        const wrapper = shallow(<MetricsDisplayOverview username={fakeUsername} profile_rate={fakeProfileRate}/>);

        expect(wrapper.exists(".user__profile-photo")).toBe(true);
        expect(wrapper.find(".user__username").text()).toMatch(fakeUsername);
        expect(wrapper.find(".user-profile").text()).toMatch(fakeProfileRate);
    })
})