import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import car from '../images/car.jpg';

const CarCard = () => {
    return (
        <div className='w-[450px] h-[450px] flex flex-col items-center  bg-white shadow-xl rounded-2xl'>
            <img src={car} alt="Carro preto" className='rounded-2xl m-5 w-[90%]' />

            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-5'>
                    <p className='text-black text-xl font-normal'>Audi 2015</p>
                    <p className='red-text text-xl font-normal'> R$ 150,00 / dia</p>
                </div>
                <button className='red-bg text-white rounded-2xl outline-none border-none font-base flex items-center justify-center p-2 gap-2 hover:bg-red-700 transition-all duration-300'>
                    Alugar
                    <FaShoppingCart className='text-white' size={22} />
                </button>
            </div>
        </div>
    );
}

export default CarCard;