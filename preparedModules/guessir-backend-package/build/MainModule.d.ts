import { OnApplicationBootstrap } from '@nestjs/common';
import { Connection } from 'typeorm';
export declare class MainModule implements OnApplicationBootstrap {
    private readonly connection;
    constructor(connection: Connection);
    onApplicationBootstrap(): Promise<void>;
}
