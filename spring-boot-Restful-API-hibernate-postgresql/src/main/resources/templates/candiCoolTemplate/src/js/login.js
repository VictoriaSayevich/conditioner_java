import { CollectionAPI } from './apiCollection';

export const Login = {
    authorizate() {
        const formElem = document.querySelector("#register_form");
        formElem.onsubmit = async(e) => {
            e.preventDefault();
            const formData = new FormData(formElem);

            let response = await CollectionAPI.postLogin(formData.get('login'), formData.get('password'));
            if (response.status === 500) alert("Неверный логин или пароль");
            else {
                localStorage.setItem('token', response.token);
                window.location.href = "./add.html";
            }
        };
    },
}