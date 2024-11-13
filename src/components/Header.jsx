import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ background, color }) => {
    return (
        <nav className={`flex items-center justify-around h-[150px] py-20 ${background}`}>
            <div className='flex items-center justify-center gap-10'>
                <Link to='/'>
                    <p className={`${color} font-normal text-xl list-none border-b-2 border-transparent hover:border-red-500 transition-all duration-300`}>
                        Início
                    </p>
                </Link>

                <Link to='/carros'>
                    <p className={`${color} font-normal text-xl list-none border-b-2 border-transparent hover:border-red-500 transition-all duration-300`}>
                        Carros
                    </p>
                </Link>

                <Link to='/locador'>
                    <p className={`${color} font-normal text-xl list-none border-b-2 border-transparent hover:border-red-500 transition-all duration-300`}>
                        Locadores
                    </p>
                </Link>

                <Link to='/locatario'>
                    <p className={`${color} font-normal text-xl list-none border-b-2 border-transparent hover:border-red-500 transition-all duration-300`}>
                        Locatários
                    </p>
                </Link>
            </div>
        </nav>
    );
}

export default Header;