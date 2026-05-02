export interface CredentialRepository {
  save(credential: any): Promise<any>;
  findByAccountId(accountId: string): Promise<any>;
}
