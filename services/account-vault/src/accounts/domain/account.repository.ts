export interface AccountRepository {
  save(account: any): Promise<any>;
  findById(id: string): Promise<any>;
}
