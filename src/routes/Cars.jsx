import React, { useState } from 'react'
import Header from '../components/Header'
import CarsContainer from '@/components/CarsContainer'
import CarMenu from '@/components/CarMenu'
import CarForm from '@/components/CarForm'
import CarsContainerEdit from '@/components/CarsContainerEdit'

const Cars = () => {
  const [activeMenu, setActiveMenu] = useState('listar');
  return (
    <main className='h-screen bg-[#F2F2F2] flex flex-col items-center '>
      <Header background="bg-[#F2F2F2]" color="text-black" />
      <CarMenu onMenuChange={setActiveMenu} />
      <div className="mt-4 items-center justify-center">
        {activeMenu === 'listar' && <CarsContainer />}
        {activeMenu === 'cadastrar' && <CarForm />}
        {activeMenu === 'editar' && <CarsContainerEdit />}
      </div>

    </main>
  )
}

export default Cars