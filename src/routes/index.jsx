import React from "react";
import { useRoutes } from "react-router-dom";
import LeftDrawer from '../Components/LeftDrawer';
import RightDrawer from '../Components/RightDrawer';
import Ecommerce from "../Components/Dashboard/Pages/Ecommerce";
import Order from "../Components/Dashboard/Pages/Order";
import Header from "../Components/Dashboard/Components/Header";
import PageNotFound from "../BasicComponents/PageNotFound";

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
        <section className='scroll-smooth grid grid-cols-12 items-start dark:bg-[#1C1C1C]'>
            <LeftDrawer />
            <div className='col-span-12 xl:col-span-8 border-x-[1px] border-x-[#1C1C1C1A] dark:border-x-[#FFFFFF33]'>
                <Header />
                <div className='p-4'>
                    {routes}
                </div>
            </div>
            <RightDrawer />
        </section>
    );
}
