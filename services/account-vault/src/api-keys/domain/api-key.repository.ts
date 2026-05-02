export interface ApiKeyRepository {
  save(apiKey: any): Promise<any>;
  findById(id: string): Promise<any>;
}
