import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/AsideBar.scss';
import Avatar from './Avatar';
import MarkerList from './MarkersList';

function AsideBar({ getAsideAction, dataUserInfo }) {
    const [userName, setUserName] = useState(
        dataUserInfo.userName || 'Joe Doe',
    );
    const [userStatus, setUserStatus] = useState(
        dataUserInfo.userStatus || 'Love Apples',
    );

    useEffect(() => {
        setUserName(dataUserInfo.userName || 'Joe Doe');
        setUserStatus(dataUserInfo.userStatus || 'Love Apples');
    }, [dataUserInfo.userName, dataUserInfo.userStatus]);

    const [activeBtn, setActiveBtn] = useState('todo');

    const handleAsideBtns = (asidebtn) => {
        getAsideAction(asidebtn)();
        setActiveBtn(asidebtn);
    };

    return (
        <>
            <div className="aside-bar-container">
                {/* Header */}

                <header className="header">
                    <div className="header__user-info">
                        <Avatar />
                        <h2 className="header__userName">{userName}</h2>
                        <p className="header__status">{userStatus}</p>
                    </div>
                </header>

                {/* Content */}

                <div className="aside-bar__main">
                    <div className="type-task">
                        <button
                            className={`type-task__btn-toDo ${activeBtn === 'todo' ? 'active' : ''}`}
                            onClick={() => handleAsideBtns('todo')}
                        >
                            Today tasks
                        </button>
                        <MarkerList />
                    </div>
                    <button
                        className={`btn-settings ${activeBtn === 'settings' ? 'active' : ''}`}
                        onClick={() => handleAsideBtns('settings')}
                    >
                        Settings
                    </button>
                </div>
            </div>
        </>
    );
}

AsideBar.propTypes = {
    getAsideAction: PropTypes.func.isRequired,
    dataUserInfo: PropTypes.object,
};

export default AsideBar;
