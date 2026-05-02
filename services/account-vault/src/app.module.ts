import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { HealthModule } from './health/health.module';
import { AccountsModule } from './accounts/accounts.module';
import { CredentialsModule } from './credentials/credentials.module';
import { ApiKeysModule } from './api-keys/api-keys.module';
import { AuthFactorModule } from './auth-factor/auth-factor.module';
import { FederationModule } from './federation/federation.module';

@Module({
  imports: [ConfigModule, HealthModule, AccountsModule, CredentialsModule, ApiKeysModule, AuthFactorModule, FederationModule],
})
export class AppModule {}
