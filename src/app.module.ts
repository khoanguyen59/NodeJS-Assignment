import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
	imports: [ TypeOrmModule.forRoot({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "123456",
    "database": "gdpr_system",
    "entities": ["dist/**/*.entity.js"],
    "synchronize": false,
    "logging": true
}), UserModule],
	controllers: [ AppController ],
	providers: [ AppService ]
})
export class AppModule {}
