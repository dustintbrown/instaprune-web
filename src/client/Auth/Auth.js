import auth0 from 'auth0-js';

export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'dustintbrown.auth0.com',
        clientID: 'vhLgzrtNUKPZCSHcPfINC8GIdFP4hdPo',
        redirectUri: 'http://localhost:3000/callback',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login() {
        this.auth0.authorize();
    }
}