import { Injectable } from '@nestjs/common';
import { DB_HOST } from './envList';

@Injectable()
export class AppService {
    getHello(): string {
        return `Hello World! ${DB_HOST}`;
    }
}
