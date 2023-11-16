import * as fs from 'node:fs';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CERT, FULL_CHAIN, PRIVATE_KEY } from './envList';
console.log(FULL_CHAIN, PRIVATE_KEY, CERT);
console.log(fs.existsSync(FULL_CHAIN), fs.existsSync(PRIVATE_KEY), fs.existsSync(CERT));
const httpsOptions = {
    ca: fs.readFileSync(FULL_CHAIN),
    key: fs.readFileSync(PRIVATE_KEY),
    cert: fs.readFileSync(CERT),
};
async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        httpsOptions,
    });
    await app.listen(3000);
}
bootstrap();
