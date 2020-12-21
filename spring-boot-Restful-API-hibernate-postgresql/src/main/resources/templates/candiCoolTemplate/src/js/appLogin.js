import { ConditionerDOM } from './templateBuilder';
import { Login } from './login';

window.addEventListener("DOMContentLoaded", function() {
    ConditionerDOM.createLoginSection();
    Login.authorizate();
});