import { useEffect, useRef, useState } from 'react';
import '../assets/styles/MarkerList.scss';

function MarkerList() {
    const [titleTasks, setTitleTasks] = useState([]);
    const [addTitleTaskBtn, setAddTitleTaskBtn] = useState(true);
    const [lastAddedTaskIndex, setLastAddedTaskIndex] = useState(null);
    const newTaskRefs = useRef([]);

    useEffect(() => {
        setAddTitleTaskBtn(titleTasks.length < 5);
    }, [titleTasks.length]);

    // useEffect(() => {
    //     const storageData = JSON.stringify(titleTasks);
    //     console.log(storageData);
    //     localStorage.setItem('listTitleTasks', storageData);
    // }, [titleTasks]);

    useEffect(() => {
        // const storageData = localStorage.getItem('listTitleTasks');
        // console.log(storageData);
        // if (storageData) {
        //     try {
        //         const parseData = JSON.parse(storageData);
        //         if (Array.isArray(parseData)) {
        //             setTitleTasks(parseData);
        //             return;
        //         }
        //     } catch (error) {
        //         console.error(error);
        //     }
        // }

        if (titleTasks.length === 0) {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Ошибка с получением данных');
                    }
                    return response.json();
                })
                .then((data) => {
                    const randomTask = data[Math.round(Math.random() * 10)];
                    const newTask = {
                        id: 1,
                        title: randomTask.title.substr(0, 20),
                    };
                    setTitleTasks([newTask]);
                })
                .catch((error) => {
                    throw Error(error);
                });
        }
    }, []);

    useEffect(() => {
        if (
            lastAddedTaskIndex !== null &&
            newTaskRefs.current[lastAddedTaskIndex]
        ) {
            newTaskRefs.current[lastAddedTaskIndex].focus();
            setLastAddedTaskIndex(null);
        }
    }, [titleTasks, lastAddedTaskIndex]);

    const handleTitleTask = (idTitle, event) => {
        const updatedTasks = titleTasks.map((task) =>
            task.id === idTitle ? { ...task, title: event } : task,
        );
        setTitleTasks(updatedTasks);
    };

    const addTitleTask = () => {
        const isEmpty = titleTasks.some((titleTask) => {
            return titleTask.title == '';
        });
        if (isEmpty) {
            const emptyInput = titleTasks.findIndex(
                (task) => task.title === '',
            );
            if (newTaskRefs.current[emptyInput]) {
                newTaskRefs.current[emptyInput].focus();
            }
        } else {
            const newTask = {
                id: titleTasks.length + 1,
                title: '',
            };
            setTitleTasks([...titleTasks, newTask]);
            setLastAddedTaskIndex(titleTasks.length);
        }
    };

    const removeTitleTask = (idTitle) => {
        const updatedTasks = titleTasks.filter((task) => task.id !== idTitle);
        setTitleTasks(updatedTasks);
    };

    return (
        <ul className="title-list-tasks">
            {titleTasks.map((titleTask, index) => (
                <li key={titleTask.id} className="title-list-tasks__title">
                    <input
                        type="text"
                        className="title-list-tasks__text"
                        onChange={(event) =>
                            handleTitleTask(titleTask.id, event.target.value)
                        }
                        value={titleTask.title}
                        maxLength={20}
                        ref={(element) =>
                            (newTaskRefs.current[index] = element)
                        }
                    />
                    <button
                        type="button"
                        className="title-list-tasks__remove"
                        onClick={() => removeTitleTask(titleTask.id)}
                    >
                        &#x2715;
                    </button>
                </li>
            ))}
            {addTitleTaskBtn && (
                <button
                    className="title-list-tasks__add-btn"
                    onClick={addTitleTask}
                >
                    Add title
                </button>
            )}
        </ul>
    );
}

export default MarkerList;
