import { CollectionAPI } from './apiCollection';

export const RequestController = {
    getQueryVariable(variable) {
        let queryDict = {};
        location.search
            .substring(1)
            .split('&')
            .forEach(item => {
                let param = item.split('=');
                queryDict[param[0]] = param[1];
            });
        return queryDict[variable];
    },

    // postLoginParam(login, password) {
    //     let xhr = new XMLHttpRequest();
    //     let body = 'login=' + encodeURIComponent(login) +
    //         '&password=' + encodeURIComponent(password);

    //     console.log(body);

    //     xhr.open("POST", CollectionAPI.postLogin(), true);
    //     xhr.setRequestHeader('Content-Type', 'multipart/form-data');

    //     xhr.onreadystatechange = function() {
    //         console.log("11111");
    //         alert("11111");
    //     };

    //     xhr.send(body);

    //     console.log(xhr);
    // }
}