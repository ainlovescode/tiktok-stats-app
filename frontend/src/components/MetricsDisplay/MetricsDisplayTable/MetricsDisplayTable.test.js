import {shallow, mount} from 'enzyme';
import MetricsDisplayTable from "./MetricsDisplayTable";
import MetricsDisplayTableRow from "./MetricsDisplayTableRow";
import fakeApiResponse from "../../../mocks/fake_analytics_response.json";
import React from 'react';

describe("MetricsDisplayTable", function () {

    const fakePostMetadataAll = fakeApiResponse.data.post_metadata_all;

    it("should pass metrics list data props properly", function () {
        const wrapper = mount(< MetricsDisplayTable postMetadataAll={fakePostMetadataAll}/>);

        expect(wrapper.exists("thead")).toBe(true);

        expect(wrapper.find("MetricsDisplayTableRow").at(0).prop("postMetadata")).toBe(fakePostMetadataAll[0]);
        expect(wrapper.find("MetricsDisplayTableRow").at(1).prop("postMetadata")).toBe(fakePostMetadataAll[1]);
        expect(wrapper.find("MetricsDisplayTableRow").at(2).prop("postMetadata")).toBe(fakePostMetadataAll[2]);
    })
})