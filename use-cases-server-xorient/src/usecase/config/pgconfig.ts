import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// we can dorectly export a config, and for config we export directly
export const typeOrmConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'usecase-xorient',
    synchronize: true, // must be avoided in PROD
    entities: '../domain/*.*'
};