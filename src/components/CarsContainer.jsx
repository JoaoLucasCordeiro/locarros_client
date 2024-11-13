import React from 'react';
import CarCards from './CarCards';
import SearchBar from './SearchBar';

const CarsContainer = () => {
  return (
    <section className="h-screen flex flex-col bg-[#F2F2F2]">
      <h1 className='red-text font-bold text-4xl py-10 text-center'>Confira todos os nossos carro disponíveis</h1>
      <SearchBar />
      <div className="grid gap-8 px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        <CarCards />
        <CarCards />
        <CarCards />
        <CarCards />
      </div>
    </section>
  );
};

export default CarsContainer;
