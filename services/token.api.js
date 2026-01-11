export class AuthApi {
    constructor(request) {
        this.request = request;
    }

    async login(email, password) {
        return this.request.post('/login', {
            data: {
                email,
                password
            }

        });
    }
}