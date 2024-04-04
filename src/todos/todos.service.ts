import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Todo } from "./todos.entity";
import { Repository } from "typeorm";
import { CreateTodoDto } from "./dtos/create-todo.dto";

@Injectable()
export class TodosServices{
    constructor(@InjectRepository(Todo) private readonly todoRepo: Repository<Todo>,
    ) {}

    async create(dto: CreateTodoDto){
        const todo = this.todoRepo.create({ title: dto.title })
        return await this.todoRepo.save(todo);
    }

    async findMany() {
        return await this.todoRepo.find()
    }

    async findOne(id: number) {
        const todo = await this.todoRepo.findOne({ where: { id } });
        if(!todo){
            throw new NotFoundException("Item doesn't exists");
        }
        return todo;
    }

    async update(id: number, dto: CreateTodoDto) {
        const todo = await this.todoRepo.findOne({ where: { id } });
        if(!todo){
            throw new NotFoundException("Item doesn't exists");
        }
        Object.assign(todo, dto);
        return await this.todoRepo.save(todo);
    }

    async delete(id: number) {
        const todo = await this.todoRepo.findOne({where : { id }});
        if(!todo){
            throw new NotFoundException("Item doesn't exists");
        }
        return await this.todoRepo.remove(todo);
    }
}