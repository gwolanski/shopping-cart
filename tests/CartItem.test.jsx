import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import CartItem from '/src/components/CartItem';

describe('CartItem component', () => {
    it('renders CartItem component', () => {
        const { getByAltText, getByText, getByDisplayValue } = render(
            <CartItem
                photoURL='example.jpg'
                itemName='Example Item'
                unitPrice='10'
                quantity='2'
                onChange={() => { }}
                onClick={() => { }}
            />
        );

        expect(getByAltText('Example Item')).toBeInTheDocument();
        expect(getByText('Example Item')).toBeInTheDocument();
        expect(getByText('$10 unit price')).toBeInTheDocument();
        expect(getByDisplayValue('2')).toBeInTheDocument();
    });

    it('calls onChange function with correct value', () => {
        const handleChange = vi.fn();
        const { getByTestId } = render(
            <CartItem
                photoURL='example.jpg'
                itemName='ExampleItem'
                unitPrice='10'
                quantity='2'
                onChange={handleChange}
                onClick={() => { }}
            />
        );

        const quantityInput = getByTestId('ExampleItemQuantity');
        fireEvent.change(quantityInput, { target: { value: '5' } });

        expect(handleChange).toHaveBeenCalledWith(5);
    });

    it('calls onClick function when delete button is clicked', () => {
        const handleClick = vi.fn();
        const { getByText } = render(
            <CartItem
                photoURL='example.jpg'
                itemName='ExampleItem'
                unitPrice='10'
                quantity='2'
                onChange={() => { }}
                onClick={handleClick}
            />
        );

        const deleteButton = getByText('X');
        fireEvent.click(deleteButton);

        expect(handleClick).toHaveBeenCalled();
    });
})