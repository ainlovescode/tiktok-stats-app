import {shallow, mount} from 'enzyme';
import MetricsDisplayTableRow from "./MetricsDisplayTableRow";
import fakePostMetadataAll from "../../../mocks/fake_analytics_response.json";
import React from 'react';

describe("MetricsDisplayTableRow", function () {
    const fakePostMetadata = fakePostMetadataAll.data.post_metadata_all[0]

    it("should pass metrics list data props properly", function () {
        const wrapper = mount(
            <table>
                <tbody>
                    < MetricsDisplayTableRow postMetadata={fakePostMetadata} />
                </tbody>
            </table>);

        const fakeCaption = fakePostMetadata["caption"]
        const fakePostEngRate = fakePostMetadata["post_eng_rate"]

        expect(wrapper.find(".metrics-display__table-row__caption").at(0).text()).toBe(fakeCaption);
        expect(wrapper.find(".metrics-display__table-row__post-rate").at(0).text()).toBe(fakePostEngRate.toString());
    })
})