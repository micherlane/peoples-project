"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.configSwagger = new swagger_1.DocumentBuilder()
    .setTitle('Api de Pessoas')
    .setDescription('Esta é uma api simples baseada na maratona de Rinha de Backend')
    .setVersion('1.0')
    .addTag('pessoas')
    .build();
//# sourceMappingURL=swaggerConfig.js.map