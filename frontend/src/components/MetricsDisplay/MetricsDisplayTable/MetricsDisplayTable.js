import React from 'react'
import MetricsDisplayTableRow from "./MetricsDisplayTableRow";

export default function MetricsDisplayTable(props) {

    return (
        <div className={"metrics-display__table-container"}>
            <h2>Post Engagement</h2>
            <table className={"metrics-display-table"}>
                <thead>
                <tr className={"metrics-display__table-row"} style={{fontWeight: 'bold'}}>
                    <th>Post Eng. Rate (%)</th>
                    <th>Caption</th>
                </tr>
                </thead>
                <tbody>
                {props.postMetadataAll.map((postMetadata, idx) => (
                    <MetricsDisplayTableRow
                        key={idx}
                        postMetadata={postMetadata}
                    />
                ))}
                </tbody>
            </table>
        </div>
    )
}