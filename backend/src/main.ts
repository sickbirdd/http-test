import fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CERT, FULL_CHAIN, PRIVATE_KEY } from './envList';
const httpsOptions = {
    ca: Buffer.from(FULL_CHAIN),
    key: Buffer.from(PRIVATE_KEY),
    cert: Buffer.from(CERT),
};
async function bootstrap() {
    console.log(httpsOptions);
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}
bootstrap();
