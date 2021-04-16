import './UserForm.css';

function UserForm(){
    return (
        <div className="username-form">
            <h2>Check their TikTok Engagement Rate!</h2>
            <form className="form-inline">
                <label>What is their username?</label>
                <input name="username" type="text"/>
                <button>Check this user!</button>
            </form>
        </div>
    )
}

export default UserForm;