import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import ItemCard from '/src/components/ItemCard';

describe('ItemCard component', () => {
    it('renders ItemCard component', () => {
        const { getByAltText, getByText, getByDisplayValue } = render(
            <ItemCard
                key='Example key'
                photoURL='example.jpg'
                itemName='Example Item'
                price='50'
                onClick={() => { }}
            />
        );

        expect(getByAltText('Example Item')).toBeInTheDocument();
        expect(getByText('Example Item')).toBeInTheDocument();
        expect(getByText('$50')).toBeInTheDocument();
        expect(getByDisplayValue('0')).toBeInTheDocument();
        expect(getByText('Add to Cart')).toBeInTheDocument();
    });

    it('calls onClick function with correct value', () => {
        const handleClick = vi.fn();
        const { getByTestId, getByText } = render(
            <ItemCard
                key='Example key'
                photoURL='example.jpg'
                itemName='ExampleItem'
                price='50'
                onClick={handleClick}
            />
        );

        const quantityInput = getByTestId('ExampleItemQuantity');
        fireEvent.change(quantityInput, { target: { value: 10 } });

        const addToCartBtn = getByText('Add to Cart');
        fireEvent.click(addToCartBtn);

        expect(handleClick).toHaveBeenCalledWith(10);
    });

    it('calls onChange function with correct value', () => {
        const { getByTestId, getByDisplayValue } = render(
            <ItemCard
                key='Example key'
                photoURL='example.jpg'
                itemName='ExampleItem'
                price='50'
                onClick={() => { }}
            />
        );

        const quantityInput = getByTestId('ExampleItemQuantity');
        fireEvent.change(quantityInput, { target: { value: '99' } });

        expect(getByDisplayValue('99')).toBeInTheDocument();
        expect(quantityInput.value).toBe('99');
    });
})