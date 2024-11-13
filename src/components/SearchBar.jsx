import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from './ui/button'
import { FaFilter, FaSearch } from 'react-icons/fa'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const SearchBar = () => {
    return (
        <div className='flex items-center gap-4 justify-center'>

            <div className='flex items-center gap-2'>

                <Input className="outline-none border-none w-[50vw]" placeholder="Pesquisar por modelo..."/>


                <Button className="red-bg hover:bg-red-600 transition-all duration-300">
                    <FaSearch className='text-white' size={22} />
                </Button>


                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button className="red-bg hover:bg-red-600 transition-all duration-300">
                            <FaFilter className='text-white' size={22} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Aplicar Filtros</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Mais Caros</DropdownMenuItem>
                        <DropdownMenuItem>Mais Baratos</DropdownMenuItem>
                        <DropdownMenuItem>Todos</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>

        </div>
    )
}

export default SearchBar