export class User {
    constructor(
        public email: string,
        public id: string,
        private _token: string,
        private _expireDate: Date) {
    }

    get token(): string {
        if (!this._expireDate || new Date() > this._expireDate ){
            // token expired
            return null;
        }
        return this._token;
    }
}
