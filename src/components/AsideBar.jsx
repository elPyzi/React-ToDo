import { useState } from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/AsideBar.scss';
import Avatar from './Avatar';
import MarkerList from './MarkersList';

function AsideBar({ handleToDo, handleSettings }) {
    const [userName, setUserName] = useState(
        localStorage.getItem('name') || 'John Doe',
    );
    const [userStatus, setUserStatus] = useState(
        localStorage.getItem('status') || 'Love apples',
    );

    const [activeBtn, setActiveBtn] = useState('todo');

    const handleAsideBtns = (asidebtn) => {
        if (asidebtn === 'todo') {
            handleToDo();
            setActiveBtn('todo');
        } else {
            handleSettings(true);
            setActiveBtn('settings');
        }
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
    handleToDo: PropTypes.func.isRequired,
    handleSettings: PropTypes.func.isRequired,
};

export default AsideBar;
