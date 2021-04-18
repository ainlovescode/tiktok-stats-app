import React from 'react'
import {shallow, mount} from 'enzyme'
import MetricsDisplayFinePrint from "./MetricsDisplayFinePrint";

describe("MetricsDisplayFinePrint", function () {
    it("should render fine print sections", function () {
        const wrapper = shallow(< MetricsDisplayFinePrint />)

        expect(wrapper.find(".profile-eng").text()).toMatch("Profile engagement rate");
        expect(wrapper.find(".average-views").text()).toMatch("Average views");
        expect(wrapper.find(".post-eng").text()).toMatch("Post engagement rate");
    })
})