export const CollectionAPI = {
    async getConditionerByID(id) {
        const url = `http://localhost:8088/api/conditioner/get-conditioner/${id}`;
        let data = null;
        try {
            const response = await fetch(url);
            data = await response.json();
        } catch (e) {
            alert("getConditionerByID error", e);
        }
        return data;
    },

    async getAllConditioners() {
        const url = `http://localhost:8088/api/conditioner/get-all-conditioner`;
        let data = null;
        try {
            const response = await fetch(url);
            data = await response.json();
        } catch (e) {
            alert("getAllConditioners error", e);
        }
        return data;
    },

    async postLogin(login, password) {
        let data = null;

        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `http://localhost:8088/api/user/login`;
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    login: login,
                    password: password
                }),
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            data = await response.json();
        } catch (e) {
            alert("Неверный логин или пароль", e);
        }
        return data;
    },

    async deleteProduct(id) {
        let result = null;
        const url = `http://localhost:8088/api/conditioner/delete-conditioner/${id}`;
        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
            });
            result = await response.json();
        } catch (e) {
            alert("deleteProduct", e);
        }
    },

    async updateProduct(id, bodyObj) {
        let result = null;
        const url = `http://localhost:8088/api/conditioner/update-conditioner/${id}`;
        console.log(localStorage.getItem('token'));
        try {
            const response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(bodyObj),
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
            });
            result = await response.json();
            console.log(result);
        } catch (e) {
            alert("updateProduct", e);
        }
    },

    async createProduct(bodyObj) {
        let result = null;
        const url = `http://localhost:8088/api/conditioner/create-conditioner`;
        console.log(bodyObj);
        try {
            const response = await fetch(url, {
                method: 'POST',
                // body: JSON.stringify(bodyObj),
                body: JSON.stringify({
                    price: 305.95,
                    brend: "ULLAEB",
                    model: "BUIC-091O",
                    img_url: "https://sun9-18.userapi.com/impg/va7ZjRr9eutYsLZ0IvmZKqRTlyhb0nX2x7-5WQ/ZOibCFZmZYI.jpg?size=263x280&quality=96&proxy=1&sign=9af9fda39504de8af058617b576bd0c7&type=album",
                    type: "Мобильный",
                    inside_block: "Подпотолочный",
                    operating_mode: "Охлаждение",
                    air_filter: true,
                    invertor: false,
                    cooling_capacity: 2642,
                    refrigerant_type: "R410B",
                    remote_manage: false,
                    country: "Франция"
                }),
                mode: 'cors',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                },
            });
            result = await response.json();
        } catch (e) {
            alert("createProduct", e);
        }
    }
}