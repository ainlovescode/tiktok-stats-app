import React from 'react'
import {shallow, mount} from 'enzyme'
import MetricsDisplayOverview from "./MetricsDisplayOverview";

import fakeResponse from "../../../mocks/fake_analytics_response.json"

describe("MetricsDisplayOverview", function () {
    const fakeUserInfo = fakeResponse.user_info;
    const fakeAnalytics = fakeResponse.analytics;

    it("should render profile photo, username, and engagement metrics with sample response data", function () {

        const wrapper = mount(<MetricsDisplayOverview userInfo={fakeUserInfo} analytics={fakeAnalytics}/>);


        expect(wrapper.find(".user__username").text()).toMatch(fakeUserInfo.username);
        expect(wrapper.find(".user__profile-photo").find("img").props().src).toEqual(fakeUserInfo.profile_img_url);
        expect(wrapper.find(".user__display_name").text()).toMatch(fakeUserInfo.display_name);

        expect(wrapper.find(".user__follower_count").text()).toMatch(fakeUserInfo.follower_count.toString());
        expect(wrapper.find(".user__profile_eng_rate").text()).toMatch(fakeAnalytics.profile_eng_rate.toString());
        expect(wrapper.find(".user__average_views").text()).toMatch(fakeAnalytics.average_views.toString());
    })
})