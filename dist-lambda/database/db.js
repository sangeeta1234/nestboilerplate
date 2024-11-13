"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
let typeOrmConfig;
try {
    typeOrmConfig = {
        type: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        schema: 'public',
        synchronize: false,
    };
}
catch (error) {
    console.error('Database connection error:', error);
}
exports.default = typeOrmConfig;
//# sourceMappingURL=db.js.map