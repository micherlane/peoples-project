"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const path_1 = require("path");
const swaggerConfig_1 = require("../config/swagger/swaggerConfig");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true
    });
    app.enableVersioning({
        type: common_1.VersioningType.URI,
    });
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig_1.configSwagger);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    app.useBodyParser('json');
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map