import React from 'react'
import logo from '../images/logo-header.png'

const Header = () => {
    return (
        <nav className="flex items-center justify-around h-[150px] py-20  bg-transparent">

            <div className='flex items-center justify-center gap-10'>
                <li className='text-white font-normal text-xl list-none border-b-2 border-transparent hover:border-red-500 transition-all duration-300'>
                    <a href="/inicio">Início</a>
                </li>

                <li className='text-white font-normal text-xl list-none border-b-2 border-transparent hover:border-red-500 transition-all duration-300'>
                    <a href="/carros">Carros</a>
                </li>

                <li className='text-white font-normal text-xl list-none border-b-2 border-transparent hover:border-red-500 transition-all duration-300'>
                    <a href="/locador">Locador</a>
                </li>
            </div>


        </nav>
    )
}

export default Header