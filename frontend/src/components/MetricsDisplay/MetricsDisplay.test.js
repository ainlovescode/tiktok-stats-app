import React from 'react'
import {shallow} from 'enzyme'
import MetricsDisplay from "./MetricsDisplay";
import fakeApiResponse from "../../mocks/fake_analytics_response.json"

describe("MetricsDisplay", function () {


    it("should render pass user info and analytics props to overview", function (){
        const fakeUserInfo = fakeApiResponse.user_info;
        const fakeAnalytics = fakeApiResponse.analytics;

        const wrapper = shallow(<MetricsDisplay userInfo={fakeUserInfo} analytics={fakeAnalytics}/>);

        expect(wrapper.exists("MetricsDisplayOverview")).toBe(true);
        expect(wrapper.find("MetricsDisplayOverview").prop("userInfo")).toBe(fakeUserInfo);
        expect(wrapper.find("MetricsDisplayOverview").prop("analytics")).toBe(fakeAnalytics);

        expect(wrapper.exists("MetricsDisplayTable")).toBe(true);
        expect(wrapper.find("MetricsDisplayTable").prop("postMetadataAll")).toBe(fakeAnalytics.post_metadata_all);
    })
})