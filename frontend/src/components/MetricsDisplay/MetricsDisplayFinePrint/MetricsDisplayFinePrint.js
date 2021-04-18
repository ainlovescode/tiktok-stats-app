import React from 'react';

export default function MetricsDisplayFinePrint() {
    return (
        <div className="metrics-display-fineprint">
            <hr/>
            <div className={"fineprint profile-eng"}>
                <sup>1</sup>Profile engagement rate is calculated as follows:
                <br/>
                <em>
                (Total Likes + Comments + Shares for the 20 most recent posts)
                <br/>
                --- divided by ---
                <br/>
                (Follower count × 20)</em>
            </div>
            <div className={"fineprint average-views"}>
                <sup>2</sup>Average views per TikTok is calculated by:
                <br/>
                <em>Total views for the 20 most recent posts
                <br/>
                --- divided by ---
                <br/>
                20</em>
            </div>
            <div className={"fineprint post-eng"}>
                <sup>3</sup>Post engagement rate is calculated as follows for <strong>each post</strong>:
                <br/>

                <em>Likes + Comments + Shares
                <br/>
                --- divided by ---
                <br/>
                Views</em>
            </div>
        </div>
    )
}