import { test as base, expect, request as playwrightRequest } from '@playwright/test';
import { AuthApi } from '../services/token.api';

export const test = base.extend({
    authRequest: async ({}, use) => {

        // Contexto SEM token
        const apiContext = await playwrightRequest.newContext({
            baseURL: 'https://serverest.dev'
        });

        const authApi = new AuthApi(apiContext);

        const response = await authApi.login(
            'fulano@qa.com',
            'teste'
        );

        expect(response.status()).toBe(200);

        const body = await response.json();
        const token = body.authorization;

        // Contexto COM token
        const authContext = await playwrightRequest.newContext({
            baseURL: 'https://serverest.dev',
            extraHTTPHeaders: {
                Authorization: token
            }
        });

        // Entrega o request autenticado ao teste
        await use(authContext);

        console.log('TOKEN GERADO:', token);

        // Limpeza
        await apiContext.dispose();
        await authContext.dispose();
    }
});

export { expect };
