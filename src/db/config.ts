import { DataSourceOptions } from "typeorm";

const entitySource = process.env.NODE_ENV === 'dev' ? 'src/**/*.entity{.ts,.js}' : 'dist/**/*.entity{,.js}';

const config: DataSourceOptions = {
    type: 'postgres',
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    entities: [entitySource],
    migrations: ['src/migration/*.ts']
};

export default config;