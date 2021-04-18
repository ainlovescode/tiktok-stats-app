import MetricsDisplayOverview from "./MetricsDisplayOverview/MetricsDisplayOverview";
import React from 'react';
import MetricsDisplayTable from "./MetricsDisplayTable/MetricsDisplayTable";
import "./MetricsDisplay.css"
import MetricsDisplayFinePrint from "./MetricsDisplayFinePrint/MetricsDisplayFinePrint";

export default function MetricsDisplay(props) {
    return (
        <div className="metrics-display">
            <MetricsDisplayOverview userInfo={props.userInfo}
                                    analytics={props.analytics}/>
            <MetricsDisplayTable postMetadataAll={props.analytics["post_metadata_all"]}/>
            <MetricsDisplayFinePrint />
        </div>
    )
}