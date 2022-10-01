import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
    
    @Get()
    findAll():string{
        return "todos los productos"
    }

    @Get(':id')
    findById():string{
        return "producto por id"
    }

    @Post()
    create():string{
        return "creando producto"
    }

    @Put()
    update(){
        return "actualizando producto"
    }

    @Delete()
    delete(){
        return "borrando producto"
    }
}
