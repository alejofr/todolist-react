import React, { memo, useEffect, useState } from 'react';
import './form-task.style.css';
import { Button } from '../button/Button';
import { IFormTask } from './interface';

export interface FormTaskProps extends IFormTask{}

const FormTask = ({
    onSubmit,
    value,
    isEdit = false
} :FormTaskProps) => {

    const [textInput, setTextInput] = useState<string>("");
    const [mesaggeErr, setMesaggeErr] = useState<string | undefined>();

    useEffect(() => {
        
        if( value != "" ){
            setTextInput(value);
        }
    
    }, [value])
    

    const submit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if( textInput == "" ){
            setMesaggeErr("El campo, es requerido");
            return;
        }

        onSubmit(textInput);
        setTextInput("");
    }

    return (
        <form 
            onSubmit={submit}
            className='d-flex flex-row justify-content-between form-task'
            aria-label="form"
        >
            <div className={`form-floating ${mesaggeErr ? 'is-invalid' : ''}` }>
                <input 
                    type="text" 
                    className={`form-control ${mesaggeErr ? 'is-invalid' : ''}`} 
                    id="floatingInputGroup1" 
                    placeholder=""
                    value={textInput}
                    onChange={(e) => {
                        setTextInput(e.target.value)
                        setMesaggeErr(undefined);
                    }}
                />
                <label htmlFor="floatingInputGroup1" className='label-task'>¿Qué hay que hacer?</label>
                {
                    mesaggeErr &&
                    <div className="invalid-feedback">
                        { mesaggeErr }
                    </div>
                }
            </div>
            <Button 
                variant='primary'
                styleName='btn-task'
                type='submit'
            >
                { isEdit ? 'Editar' : 'Añadir' } Tarea
            </Button>
        </form>
    )
}

export default memo(FormTask);
