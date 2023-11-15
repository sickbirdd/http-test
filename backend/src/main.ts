import fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CERT, FULL_CHAIN, PRIVATE_KEY } from './envList';
const httpsOptions = {
    ca: fs.readFileSync(FULL_CHAIN),
    key: fs.readFileSync(PRIVATE_KEY),
    cert: fs.readFileSync(CERT),
};
async function bootstrap() {
    console.log(httpsOptions);
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}
bootstrap();
