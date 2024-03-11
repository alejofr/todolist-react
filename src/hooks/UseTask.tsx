import { useEffect, useState } from 'react';

export interface ITask {
    id:         number;
    content:    string;
    state:      'pending' | 'completed'
}

const KEY_LOCALSTORAGE = "task";

export const useTask = () => {
    const [data, setData] = useState<ITask[]>([]);

    useEffect(() => {
        getTask();
    }, []);

    const getTask = () => {
        const task = localStorage.getItem(KEY_LOCALSTORAGE);

        if( task !== null ){
            const dataTask = JSON.parse(task) as ITask[];
            setData(dataTask);
        }
    }

    const addLocalStorage = (newTask: ITask[]) => {
        localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(newTask));
    }

    const addTask = (content: string) => {
        let key = 1;

        if( data.length > 0 ){
            key = data[0].id + 1;
        }

        const task : ITask = {
            id: key,
            content,
            state: 'pending'
        };


        addLocalStorage([task,...data]);
        setData([task,...data]);

        
    }

    const updateTask = (id: number, item: ITask) => {
        let newTask: ITask[] = [];

        setData(data.map(task => {

            if( task.id == id )
                task = item;

            newTask.push(task);

            return task;
        }))

        addLocalStorage(newTask);
    }

    const deleteTask = (id: number) => {
        const newTask: ITask[] = data.filter(task => task.id !== id);

        setData(newTask);
        addLocalStorage(newTask);
    }
    

    return {
        data,
        addTask,
        updateTask,
        deleteTask
    }
}
