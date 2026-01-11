import { faker } from '@faker-js/faker';

export function generateUser() {
  return {
    nome: faker.person.fullName(),
    email: `user_${Date.now()}_${faker.number.int(10000)}@exemplo.com`,
    password: '123456',
    administrador: 'true' // ⚠️ string, não boolean
  };
}
