import React from 'react'

export default function MetricsDisplayTableRow(props) {
    return (
        <tr className={"metrics-display__table-row"}>
            <td className={"metrics-display__table-row__post-rate"}>{props.postMetadata["post_eng_rate"]}</td>
            <td className={"metrics-display__table-row__caption"} >{props.postMetadata["caption"]}</td>
        </tr>

    )
}