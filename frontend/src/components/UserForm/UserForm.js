import './UserForm.css';
import React from 'react';

function UserForm(props) {
    const [username, setUsername] = React.useState("")

    function onSubmit(e) {
        e && e.preventDefault();
        props.onSubmit(username);
    }

    function onChange(e) {
        setUsername(e.target.value)
    }

    return (
        <div className="username-form">
            <h2>Check their TikTok Engagement Rate!</h2>

            <form className="form-inline" onSubmit={onSubmit}>
                <label>What is their username?</label>
                <input name="username" type="text" value={username} onChange={onChange}/>
                <button type="submit">Check this user!</button>
            </form>
        </div>
    )
}

export default UserForm;