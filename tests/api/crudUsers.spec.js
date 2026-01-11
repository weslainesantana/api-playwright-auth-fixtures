import { test, expect } from '../../fixtures/auth.fixture.js';
import UsuariosApi from '../../services/usuarios.api.js';
import { generateUser } from '../../utils/faker.js';

test.describe.serial('CRUD de Usuários - API', () => {
  let usuariosApi;
  let userId;
  const payload = generateUser();

  test.beforeEach(async ({ authRequest }) => {
    usuariosApi = new UsuariosApi(authRequest);
    
  });

  test('POST', async () => {
    const res = await usuariosApi.criarUsuario(payload);
    const body = await res.json();

    userId = body._id;
    expect(res.status()).toBe(201);
  });

  test('GET', async () => {
    const res = await usuariosApi.buscarUsuariosPorId(userId);
    expect(res.status()).toBe(200);
  });

  test('DELETE', async () => {
    const res = await usuariosApi.deleteUsers(userId);
    expect(res.status()).toBe(200);
  });
});
