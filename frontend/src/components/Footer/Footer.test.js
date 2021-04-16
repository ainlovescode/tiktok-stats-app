import {shallow, mount} from 'enzyme'
import Footer from "./Footer";

describe("Footer", function () {
    it("should render credits", function () {
        const wrapper = shallow(<Footer />);

        expect(wrapper.find('.footer-content').text()).toContain("Ainul Mardhiyyah");

    })
})