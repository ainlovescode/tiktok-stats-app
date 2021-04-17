import MetricsDisplayOverview from "./MetricsDisplayOverview/MetricsDisplayOverview";
import React from 'react';


export default function MetricsDisplay(props) {

    return (
        <div className="metrics-display">
            <MetricsDisplayOverview username={props.username}
                                    profileEngRate={props.analyticsResponse.data["profile_eng_rate"]}/>
        </div>
    )
}