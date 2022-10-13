class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _getResponseData(res) {
        if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    getUsers() {
        return fetch(this._url, {
            method: 'GET',
            headers: this._headers,
        }).then((res) => {
            return this._getResponseData(res);
        });
    }
}

const api = new Api({
    url: 'https://api.json-generator.com/templates/YPDnof1UnjjY/data',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer 9io8v13iognk3az7e8p5xex8pzv08nxmngi9wi0b',
    },
});

export default api;
