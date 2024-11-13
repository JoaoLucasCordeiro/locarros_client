import * as React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CarMenu = ({ onMenuChange }) => {
  // Estado para controlar qual botão está selecionado
  const [selected, setSelected] = useState("listar");

  const handleSelect = (option) => {
    setSelected(option);
    if (onMenuChange) {
      onMenuChange(option); // Notifica o pai sobre a mudança de menu, se precisar executar alguma ação
    }
  };

  return (
    <div className="flex space-x-4 mb-6 bg-white w-[25vw] items-center justify-center p-4 rounded-2xl shadow-xl">
      
      {/* Botão "Cadastrar Carro" */}
      <Button
        variant={selected === "cadastrar" ? "default" : "outline"}
        onClick={() => handleSelect("cadastrar")}
        className={selected === "cadastrar" ? "red-bg text-white hover:bg-red-600 transition-all duration-300 rounded-3xl" : "rounded-3xl"}
      >
        Cadastrar Carro
      </Button>

      {/* Botão "Listar Carros" */}
      <Button
        variant={selected === "listar" ? "default" : "outline"}
        onClick={() => handleSelect("listar")}
        className={selected === "listar" ? "red-bg text-white hover:bg-red-600 transition-all duration-300 rounded-3xl" : "rounded-3xl"}
      >
        Todos Os Carros
      </Button>

      {/* Botão "Editar Carros" */}
      <Button
        variant={selected === "editar" ? "default" : "outline"}
        onClick={() => handleSelect("editar")}
        className={selected === "editar" ? "red-bg text-white hover:bg-red-600 transition-all duration-300 rounded-3xl" : "rounded-3xl"}
      >
        Editar Carros
      </Button>
    </div>
  );
};

export default CarMenu;
