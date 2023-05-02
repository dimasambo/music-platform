"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    try {
        const PORT = process.env.port || 3000;
        exports.app = await core_1.NestFactory.create(app_module_1.AppModule);
        exports.app.enableCors();
        await exports.app.listen(PORT, () => console.log(`server started on port ${PORT}`));
    }
    catch (e) {
        console.log(e);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map