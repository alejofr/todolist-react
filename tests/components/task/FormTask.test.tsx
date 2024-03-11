import { fireEvent, render, screen } from '@testing-library/react';
import FormTask from '../../../src/components/task/FormTask';


describe('Pruebas en <FormTask />', () => {

    test('debe de cambiar el valor de la caja de texto', () => {
        
        render( <FormTask onSubmit={ () => {} } value='' /> );
        const input = screen.getByRole('textbox')  as HTMLInputElement;

        fireEvent.input( input, { target: { value: 'Realizar prueba con react' } });

        expect( input.value ).toBe('Realizar prueba con react');

    });

    test('debe de llamar onSubmit si el input tiene un valor', () => {
        
        const inputValue    = 'Realizar prueba con react';
        const onSubmit = jest.fn();

        render( <FormTask onSubmit={onSubmit} value='' /> );

        const input = screen.getByRole('textbox') as HTMLInputElement;
        const form  = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } });
        fireEvent.submit( form );
        // screen.debug();
        expect( input.value ).toBe('');

        expect( onSubmit ).toHaveBeenCalled();
        expect( onSubmit ).toHaveBeenCalledTimes(1);
        expect( onSubmit ).toHaveBeenCalledWith( inputValue );

    });

    test('no debe de llamar el onSubmit si el input está vació', () => {
        
        const onSubmit = jest.fn();
        render( <FormTask onSubmit={onSubmit} value='' /> );

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onSubmit ).toHaveBeenCalledTimes(0);
        expect( onSubmit ).not.toHaveBeenCalled();

    });

    test('debe tener el valor "Test Task" el input', () => {
        const valueInput = 'Test Task';

        render( <FormTask onSubmit={() => {}} value={valueInput} /> );

        const input = screen.getByRole('textbox') as HTMLInputElement;

        expect(input.value).toBe(valueInput)

    });

})