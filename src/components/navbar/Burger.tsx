import { FiMenu } from "react-icons/fi";

interface BurgerProps {
    isLogged: boolean;
}

export default function Burger({ isLogged }: BurgerProps) {
    //check if user login
    return (
        <div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circlee bg-base">
                    <FiMenu className="h-5 w-5 mr-2" />
                </div>
                <ul tabIndex={0} className="text-4xl menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52">
                    <li><a href='/' >Homepage</a></li>
                    {
                        isLogged && (
                            <li><a href='/eventList'>Event List</a></li>
                        )
                    }
                    <li><a href='/about'>About</a></li>
                    {/* <li><a href='/profile'>profile</a></li> */}

                    {/* <li><a href='/about'>About</a></li> */}
                </ul>
            </div>
        </div>
    )
}