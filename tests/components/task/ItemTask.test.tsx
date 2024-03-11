import { render, fireEvent } from '@testing-library/react';
import { ItemTask } from '../../../src/components/task/ItemTask';

describe('Pruebas en <ItemTask />', () => {

    test('Debe mostrar el content "Test Task"', () => {

        const content = 'Test Task';

        const { getByTestId } = render( <ItemTask content={content} onDelete={() => {}} /> );

        
        expect( getByTestId('test-content').innerHTML ).toContain(content);
    });

    test('Debe hacer click en el onCompleted', () => {

        const content = 'Test Task';
        const onCompleted = jest.fn();

        const { getByRole } = render( <ItemTask content={content} onDelete={() => {}} onCompleted={onCompleted} /> );

        const buttonCompleted = getByRole('button', { name: '✓' });
        
        fireEvent.click(buttonCompleted);

        expect(onCompleted).toHaveBeenCalledTimes(1);
    });

    test('Debe hacer click en el onEdit', () => {

        const content = 'Test Task';
        const onEdit = jest.fn();

        const { getByRole } = render( <ItemTask content={content} onDelete={() => {}} onEdit={onEdit} /> );

        const buttonEdit = getByRole('button', { name: 'Edit' /*/Ｘ/iu */});

        
        fireEvent.click(buttonEdit);

        expect(onEdit).toHaveBeenCalledTimes(1);
    });

    test('Debe hacer click en el onDelete', () => {

        const content = 'Test Task';
        const onDelete = jest.fn();

        const { getByRole } = render( <ItemTask content={content} onDelete={onDelete} /> );

        const buttonDelete = getByRole('button', { name: /Ｘ/iu});

        
        fireEvent.click(buttonDelete);

        expect(onDelete).toHaveBeenCalledTimes(1);
    });

})
