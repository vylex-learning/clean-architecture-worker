import { IValidation } from '@/presentation/protocols/validation';
import validator from 'validator';

export class EmailValidation implements IValidation {
  validate(email: string): Error | void {
    const validation = validator.isEmail(email);
    if (!validation) {
      return Error('invalid.email');
    }
  }
}
