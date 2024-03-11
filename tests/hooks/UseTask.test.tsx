import { renderHook, act } from '@testing-library/react';
import { useTask, ITask } from '../../src/hooks/UseTask';

describe('Pruebas en el useTask', () => {

    test('debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => useTask() );
        const { data } = result.current;
        
        expect( data.length ).toBe(0);

    });

    test('debe de retornar un arreglo de tareas', async() => {

        const mookTask: ITask[] = [{
            id: 1,
            content: 'Test Task',
            state: 'pending'
        }];

        localStorage.setItem("task", JSON.stringify(mookTask));

        const { result } = renderHook( () => useTask() );
        const { data } = result.current;
        
        expect( data.length ).toBeGreaterThan(0);

        localStorage.removeItem("task");

    });

    test('debe de agregar una tarea al arreglo de tareas', () => {

        const mookTask: ITask = {
            id: 1,
            content: 'Test Task',
            state: 'pending'
        };
        
        const { result } = renderHook( () => useTask() );
        const { addTask } = result.current;

        act( () => {
            addTask(mookTask.content)
        });

        expect( result.current.data[0] ).toEqual(mookTask);

    });

    test('debe de actualizar el contenido y estado de una tarea en el arreglo de tareas', () => {

        const mookTask: ITask[] = [{
            id: 1,
            content: 'Test Task',
            state: 'pending'
        }];

        const mookTaskUpdate : ITask = {
            id: 1,
            content: 'Update Test Task',
            state: 'completed'
        }

        localStorage.setItem("task", JSON.stringify(mookTask));
        
        const { result } = renderHook( () => useTask() );
        const { updateTask } = result.current;

        act( () => {
            updateTask(1, {...mookTask[0], content: mookTaskUpdate.content})
            updateTask(1, {...mookTaskUpdate, state: 'completed'})
        });

        expect( result.current.data[0] ).toEqual({
            id: 1,
            content: 'Update Test Task',
            state: 'completed'
        });

        localStorage.removeItem("task");

    });

    test('debe de eliminar una tarea en el arreglo de tareas', () => {

        const mookTask: ITask[] = [{
            id: 1,
            content: 'Test Task',
            state: 'pending'
        }];


        localStorage.setItem("task", JSON.stringify(mookTask));
        
        const { result } = renderHook( () => useTask() );
        const { deleteTask } = result.current;

        act( () => {
          deleteTask(1);
        });

        expect( result.current.data.length ).toBe(0);
        
        localStorage.removeItem("task");

    });


})