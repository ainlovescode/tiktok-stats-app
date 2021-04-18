import MetricsDisplayOverview from "./MetricsDisplayOverview/MetricsDisplayOverview";
import React from 'react';
import MetricsDisplayTable from "./MetricsDisplayTable/MetricsDisplayTable";


export default function MetricsDisplay(props) {

    return (
        <div className="metrics-display">
            <MetricsDisplayOverview username={props.username}
                                    profileEngRate={props.apiResponse.data["profile_eng_rate"]}/>
            <MetricsDisplayTable postMetadataAll={props.apiResponse.data["post_metadata_all"]}/>
        </div>
    )
}