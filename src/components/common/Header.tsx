// import ContactForm from './navbar/components/ContactForm';
import UserBtn from '@components/navbar/UserBtn';
import Burger from '@components/navbar/Burger';
import { useEffect, useState } from 'react';
import { useUser } from '../../context/UserContext';
// import ThemeSwitcher from './ThemeSwitcher';
import { COMPANY_TITLE } from '@assets/values/strings';
import LanguageCompositionModal from '@components/modal/createProjectModal';

export default function Header() {
    const { user } = useUser();

    const isLogged = user?.role.toLowerCase() === 'user' || false;
    const [theme, _] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);


    return (
        <div className="navbar bg-neutral max-w-4xl rounded-xl text-white">
            <div className="navbar-start">
                <Burger isLogged={isLogged}/>
                {/* <ThemeSwitcher /> */}
            </div>
            <div className="navbar-center">

                <a className="btn btn-ghost text-xl">{COMPANY_TITLE}</a>
            </div>
            <div className="navbar-end">
                {/* {isLogged && ( */}
                    <LanguageCompositionModal/>
                {/* )} */}
                {/* <ContactForm short={true} /> */}
                
                <UserBtn notif={true} userData={user} />
            </div>
        </div>

    )
}