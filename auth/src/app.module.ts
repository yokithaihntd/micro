import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SubModule } from './sub/sub.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [ AuthModule, SubModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
