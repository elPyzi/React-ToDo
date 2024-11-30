import './App.scss';
import ToDo from './components/ToDo';
import AsideBar from './components/AsideBar';
import Settings from './components/Settings';
import { useState } from 'react';

function App() {
    const [toDo, setToDo] = useState(true);
    const [settings, setSettings] = useState(false);

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

    return (
        <div className="app">
            <AsideBar getAsideAction={getAsideAction} />
            {toDo && <ToDo />}
            {settings && <Settings />}
        </div>
    );
}

export default App;
