import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPencilAlt, FaPhone, FaTrash, FaUserTie } from 'react-icons/fa';
import { Button } from './ui/button';

const LessorCards = () => {
  // Exemplo de dados dos locadores
  const lessors = [
    { id: 1, nome: 'João Silva', email: 'joao@exemplo.com', telefone: '123456789', endereco: 'Rua A, 123' },
    { id: 2, nome: 'Maria Oliveira', email: 'maria@exemplo.com', telefone: '987654321', endereco: 'Rua B, 456' },
  ];

  return (
    <div className="grid gap-8 px-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
      {lessors.map((lessor) => (
        <div key={lessor.id} className="p-6 bg-white shadow-md flex items-center gap-10 rounded-xl">
          <FaUserTie className='red-text' size={80} />
          <div className='flex flex-col gap-2'>
            <h3 className="text-lg red-text font-semibold">{lessor.nome}</h3>

            <p><FaEnvelope className='inline-block mr-2 red-text' /> {lessor.email}</p>
            <p><FaPhone className='inline-block mr-2 red-text' /> {lessor.telefone}</p>
            <p><FaMapMarkerAlt className='inline-block mr-2 red-text' /> {lessor.endereco}</p>


            <div className='flex items-center gap-2'>
              <Button className="red-bg w-[40px] hover:bg-red-600 transtion-all duration-300">
                <FaPencilAlt size={15} />
              </Button>

              <Button className="red-bg w-[40px] hover:bg-red-600 transtion-all duration-300">
                <FaTrash size={15} />
              </Button>

            </div>
          </div>

        </div>
      ))}

    </div>
  );
};

export default LessorCards;
