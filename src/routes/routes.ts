import { lazy } from "react";
import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";

interface Route {
    to: string;
    path: string;
    Component: (() => JSX.Element )| (React.LazyExoticComponent<() => JSX.Element>);
    name: string
}

const lazy1 = lazy(() => import('../lazyload/pages/LazyPage1'));
const lazy2 = lazy(() => import('../lazyload/pages/LazyPage2'));
const lazy3 = lazy(() => import('../lazyload/pages/LazyPage3'));



export const routes: Array<Route> = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: LazyPage1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: LazyPage2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: lazy3,
        name: 'Lazy-3'
    }
]