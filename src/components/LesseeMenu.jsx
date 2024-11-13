import * as React from "react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const LesseeMenu = ({ onMenuChange }) => {
  // Estado para controlar qual botão está selecionado
  const [selected, setSelected] = useState("listar");

  const handleSelect = (option) => {
    setSelected(option);
    if (onMenuChange) {
      onMenuChange(option); // Notifica o pai sobre a mudança de menu, se precisar executar alguma ação
    }
  };

  return (
    <div className="flex space-x-4 mb-6 bg-white w-[20vw] items-center justify-center p-4 rounded-2xl shadow-xl">

      {/* Botão "Cadastrar Locador" */}
      <Button
        variant={selected === "cadastrar" ? "default" : "outline"}
        onClick={() => handleSelect("cadastrar")}
        className={selected === "cadastrar" ? "red-bg text-white hover:bg-red-600 transition-all duration-300 rounded-3xl" : "rounded-3xl"}
      >
        Cadastrar Locatário
      </Button>



      {/* Botão "Listar Locador" */}
      <Button
        variant={selected === "listar" ? "default" : "outline"}
        onClick={() => handleSelect("listar")}
        className={selected === "listar" ? "red-bg text-white hover:bg-red-600 transition-all duration-300 rounded-3xl" : "rounded-3xl"}
      >
        Listar Locatários
      </Button>

    
    </div>
  );
};

export default LesseeMenu;
