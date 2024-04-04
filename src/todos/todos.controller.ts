import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TodosServices } from "./todos.service";
import { CreateTodoDto } from "./dtos/create-todo.dto";

@Controller('todos')
export class TodosController {
    constructor(private readonly todoService: TodosServices) {}

    @Post()
    create(@Body() dto: CreateTodoDto) {
        return this.todoService.create(dto);
    }

    @Get()
    findMany() {
        return this.todoService.findMany();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.todoService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: CreateTodoDto) {
        return this.todoService.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.todoService.delete(id);
    }
}