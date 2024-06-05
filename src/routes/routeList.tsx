
import { lazy } from 'react'
import Loadable from '../component/loadable'
import { useRoutes } from 'react-router-dom'

const HomePage = Loadable(lazy(() => import('../pages/board-pages/homePage')))


const Routes = () => {
    return useRoutes([
        {
            path: '/',
            element: <HomePage />,
        },


    ])
}

export default Routes