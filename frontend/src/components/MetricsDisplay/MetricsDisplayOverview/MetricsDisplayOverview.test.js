import {shallow, mount} from 'enzyme'
import MetricsDisplayOverview from "./MetricsDisplayOverview";

describe("MetricsDisplayOverview", function () {
    it("should render profile photo, username, and engagement metrics", function () {
        const wrapper = shallow(<MetricsDisplayOverview/>);

        expect(wrapper.exists(".user__profile-photo")).toBe(true);
        expect(wrapper.exists(".user__username")).toBe(true);
        expect(wrapper.exists(".user-profile")).toBe(true);
        expect(wrapper.exists(".user-post")).toBe(true);
    })
})