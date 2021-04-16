import {shallow} from 'enzyme';
import Header from "./Header";

describe("Header", function () {
    it("should render simple heading", function () {
        const wrapper = shallow(<Header/>);

        expect(wrapper.find("h1").at(0).text()).toBe("My Projects - AinLovesCode")
    })
})