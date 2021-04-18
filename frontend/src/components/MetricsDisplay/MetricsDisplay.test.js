import {mount, shallow} from 'enzyme'
import MetricsDisplay from "./MetricsDisplay";
import fakeApiResponse from "../../mocks/fake_analytics_response.json"

describe("MetricsDisplay", function () {

    const fakeUsername = "fakeUsername";

    it("should render overview component and pass analytics props to overview", function (){
        const fakeProfileEngRate = fakeApiResponse.data.profile_eng_rate;
        const fakePostMetadataAll = fakeApiResponse.data.post_metadata_all

        const wrapper = shallow(<MetricsDisplay username={fakeUsername} apiResponse={fakeApiResponse}/>);

        expect(wrapper.exists("MetricsDisplayOverview")).toBe(true);
        expect(wrapper.find("MetricsDisplayOverview").prop("username")).toBe(fakeUsername);
        expect(wrapper.find("MetricsDisplayOverview").prop("profileEngRate")).toBe(fakeProfileEngRate);

        expect(wrapper.exists("MetricsDisplayTable")).toBe(true);
        expect(wrapper.find("MetricsDisplayTable").prop("postMetadataAll")).toBe(fakePostMetadataAll);
    })
})