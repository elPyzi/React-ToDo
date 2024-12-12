import { useEffect, useState } from 'react';
import '../assets/styles/ToDo.scss';

function ToDo() {
    const [task, setTask] = useState('');
    const [time, setTime] = useState('00:00');
    const [toDoList, setToDoList] = useState([]);
    const [color, setColor] = useState('item1');
    const [isActiveSelect, setActiveSelect] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        if (toDoList.length === 0) {
            const defaultTask = {
                id: 1,
                task: 'Купить яблоки',
                time: '8:00',
                taskColor: 'item1',
            };
            setToDoList([defaultTask]);
        }
    }, []);

    const cleanInputTask = () => {
        setTime('00:00');
        setTask('');
    };

    const addTask = () => {
        const isEmpty = task == '' ? false : true;
        if (isEmpty) {
            const newTask = {
                id: toDoList.length + 1,
                task: task,
                time: time[0].startsWith('0')
                    ? time.replace('0', '')
                    : time.trim(),
                taskColor: color,
            };
            setToDoList([...toDoList, newTask]);
            cleanInputTask();
        }
    };

    const removeTask = (taskId) => {
        const updatedTasks = toDoList.filter((tasks) => taskId !== tasks.id);
        setToDoList(updatedTasks);
        if (
            currentPage > 0 &&
            updatedTasks.length <= currentPage * itemsPerPage
        ) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if ((currentPage + 1) * itemsPerPage < toDoList.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const paginatedTasks = toDoList.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage,
    );

    return (
        <div className="to-do">
            <h1 className="to-do__heading">Today main focus</h1>
            <h2 className="to-do__slogan">Do your day better</h2>
            <div className="to-do__tasks-container">
                <div className="to-do__filter-input">
                    <div className="to-do__input-container">
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
                                onChange={(event) =>
                                    setTime(event.target.value)
                                }
                                min={'00:00'}
                                max={'23:59'}
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
                    <div
                        className="to-do__filter filter"
                        onClick={() => setActiveSelect(!isActiveSelect)}
                    >
                        <div className="filter__btn">
                            <div className="filter__item"></div>
                            <div className="filter__item"></div>
                            <div className="filter__item"></div>
                        </div>
                        {isActiveSelect && (
                            <div className="filter__dropdown-content">
                                <div
                                    className="filter__dropdown-item"
                                    onClick={() => setColor('item1')}
                                ></div>
                                <div
                                    className="filter__dropdown-item"
                                    onClick={() => setColor('item2')}
                                ></div>
                                <div
                                    className="filter__dropdown-item"
                                    onClick={() => setColor('item3')}
                                ></div>
                                <div
                                    className="filter__dropdown-item"
                                    onClick={() => setColor('item4')}
                                ></div>
                                <div
                                    className="filter__dropdown-item"
                                    onClick={() => setColor('item5')}
                                ></div>
                            </div>
                        )}
                    </div>
                    {toDoList.length > itemsPerPage && (
                        <div className="to-do__pagination">
                            <button
                                type="button"
                                className="to-do__pagination-btn"
                                onClick={handlePrevPage}
                                disabled={currentPage === 0}
                            >
                                &lt;
                            </button>
                            <span className="to-do__pagination-page">
                                {currentPage + 1}
                            </span>
                            <button
                                type="button"
                                className="to-do__pagination-btn"
                                onClick={handleNextPage}
                                disabled={
                                    (currentPage + 1) * itemsPerPage >=
                                    toDoList.length
                                }
                            >
                                &gt;
                            </button>
                        </div>
                    )}
                </div>
                <ul className="to-do__container-tasks">
                    {paginatedTasks.map((task) => (
                        <li key={task.id} className="to-do__task">
                            <div>
                                <div
                                    className={`to-do__title ${task.taskColor === '' ? 'item1' : task.taskColor}`}
                                ></div>
                            </div>
                            <div className="to-do__task-text">{task.task}</div>
                            <div className="to-do__task-time">{task.time}</div>
                            <button
                                type="button"
                                className="to-do__done"
                                onClick={() => removeTask(task.id)}
                            >
                                done
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default ToDo;
