import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const LesseeForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cadastro enviado:', formData);
    // Aqui você pode adicionar a lógica para enviar os dados para uma API ou backend.
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded bg-white shadow-md w-[550px]">
      <h2 className="text-xl font-semibold">Cadastrar Locatário</h2>
      <Input
        type="text"
        name="nome"
        placeholder="Nome"
        value={formData.nome}
        onChange={handleChange}
        className="input w-full border-gray-300 rounded"
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="input w-full border-gray-300 rounded"
        required
      />
      <Input
        type="tel"
        name="telefone"
        placeholder="Telefone"
        value={formData.telefone}
        onChange={handleChange}
        className="input w-full border-gray-300 rounded"
        required
      />
      <Input
        type="text"
        name="endereco"
        placeholder="Endereço"
        value={formData.endereco}
        onChange={handleChange}
        className="input w-full border-gray-300 rounded"
        required
      />
      <Button type="submit" className="red-bg text-white w-full hover:bg-red-600 transition-all duration-300">
        Enviar
      </Button>
    </form>
  );
};

export default LesseeForm;
