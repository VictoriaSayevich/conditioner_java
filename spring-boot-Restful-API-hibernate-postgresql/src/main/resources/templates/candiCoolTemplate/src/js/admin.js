import { CollectionAPI } from './apiCollection';
import { TemplateDOM } from './templateDOM';
import { ConditionerDOM } from './templateBuilder';

export const Admin = {
    test() {
        this.actionControl();
    },

    addProductTab() {

    },

    isChecked(str) {
        return str === 'on';
    },

    isHide(element) {
        return element == undefined;
    },

    addProduct() {
        document.querySelector('#action_title').textContent = "Добавление продукта";

        let form = document.querySelector('#admin_form_product');
        form.name = "add";

        console.log('here');

        const btn = document.querySelector('#form_submit');
        btn.addEventListener('mousedown', async() => {
            let response = await CollectionAPI.createProduct({});
            console.log(response);
        });

        // form.onsubmit = async(e) => {
        //     e.preventDefault();
        //     const formData = new FormData(form);
        //     let air_filter = this.isChecked(formData.get('air_filter')),
        //         invertor = this.isChecked(formData.get('invertor')),
        //         remote_manage = this.isChecked(formData.get('remote_manage'));

        //     let productObj = {
        //         price: formData.get('price'),
        //         brend: formData.get('brend'),
        //         model: formData.get('model'),
        //         img_url: formData.get('img_url'),
        //         type: formData.get('type'),
        //         inside_block: formData.get('inside_block'),
        //         operating_mode: formData.get('operating_mode'),
        //         air_filter: air_filter,
        //         invertor: invertor,
        //         cooling_capacity: formData.get('cooling_capacity'),
        //         refrigerant_type: formData.get('refrigerant_type'),
        //         remote_manage: remote_manage,
        //         country: formData.get('country'),
        //     }

        //     let response = await CollectionAPI.createProduct(productObj);
        //     console.log(response);
        // };
    },

    updateProduct() {
        document.querySelector('#action_title').textContent = "Редактирование продукта";
        const form = document.querySelector('#admin_form_product');
        form.name = "update";
        form.onsubmit = async(e) => {
            e.preventDefault();
            const formData = new FormData(form);
        }
    },

    toggleFormList() {
        let list = document.querySelector('#admin_all_products'),
            form = document.querySelector('#admin_form_product');
        if (list === undefined) {
            form.remove();
            ConditionerDOM.createAdminProductList();
        } else {
            list.remove();
            ConditionerDOM.createAdminProductForm();
        }
    },

    showForm() {
        document.querySelector('#admin_row').append(TemplateDOM.adminProductFormTpl());
    },

    async showAllProducts() {
        let row = document.querySelector('#admin_row'),
            container = TemplateDOM.createNode('div', ["row"]);
        container.id = "admin_all_products";

        row.append(container);


        let list = await CollectionAPI.getAllConditioners();
        console.log(container);
        console.log(list);
        for (let i = 0; i < list.length; i++) {
            container.append(TemplateDOM.cardTpl(list[i]));
        }
    },

    // hideAllProducts() {
    //     const list = document.querySelector('#admin_container');
    //     while (list.firstChild) {
    //         list.removeChild(list.firstChild);
    //     }
    // },

    deleteProduct() {
        document.querySelector('#action_title').textContent = "Удаление продукта";
        // const form = document.querySelector('#admin_form_product');
        // if (!this.isHide(form)) form.remove();
        this.showAllProducts();

        //dddddd

    },

    goToAddProduct() {
        window.location.href = "./add.html";
        // ConditionerDOM.createAdminProductForm();
        window.addEventListener("DOMContentLoaded", function() {
            ConditionerDOM.createAdminProductForm();
        });
    },

    actionControl() {
        const container = document.querySelector('#admin_actions');
        container.addEventListener('mousedown', (event) => {
            let target = event.target;
            switch (target.id) {
                case "add":
                    this.goToAddProduct();
                    break;
                case "update":
                    this.updateProduct();
                    break;
                case "delete":
                    this.deleteProduct();
                    break;
                default:
                    break;
            }
        });
    },
}