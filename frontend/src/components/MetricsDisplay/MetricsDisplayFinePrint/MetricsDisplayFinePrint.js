import React from 'react';

export default function MetricsDisplayFinePrint() {
    return (
        <div className="metrics-display-fineprint">
            <div className={"fineprint profile-eng"}>
                <sup>1</sup>Profile engagement rate is calculated as follows:
                <br/>
                (Total Likes + Comments + Shares for the 20 most recent posts)
                <br/>
                divided by
                <br/>
                (Follower count × 20)
            </div>
            <div className={"fineprint average-views"}>
                <sup>2</sup>Average views per TikTok is calculated by
                finding the average number of views for the 20 most recent posts
            </div>
            <div className={"fineprint post-eng"}>
                <sup>3</sup>Post engagement rate is calculated as follows for <strong>each</strong>:
                <br/>
                Likes + Comments + Shares
                <br/>
                divided by
                <br/>
                Views
            </div>
        </div>
    )
}