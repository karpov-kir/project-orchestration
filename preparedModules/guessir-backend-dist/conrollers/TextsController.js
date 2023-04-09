var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, ClassSerializerInterceptor, Controller, Get, NotFoundException, Param, Post, UseInterceptors, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { nanoid } from 'nanoid';
import { Repository } from 'typeorm';
import { CreateTextDtoRequest } from '../dto/CreateTextDtoRequest';
import { TextEntity } from '../entities/TextEntity';
let TextsController = class TextsController {
    textsRepository;
    constructor(textsRepository) {
        this.textsRepository = textsRepository;
    }
    async find() {
        return this.textsRepository.find({
            take: 100,
        });
    }
    async findById(id) {
        const text = await this.textsRepository.findOne({
            where: { id },
        });
        if (!text) {
            throw new NotFoundException();
        }
        return text;
    }
    async create(newTextDto) {
        const newText = await this.textsRepository.save({
            ...newTextDto,
            id: nanoid(20),
        });
        return plainToClass(TextEntity, newText);
    }
};
__decorate([
    Get(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TextsController.prototype, "find", null);
__decorate([
    Get('/:id'),
    __param(0, Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TextsController.prototype, "findById", null);
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateTextDtoRequest]),
    __metadata("design:returntype", Promise)
], TextsController.prototype, "create", null);
TextsController = __decorate([
    UseInterceptors(ClassSerializerInterceptor),
    Controller('texts'),
    __param(0, InjectRepository(TextEntity)),
    __metadata("design:paramtypes", [Repository])
], TextsController);
export { TextsController };
//# sourceMappingURL=TextsController.js.map