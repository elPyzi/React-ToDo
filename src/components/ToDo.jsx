import { useState } from 'react';
import '../assets/styles/ToDo.scss';

function ToDo() {
    const [task, setTask] = useState('');
    const [time, setTime] = useState('00:00');
    const [done, setDone] = useState(false);

    const addTask = () => {
        // const newTask = {
        //     task: task,
        //     time: time,
        // };
    };

    return (
        <div className="to-do">
            <h1 className="to-do__heading">Today main focus</h1>
            <h2 className="to-do__slogan">Do your day better</h2>
            <div className="to-do__tasks-container">
                <div className="to-do__input-container">
                    <div className="to-do__filter">
                        <div className="to-do__filter-item"></div>
                        <div className="to-do__filter-item"></div>
                        <div className="to-do__filter-item"></div>
                    </div>
                    <input
                        type="text"
                        placeholder="What is your next task?"
                        className="to-do_input"
                        maxLength={40}
                        value={task}
                        onChange={(event) => setTask(event.target.value)}
                    />
                    <div className="to-do__actions">
                        <input
                            type="time"
                            className="to-do__time"
                            value={time}
                            onChange={(event) => setTime(event.target.time)}
                        />
                        <button
                            type="button"
                            className="to-do__add-task"
                            onClick={addTask}
                        >
                            add
                        </button>
                    </div>
                </div>
                <ul className="to-do__container-tasks">
                    <li className="to-do__task">
                        <div className="to-do__title"></div>
                        <div className="to-do__task-text">{task}</div>
                        <div className="to-do__task-time">{time}</div>
                        <button
                            type="button"
                            className={`to-do__done ${done === true ? 'done' : ''}`}
                        >
                            done
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default ToDo;
