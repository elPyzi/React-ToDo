import './App.scss';
import ToDo from './components/ToDo';
import AsideBar from './components/AsideBar';
import Settings from './components/Settings';
import { useState } from 'react';

function App() {
    const [toDo, setToDo] = useState(true);
    const [settings, setSettings] = useState(false);

    const handleToDo = () => {
        setToDo(true);
        setSettings(false);
    };

    const handleSettings = (currentState) => {
        setSettings(currentState);
        setToDo(!currentState);
    };

    return (
        <div className="app">
            <AsideBar
                className="aside-bar"
                handleToDo={handleToDo}
                handleSettings={handleSettings}
            />
            {toDo && <ToDo className="to-do" />}
            {settings && <Settings />}
        </div>
    );
}

export default App;
