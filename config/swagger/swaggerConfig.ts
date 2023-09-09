import { DocumentBuilder } from "@nestjs/swagger";

export const configSwagger = new DocumentBuilder()
        .setTitle('Api de Pessoas')
        .setDescription('Esta é uma api simples baseada na maratona de Rinha de Backend')
        .setVersion('1.0')
        .addTag('pessoas')
        .build();