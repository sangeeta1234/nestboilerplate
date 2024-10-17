import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
// import { registerAs } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { join } from 'path';

dotenv.config();
let typeOrmConfig: TypeOrmModuleOptions;
try {
  typeOrmConfig = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST, // Cloud SQL instance connection name..
    port: Number(process.env.POSTGRES_PORT), // PostgreSQL port
    username: process.env.POSTGRES_USER, // Database username
    password: process.env.POSTGRES_PASSWORD, // Database password
    database: process.env.POSTGRES_DATABASE, // Database name
    schema: 'public',
    synchronize: false, // Must be false on production
    //migrationsTableName: 'migrations_table',
    // ssl: {
    //     rejectUnauthorized: false,
    //     ca: process.env.POSTGRES_SSL_SERVER_CA_CERTIFICATE,
    //     key: process.env.POSTGRES_SSL_CLIENT_KEY,
    //     cert: process.env.POSTGRES_SSL_CLIENT_CERTIFICATE,
    // },
  };
} catch (error) {
  console.error('Database connection error:', error);
}

export default typeOrmConfig;
// registerAs('typeorm', () => typeOrmConfig);
// export const connectionSource = new DataSource(
//     typeOrmConfig as DataSourceOptions
// );
