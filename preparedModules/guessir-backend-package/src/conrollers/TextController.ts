import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { nanoid } from 'nanoid';
import { Repository } from 'typeorm';

import { CreateTextDto } from '../dto';
import { Text } from '../entities';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('texts')
export class TextController {
  constructor(
    @InjectRepository(Text)
    private readonly textRepository: Repository<Text>,
  ) {}

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Text> {
    const text = await this.textRepository.findOne({
      id,
    });

    if (!text) {
      throw new NotFoundException();
    }

    return text;
  }

  @Post()
  async create(@Body() newTextDto: CreateTextDto): Promise<Text> {
    const newText = this.textRepository.create({
      ...newTextDto,
      id: nanoid(20),
    });

    return plainToClass(Text, newText);
  }
}
