import { useState } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/Settings.scss';

function Settings({ setInfo }) {
    const [userName, setUserName] = useState();
    const [userStatus, setUserStatus] = useState();

    const handleUserName = (event) => {
        setUserName(event.target.value);
        setInfo('name')(event.target.value);
    };

    const handleUserStatus = (event) => {
        setUserStatus(event.target.value);
        setInfo('status')(event.target.value);
    };

    return (
        <div className="settings">
            <div className="settings__container">
                <div className="settings__profile">
                    <h2 className="settings__profile-heading">Profile</h2>
                    <input
                        type="text"
                        className="settings__input username"
                        value={userName}
                        onChange={handleUserName}
                        placeholder="Joe Doe"
                        maxLength={15}
                    />
                    <input
                        type="text"
                        className="settings__input status"
                        value={userStatus}
                        onChange={handleUserStatus}
                        placeholder="Love Apples"
                        maxLength={17}
                    />
                </div>
                <details className="settings__more">
                    <summary className="settings__more-heading">
                        About Us
                    </summary>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quae repudiandae, ratione rerum amet aspernatur
                        recusandae vel blanditiis quos vitae, officia quia
                        ducimus cumque. Similique deserunt, libero commodi
                        reiciendis quod doloribus?
                    </p>
                </details>
            </div>
        </div>
    );
}

Settings.propTypes = {
    setInfo: PropTypes.func.isRequired,
};

export default Settings;
