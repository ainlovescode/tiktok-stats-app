import "./MetricsDisplayOverview.css"

export default function MetricsDisplayOverview (props) {
    return (
        <div className="metrics-display__overview">
            <div className="user__profile-photo">
                <img src={props.userInfo.profile_img_url} width="64px" alt="profile of tiktok user"/>
            </div>
            <div >
                <h3 className="user__username">{props.userInfo.username}</h3>
                <div className="user__display_name">{props.userInfo.display_name}</div>
            </div>
            <hr/>
            <div className="user__metrics" display="table">
                <div className="user-profile" display="table-row">
                    <div className="bold user__follower_count">
                        {props.userInfo.follower_count} %</div>
                    <em>Followers</em>
                    <div className="bold user__profile_eng_rate">
                        {props.analytics.profile_eng_rate} %</div>
                    <em>Profile Engagement Rate</em>
                    <div className="bold user__average_views">
                        {props.analytics.average_views} %</div>
                    <em>Average Views per TikTok</em>
                </div>
            </div>
        </div>
    )
}