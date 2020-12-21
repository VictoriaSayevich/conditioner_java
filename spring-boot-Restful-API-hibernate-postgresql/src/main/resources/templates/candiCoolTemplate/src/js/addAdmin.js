import { CollectionAPI } from './apiCollection';
import { ConditionerDOM } from './templateBuilder';
import { Admin } from './admin';

window.addEventListener("DOMContentLoaded", function() {
    console.log("Good");
    ConditionerDOM.createAdminSection();
    ConditionerDOM.createAdminProductForm();

    const btn = document.querySelector('#form_submit');
    btn.addEventListener('mousedown', () => {
        document.querySelector('#action_title').textContent = "Добавление продукта";

        let form = document.querySelector('#admin_form_product');
        console.log(form);

        const formData = new FormData(form);
        let air_filter = this.isChecked(formData.get('air_filter')),
            invertor = this.isChecked(formData.get('invertor')),
            remote_manage = this.isChecked(formData.get('remote_manage'));

        let productObj = {
            price: formData.get('price'),
            brend: formData.get('brend'),
            model: formData.get('model'),
            img_url: formData.get('img_url'),
            type: formData.get('type'),
            inside_block: formData.get('inside_block'),
            operating_mode: formData.get('operating_mode'),
            air_filter: air_filter,
            invertor: invertor,
            cooling_capacity: formData.get('cooling_capacity'),
            refrigerant_type: formData.get('refrigerant_type'),
            remote_manage: remote_manage,
            country: formData.get('country'),
        }

        async() => {
            let response = await CollectionAPI.createProduct(productObj);
            console.log(response);
        }


    });
    // async() => {
    //     console.log('11111111');
    //     await Admin.addProduct();
    // };
});