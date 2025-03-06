import IRoute from '../interfaces/route';
import HomePage from '../pages/MainPage';
import LoginPage from '../pages/LogginPage';
import NotFound from '../pages/404';
import ProfilePage from '@components/profilepage/profilePage';
import PizzaDetailPage from '@components/DetailsPage/PizzaDetailPage';
import UserLayout from '@layouts/UserOutlet';

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
    {
        path: '/profile/:number',
        name: 'profile Layout',
        component: UserLayout,
        exact: false,
        children: [
            {
                path: '',
                name: 'User Page',
                component: ProfilePage,
                exact: true
            }
        ]
    },
    {
        path: '/PizzaDetail',
        name: 'Pizza Detail Page',
        component: PizzaDetailPage,
        exact: true
    },
    {
        path: '*',
        name: 'Not Found',
        component: NotFound,
        exact: true
    },
]

export default routes;