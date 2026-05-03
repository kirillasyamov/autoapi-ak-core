/**
 * Prisma configuration for account-vault.
 * Docs: https://www.prisma.io/docs/orm/reference/prisma-config-reference
 */
import { defineConfig } from 'prisma/config';
import 'dotenv/config';

const databaseUrl = process.env['DATABASE_URL'];

if (!databaseUrl) {
    throw new Error('[prisma.config] DATABASE_URL is not defined. ' + 'Check your .env file or environment variables.');
}

export default defineConfig({
    schema: 'prisma/schema.prisma',
    migrations: {
        path: 'prisma/migrations',
    },
    datasource: {
        url: databaseUrl,
    },
});
