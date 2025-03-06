// import ContactForm from './navbar/components/ContactForm';
import UserBtn from '@components/navbar/UserBtn';
import Burger from '@components/navbar/Burger';
import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';
import ThemeSwitcher from './ThemeSwitcher';
import { COMPANY_TITLE } from '@assets/values/strings';


export default function Header() {
    const { user } = useUser();

    const isLogged = user?.role.toLowerCase() === 'user' || false;
    const [theme, _] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);


    return (
        <div className="navbar bg-neutral fixed top-0 left-0 w-full z-50">
            <div className="navbar-start">
                <Burger isLogged={isLogged}/>
                <ThemeSwitcher />
            </div>
            <div className="navbar-center">

                <a className="btn btn-ghost text-xl text-base-100">{COMPANY_TITLE}</a>
            </div>
            <div className="navbar-end text-base-100">
                {/* <ContactForm short={true} /> */}
                <UserBtn notif={true} userData={user} />
            </div>
        </div>

    )
}