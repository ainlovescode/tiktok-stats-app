import React from 'react'
import MetricsDisplayTableRow from "./MetricsDisplayTableRow";

export default function MetricsDisplayTable(props) {

    return (
        <div>
            <table id={"metrics-table"}>
                <thead>
                <tr style={{fontWeight: 'bold'}}>
                    <th>Post Engagement Rate</th>
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