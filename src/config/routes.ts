import IRoute from '../interfaces/route';
import HomePage from '../pages/MainPage';
import LoginPage from '../pages/LogginPage';
import NotFound from '../pages/404';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/login',
        name: 'Login Page',
        component: LoginPage,
        exact: true
    },
    // {
    //     path: '/user/:number',
    //     name: 'User Layout',
    //     component: UserLayout,
    //     exact: false, // Set to false to allow nesting
    //     children: [
    //         {
    //             path: '',
    //             name: 'User Page',
    //             component: UserPage,
    //             exact: true
    //         }
    //     ]
    // },
    {
        path: '*',
        name: 'Not Found',
        component: NotFound,
        exact: true
    },
]

export default routes;