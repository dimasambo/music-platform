import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


export let app
async function bootstrap() {

  try {
    const PORT = process.env.port || 3000
    app = await NestFactory.create(AppModule);
    app.enableCors()

    await app.listen(PORT, () => console.log(`server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}
bootstrap();
