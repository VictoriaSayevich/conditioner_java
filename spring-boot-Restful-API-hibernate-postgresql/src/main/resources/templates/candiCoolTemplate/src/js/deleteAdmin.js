import { ConditionerDOM } from './templateBuilder';
import { Admin } from './admin';

window.addEventListener("DOMContentLoaded", function() {
    console.log("Good");
    ConditionerDOM.createAdminSection();
    ConditionerDOM.createAdminProductList();
    async() => {
        await ConditionerDOM.createAdminProductList();
        // await Admin.deleteProduct();
    };
    // Admin.addProduct();
    // Admin.test();
    // ConditionerDOM.testAdmin();
});