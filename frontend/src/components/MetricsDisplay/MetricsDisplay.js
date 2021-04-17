import MetricsDisplayOverview from "./MetricsDisplayOverview/MetricsDisplayOverview";

export default function MetricsDisplay(props) {
    return (
        <div className="metrics-display">
            <MetricsDisplayOverview username={props.username} profileData={props.profileData}/>
        </div>
    )
}