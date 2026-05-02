import { Injectable } from '@nestjs/common';

@Injectable()
export class PasswordPolicyService {
  validate() { return true; }
}
