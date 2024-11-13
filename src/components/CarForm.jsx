import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const CarForm = () => {
  const [formData, setFormData] = useState({
    modelo: '',
    ano: '',
    cor: '',
    imagem: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cadastro de carro enviado:', formData);
    // Lógica para enviar os dados para uma API ou backend.
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded bg-white shadow-md w-[550px]">
      <h2 className="text-xl font-semibold">Cadastrar Carro</h2>

      <Input
        type="text"
        name="modelo"
        placeholder="Modelo"
        value={formData.modelo}
        onChange={handleChange}
        className="input w-full border-gray-300 rounded"
        required
      />
      
      <Input
        type="number"
        name="ano"
        placeholder="Ano"
        value={formData.ano}
        onChange={handleChange}
        className="input w-full border-gray-300 rounded"
        min="1886" // ano mínimo para evitar valores absurdos
        max={new Date().getFullYear()}
        required
      />
      
      <Input
        type="text"
        name="cor"
        placeholder="Cor"
        value={formData.cor}
        onChange={handleChange}
        className="input w-full border-gray-300 rounded"
        required
      />
      
      <Input
        type="file"
        name="imagem"
        accept="image/*"
        onChange={handleChange}
        className="input w-full border-gray-300 rounded"
      />

      <Button type="submit" className="red-bg text-white w-full hover:bg-red-600 transition-all duration-300">
        Enviar
      </Button>
    </form>
  );
};

export default CarForm;
