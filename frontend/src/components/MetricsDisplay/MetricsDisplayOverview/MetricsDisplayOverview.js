import "./MetricsDisplayOverview.css"
import profile_photo from "../../../mocks/avatar.png"

export default function MetricsDisplayOverview (props) {
    return (
        <div className="metrics-display__overview">
            <div className="user__profile-photo">
                <img src={profile_photo} width="64px" alt="profile of tiktok user"/>
            </div>
            <div className="user__username">
                <h3>{props.username}</h3>
                Sample Name
            </div>
            <hr/>
            <div className="user__metrics" display="table">
                <div className="user-profile" display="table-row">
                    <div className="bold user-profile__rate">
                        {props.profile_rate} %</div>
                    <em>Profile Engagement Rate</em>
                </div>
            </div>
        </div>
    )
}