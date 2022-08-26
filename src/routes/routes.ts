import { lazy } from "react";
import { NoLazy } from "../lazyload/pages/NoLazy";

interface Route {
    to: string;
    path: string;
    Component: (() => JSX.Element )| (React.LazyExoticComponent<() => JSX.Element>);
    name: string
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../lazyload/layout/LazyLayout'));



export const routes: Array<Route> = [
    {
        path: '/lazyload/*',
        to: '/lazyload/',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        path: 'no-lazy',
        to: '/no-lazy',
        Component: NoLazy,
        name: 'No lazy'
    }
]