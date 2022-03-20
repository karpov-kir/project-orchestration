import { Repository } from 'typeorm';
import { CreateTextDto } from '../dto';
import { Text } from '../entities';
export declare class TextController {
    private readonly textRepository;
    constructor(textRepository: Repository<Text>);
    findById(id: string): Promise<Text>;
    create(newTextDto: CreateTextDto): Promise<Text>;
}
