export interface FederationRepository {
  save(identity: any): Promise<any>;
  findByAccountId(accountId: string): Promise<any>;
}
