import './App.scss';
import ToDo from './components/ToDo';
import AsideBar from './components/AsideBar';
import Settings from './components/Settings';
import { useState } from 'react';

function App() {
    const [toDo, setToDo] = useState(true);
    const [settings, setSettings] = useState(false);
    const [userName, setUserName] = useState();
    const [userStatus, setUserStatus] = useState();

    const getAsideAction = (button) => {
        const actions = {
            todo: () => {
                setToDo(true);
                setSettings(false);
            },
            settings: () => {
                setSettings(true);
                setToDo(false);
            },
        };
        return actions[button];
    };

    const setInfo = (setUserInfo) => {
        const updateInfo = {
            name: (newUserInfo) => {
                setUserName(newUserInfo);
            },
            status: (newUserInfo) => {
                setUserStatus(newUserInfo);
            },
        };
        return updateInfo[setUserInfo];
    };

    return (
        <div className="app">
            <AsideBar
                getAsideAction={getAsideAction}
                dataUserInfo={{ userName, userStatus }}
            />
            {toDo && <ToDo />}
            {settings && <Settings setInfo={setInfo} />}
        </div>
    );
}

export default App;
