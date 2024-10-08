import React, { Suspense, lazy } from 'react';
import { useRoutes } from "react-router-dom";
import Ecommerce from "../Components/Dashboard/Pages/Ecommerce";
import Order from "../Components/Dashboard/Pages/Order";
// import FallbackLoading from '../BasicComponents/FallbackLoading';
import PageNotFound from '../BasicComponents/PageNotFound';
import ErrorBoundary from '../BasicComponents/ErrorBoundary';

const LeftDrawer = lazy(() => import('../Components/LeftDrawer'));
const RightDrawer = lazy(() => import('../Components/RightDrawer'));
const Header = lazy(() => import("../Components/Dashboard/Components/Header"));


export default function Routes(props) {
    const routes = useRoutes([
        {
            path: "/",
            element: <Ecommerce />,
        },
        {
            path: "/orders",
            element: <Order />,
        },
        {
            path: "/*",
            element: <PageNotFound />,
        },
    ]);
    return (
        <ErrorBoundary>
            {/* Suspense fallback={<FallbackLoading />}> */}
            <section className='font-Inter scroll-smooth grid grid-cols-12 items-start dark:bg-primary h-full animate-fade'>
                <LeftDrawer />
                <div className='col-span-12 xl:col-span-8 border-x-[1px] border-x-[#1C1C1C1A] dark:border-x-[#FFFFFF33]'>
                    <Header />
                    <div className='p-4'>
                        {routes}
                    </div>
                </div>
                <RightDrawer />
            </section>
            {/* </Suspense> */}
        </ErrorBoundary>
    );
}
