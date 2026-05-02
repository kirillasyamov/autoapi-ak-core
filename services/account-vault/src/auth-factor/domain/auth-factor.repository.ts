export interface AuthFactorRepository {
  save(authFactor: any): Promise<any>;
  findByAccountId(accountId: string): Promise<any>;
}
