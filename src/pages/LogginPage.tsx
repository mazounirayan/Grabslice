import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import AuthService from '@services/AuthService';
import { CustomError } from '@commons/Error';
import { useToast } from '@context/ToastManager';
import { ToastType } from '@enum/toast';
import { useNavigate } from 'react-router-dom';
import { COMPANY_TITLE } from '@assets/values/strings';
export default function LogginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        lastName: '',
        remember_me: false
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { addToast } = useToast(); 

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, checked, value } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        setFormData(prevData => ({
            ...prevData,
            [name]: fieldValue
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(''); // Clear previous errors
        if (isLogin) {
            const result = await AuthService.login(formData.email, formData.password);

            if (result instanceof CustomError) {
                setError(result.message);
                setLoading(false);
            } else {
                // Login successful, redirect to homepage with token in local storage
                addToast('Login successful', ToastType.SUCCESS); 
                navigate('/');
            }
        } else {
            const result = await AuthService.register(formData.email, formData.password, formData.name, formData.lastName);

            if (result instanceof CustomError) {
                setError(result.message);
                setLoading(false);
            } else {
                addToast('Register successful', ToastType.SUCCESS); 
                navigate('/');
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-base-100 text-neutral">
            <div
                className="bg-no-repeat bg-cover bg-center relative"
                style={{ backgroundImage: 'url(https://mag.bullebleue.fr/sites/mag/files/img/articles/global/plantes-irritantes-danger-pour-vos-animaux.jpg)' }}>
                <div className="absolute bg-gradient-to-b from-orange-300 to-orange-600 opacity-45 inset-0 z-0">
                </div>
                <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                    <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
                        <div className="self-start hidden lg:flex flex-col text-white">
                            <h1 className="mb-3 font-bold text-5xl">
                                {COMPANY_TITLE}
                            </h1>
                            <p className="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
                                and publishing industries for previewing layouts and visual mockups</p>
                        </div>
                    </div>
                    <div className="bg-white flex justify-center self-center z-10 rounded-2xl">
                        <div className="p-12 bg-white mx-auto rounded-2xl w-100">
                            <div className="flex justify-center mb-6 z-20">
                                <label className="flex items-center cursor-pointer">
                                    <input type="checkbox" className="toggle toggle-primary" checked={!isLogin} onChange={() => setIsLogin(!isLogin)} />
                                    <span className="ml-3 text-sm font-medium text-gray-800">{isLogin ? 'Switch to Register' : 'Switch to Login'}</span>
                                </label>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <h3 className="font-semibold text-2xl text-gray-800">{isLogin ? 'Login' : 'Register'}</h3>
                                    <p className="text-gray-500">{isLogin ? 'Please sign in to your account.' : 'Please create your account.'}</p>
                                </div>
                                <div className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                        <input
                                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="mail@gmail.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="relative space-y-2">
                                        <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                id="password"
                                                placeholder="Enter your password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                            />
                                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                                                {showPassword ? <FaEye className="text-gray-500" /> : <FaEyeSlash className="text-gray-500" />}
                                            </span>
                                        </div>
                                    </div>
                                    {!isLogin && (
                                     <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700 tracking-wide">Name</label>
                                        <input
                                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="John"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                )}
                                {!isLogin && (
                                <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 tracking-wide">Last name</label>
                                <input
                                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                    type="text"
                                    name="lastName"
                                    id="lastName"
                                    placeholder="Doe"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                                    )}
                                    {isLogin && (
                                        <div className="flex items-center justify-between">
                                            <div className="text-sm">
                                                <a href="#" className="text-accent hover:text-info hover:link">
                                                    Forgot your password?
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                    {!isLogin && (
                                        <div className="flex items-center justify-between">
                                        <div className="text-sm">
                                            <a onClick={() => setIsLogin(!isLogin)} className="text-accent hover:text-info hover:link">
                                                I have an account !
                                            </a>
                                        </div>
                                    </div>
                                    )}
                                    <div>
                                        <button type="submit" className="w-full flex justify-center bg-accent hover:bg-info text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500">
                                            {loading ? <span className="loading loading-dots loading-md"></span> : isLogin ? 'Login' : 'Register'}
                                        </button>
                                        {error && <p className="text-red-500 text-xs">{error}</p>}
                                    </div>
                                </div>
                            </form>
                            <div className="pt-5 text-center text-gray-400 text-xs">
                                <span>
                                    Copyright © 2025-2026
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};