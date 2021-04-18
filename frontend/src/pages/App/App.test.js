import {mount, shallow} from 'enzyme'
import App from "./App";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import UserForm from "../../components/UserForm/UserForm";
import MetricsDisplay from "../../components/MetricsDisplay/MetricsDisplay";

import fakeApiResponse from "../../mocks/fake_analytics_response.json"
import { act } from 'react-dom/test-utils';


const whenStable = async () => {
    await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 0));
    });
};

import axios from "axios";

jest.mock('axios');

describe("App", function () {
    function flushPromises() {
        return new Promise(resolve => setImmediate(resolve));
    }

    const fakeUsername = "fakeUsername"

    beforeEach( async () => {
        axios.get=jest.fn().mockResolvedValueOnce(fakeApiResponse);
    })

    it("should render header, footer, and form", function (){
        const wrapper = shallow(<App />);

        expect(wrapper.exists("Header")).toBe(true);
        expect(wrapper.exists("Footer")).toBe(true);
        expect(wrapper.exists("UserForm")).toBe(true);

    })

    it("should not render metrics display without response", function (){
        const wrapper = shallow(<App/>);

        expect(wrapper.exists("MetricsDisplay")).toBe(false);

    })

    it("should render metrics display when username is submitted", async function (){
        const apiUrl = "http://localhost:5000/"

        const wrapper = mount(<App/>);

        expect(wrapper.exists("MetricsDisplay")).toBeFalsy();

        wrapper.find("input[name='username']").simulate("change", {
            target: {
                value: fakeUsername
        }});

        wrapper.find("form").simulate("submit");
        await whenStable();

        expect(axios.get).toBeCalledWith(apiUrl + 'analytics/' + fakeUsername);

        expect(wrapper.find("MetricsDisplay")).toBeTruthy();

    })
})