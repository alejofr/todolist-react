import { useState} from 'react';
import './App.css'
import { FormTask, ItemTask } from './components/task';
import { ITask, useTask } from './hooks/UseTask';

const initFormTask: ITask = {
  id: -1,
  content: '',
  state: 'pending'
}

function App() {
  const { data, addTask, updateTask, deleteTask } = useTask();
  const [taskEdit, setTaskEdit] = useState<ITask>(initFormTask)

  return (
    <section className="gradient-custom vh-100">
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center py-5'>
          <div className='col col-xl-10'>
            <div className='card'>
              <div className='card-body p-5'>
                {/* Agregar o Editar Tarea */}
                <FormTask 
                  value={taskEdit.content}
                  isEdit={taskEdit.id !== -1}
                  onSubmit={(value) => {
                    if( taskEdit.id !== -1 ){
                      updateTask(taskEdit.id, {...taskEdit, content: value});
                      setTaskEdit(initFormTask);
                    }else{
                      addTask(value)
                    }
                  }}
                />
                {/* Lista de Tareas */}
                <ul className='list-group mb-0 mt-4'>
                  {
                    data.map(item => (
                      <ItemTask 
                        key={item.id}
                        type={item.state == 'completed' ? 'success' : 'light'}
                        content={item.content}
                        onCompleted={item.state == 'pending' ? () => updateTask(item.id, {...item, state:'completed'}) : undefined}
                        onEdit={item.state == 'pending' ? () => setTaskEdit(item) : undefined}
                        onDelete={() => deleteTask(item.id)}
                      />
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default App
