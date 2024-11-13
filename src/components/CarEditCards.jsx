import React from 'react';
import { FaShoppingCart, FaCar, FaMoneyBillWave, FaUserTie, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import car from '../images/car.jpg';
import { Button } from './ui/button';

const CarEditCards = () => {
    return (
        <div className='w-[450px] h-[485px] flex flex-col items-center bg-white shadow-xl rounded-2xl'>
            <img src={car} alt="Carro preto" className='rounded-2xl m-5 w-[90%]' />

            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-5'>
                    <FaCar className='text-black' size={22} />
                    <p className='text-black text-xl font-normal'>Audi 2015</p>
                    <FaMoneyBillWave className='text-red-500' size={22} />
                    <p className='red-text text-xl font-normal'>150,00/dia</p>
                </div>

                <div className='flex items-center gap-5'>
                    <FaUserTie className='text-black' size={22} />
                    <p className='text-black text-xl font-normal'>Locador:</p>
                    <p className='red-text text-xl font-normal'>Lucas Cordeiro</p>
                </div>
                <div className='flex items-center gap-5 justify-center w-full'>
                    <Button className='w-full red-bg text-white rounded-xl outline-none border-none font-base flex items-center justify-center p-2 gap-2 hover:bg-red-700 transition-all duration-300'>
                        Editar
                        <FaPencilAlt className='text-white' size={22} />
                    </Button>
                    <Button className='w-full red-bg text-white rounded-xl outline-none border-none font-base flex items-center justify-center p-2 gap-2 hover:bg-red-700 transition-all duration-300'>
                        Apagar
                        <FaTrashAlt className='text-white' size={22} />
                    </Button>
                </div>

            </div>
        </div>
    );
}

export default CarEditCards; 