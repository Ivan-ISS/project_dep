import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import { LazyAbout } from '@/pages/about/About.lazy';
import { Shop } from '@/pages/shop';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';

const root = document.getElementById('root');

if (!root) {
    throw new Error('root not found');
}

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'loading...'}><LazyAbout /></Suspense>,
            },
            {
                path: '/shop',
                element: <Suspense fallback={'loading...'}><Shop /></Suspense>,
            },
        ]
    },
])

container.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)

/* container.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
) */