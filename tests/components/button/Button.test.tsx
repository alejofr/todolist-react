import { fireEvent, render } from '@testing-library/react';
import { Button } from '../../../src/components/button/Button';

describe('Pruebas en <Button />', () => {

    test('Debe mostrar el children "Text Button"', () => {

        const children = 'Text Button';

        const { getByText } = render( <Button children={children} /> );

        expect( getByText(children) ).toBeTruthy();
        
    });

    
    test('Debe hacer click', () => {

        const children = 'Text Button';

        const onClick = jest.fn();

        const { getByText } = render( <Button children={children} onClick={onClick} /> );

        const buttonElement = getByText(children);

        fireEvent.click(buttonElement);

        expect(onClick).toHaveBeenCalledTimes(1);
        
    });

})