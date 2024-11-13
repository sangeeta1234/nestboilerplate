"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const aws_serverless_express_1 = require("aws-serverless-express");
const app_module_1 = require("./app.module");
const express = require("express");
const nest_factory_1 = require("@nestjs/core/nest-factory");
const platform_express_1 = require("@nestjs/platform-express");
const server = express();
async function bootstrap() {
    const app = await nest_factory_1.NestFactory.create(app_module_1.AppModule, new platform_express_1.ExpressAdapter(server));
    app.enableCors();
    await app.init();
    return (0, aws_serverless_express_1.createServer)(server);
}
let cachedServer;
const handler = async (event, context) => {
    if (!cachedServer) {
        cachedServer = await bootstrap();
    }
    return (0, aws_serverless_express_1.proxy)(cachedServer, event, context, 'PROMISE').promise;
};
exports.handler = handler;
//# sourceMappingURL=lambda.js.map