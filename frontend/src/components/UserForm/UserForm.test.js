import {shallow} from 'enzyme';
import React from 'react';
import UserForm from "./UserForm";

describe("UserForm", function () {
    it("should render form heading, username label & field, and submit button", function () {
        const wrapper = shallow(<UserForm/>);

        expect(wrapper.find("h2").at(0).text()).toBe("Check their TikTok Engagement Rate!")
        expect(wrapper.find("label").at(0).text()).toBe("What is their username?");
        expect(wrapper.find("input").at(0).prop("name")).toBe("username");
        expect(wrapper.find("button").at(0).text()).toBe("Check this user!")
    })
})