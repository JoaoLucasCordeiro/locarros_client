import React, { useState } from 'react';
import Header from '../components/Header';
import LessorMenu from '@/components/LessorMenu';
import LessorForm from '@/components/LessorForm';
import LessorCards from '@/components/LessorCards';
import LesseeMenu from '@/components/LesseeMenu';
import LesseeCards from '@/components/LesseeCards';
import LesseeForm from '@/components/LesseeForm';

const CarLessee = () => {
  const [activeMenu, setActiveMenu] = useState('listar');

  return (
    <main className="h-screen bg-[#F2F2F2]">
      <Header background="bg-[#F2F2F2]" color="text-black" />
      
      <section className="flex flex-col items-center justify-center">
        {/* Menu para alternar entre cadastro e lista */}
        <LesseeMenu onMenuChange={setActiveMenu} />

        {/* Exibe o formulário ou os cards de acordo com a seleção */}
        <div className="mt-4 items-center justify-center">
          {activeMenu === 'listar' && <LesseeCards />}
          {activeMenu === 'cadastrar' && <LesseeForm />}
        </div>
      </section>
    </main>
  );
};

export default CarLessee;
