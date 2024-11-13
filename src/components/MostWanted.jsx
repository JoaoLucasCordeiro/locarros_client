import React from 'react';
import CarCard from './CarCard';

const MostWanted = () => {
  return (
    <section className="h-screen flex flex-col">
      <h1 className="text-6xl red-text font-bold text-center py-20">Mais Procurados</h1>

      <div className="grid gap-8 px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </section>
  );
};

export default MostWanted;
