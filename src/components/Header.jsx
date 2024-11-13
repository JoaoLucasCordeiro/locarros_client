import React from 'react'
import logo from '../images/logo-header.png'

const Header = () => {
    return (
        <nav className="flex items-center justify-around h-[150px] py-20 shadow-md ">

            <img src={logo} alt="LoCarros logo" className='w-[280px]' />

            <div className='flex items-center justify-center gap-10'>
            <li className='text-black font-light list-none'>
                <a href="/inicio">Início</a>
            </li>

            <li className='text-black font-light list-none'>
                <a href="/carros">Carros</a>
            </li>

            <li className='text-black font-light list-none'>
                <a href="/locador">Locador</a>
            </li>
            </div>

       

        </nav>
    )
}

export default Header