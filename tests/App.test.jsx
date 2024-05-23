import { describe, it, expect } from 'vitest';
import { render, fireEvent, waitFor, screen, within } from '@testing-library/react';
import App from '../src/app/App';
import { BrowserRouter, RouterProvider, createMemoryRouter } from 'react-router-dom';
import routes from '../src/routes';

describe('App', () => {
    it('NavBar component renders on page when App is rendered', () => {
        const { getByRole, getByText } = render(
            <BrowserRouter initialEntries={['/']}>
                <App />
            </BrowserRouter>
        );

        expect(getByRole('heading')).toBeInTheDocument();
        expect(getByText('Activewear designed to fit your lifestyle.')).toBeInTheDocument();
        expect(getByText('FLO')).toBeInTheDocument();
    });

    it('Footer component render on page when App is rendered', () => {
        const { getByText } = render(
            <BrowserRouter initialEntries={['/']}>
                <App />
            </BrowserRouter>
        );

        expect(getByText('gwolanski')).toBeInTheDocument();
    });

    it('Home component loads on initial render', () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ['/'],
            initialIndex: 0,
        })

        const { getByText } = render(
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        );

        expect(getByText('Check out our current collection')).toBeInTheDocument();

    });

    it('Catalog component renders', async () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ['/catalog'],
            initialIndex: 0,
        })

        const { getByTestId } = render(
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        );

        await waitFor(() => {
            expect(getByTestId('catalogContainer')).toBeInTheDocument();
        });
    });

    it('loading text shows before catalog component renders', () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ['/catalog'],
            initialIndex: 0,
        })

        const { getByText } = render(
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        );

        expect(getByText('Loading...')).toBeInTheDocument();
    });

    it('ShoppingCart component renders', () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ['/shoppingCart'],
            initialIndex: 0,
        })

        const { getByText } = render(
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        );

        expect(getByText('Shopping Cart')).toBeInTheDocument();
    });

    it('should navigate to the Home page when the Home link is clicked', () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ['/catalog'],
            initialIndex: 0,
        })

        const { getByText } = render(
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        );

        fireEvent.click(screen.getByAltText('home'));

        expect(getByText('Check out our current collection')).toBeInTheDocument();
    });

    it('should navigate to the Catalog page when the Home link is clicked', async () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ['/'],
            initialIndex: 0,
        })

        const { getByTestId } = render(
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        );

        fireEvent.click(screen.getByAltText('catalog'));

        await waitFor(() => {
            expect(getByTestId('catalogContainer')).toBeInTheDocument();
        });
    });

    it('should navigate to the ShoppingCart page when the Home link is clicked', () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ['/'],
            initialIndex: 0,
        })

        const { getByText } = render(
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        );

        fireEvent.click(screen.getByAltText('shopping cart'));

        expect(getByText('Shopping Cart')).toBeInTheDocument();
    });

    it('home page embedded catalog link should navigate to catalog page when clicked', async () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ['/'],
            initialIndex: 0,
        })

        const { getByTestId } = render(
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        );

        fireEvent.click(screen.getByTestId('embeddedLink'));

        await waitFor(() => {
            expect(getByTestId('catalogContainer')).toBeInTheDocument();
        });
    });


    it('renders empty cart message when cart is empty', () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ['/shoppingCart'],
            initialIndex: 0,
        })

        const { getByText } = render(
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        );

        expect(getByText('Your shopping cart is empty.')).toBeInTheDocument();
    });

    it('shopping cart shows items that have been added', async () => {
        const router = createMemoryRouter(routes, {
            initialEntries: ['/catalog'],
            initialIndex: 0,
        })

        const { getByTestId, getByText } = render(
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        );

        await waitFor(() => {
            expect(getByTestId('Slides')).toBeInTheDocument();
        });

        const slidesContainer = screen.getByTestId('Slides');
        const quantityInput = within(slidesContainer).getByTestId('SlidesQuantity');
        fireEvent.change(quantityInput, { target: { value: '5' } });
        const slidesAddToCartButton = within(slidesContainer).getByText('Add to Cart');
        fireEvent.click(slidesAddToCartButton);


        const shoppingCartLink = screen.getByAltText('shopping cart');
        fireEvent.click(shoppingCartLink);

        const cartLinkQuantity = screen.getByTestId('linkQuantity');

        expect(getByText('Slides')).toBeInTheDocument();
        expect(cartLinkQuantity.textContent).toBe('5');

    });
});