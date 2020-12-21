import { TemplateDOM } from './templateDOM';
import { ConditionerList } from './conditionerList';
import { RequestController } from './requestController';
import { Conditioner } from './conditioner';
import { Admin } from './admin'
import { CollectionAPI } from './apiCollection';

export const ConditionerDOM = {
    buildDOM() {
        this.createBanner();
        this.createConditionerList();
        // this.createCarousel();
    },

    toggleClass(element, classAdd, classRemove) {
        element.classList.add(classAdd);
        element.classList.remove(classRemove);
    },

    createBanner() {
        document.querySelector('body').append(TemplateDOM.mainSectionTpl());
        document.querySelector('main').append(TemplateDOM.bannerTpl());
    },

    async createCarousel(count = 3) {
        document.querySelector('main').append(TemplateDOM.carouselContainerTpl());
        const container = document.querySelector('#carousel-conditioners'),
            list = await ConditionerList.getAllConditioners();
        if (list.length < count) count = list.length;
        for (let i = 0; i < count; i++) {
            container.append(TemplateDOM.carouselCardTpl(list[i]));
        }
    },

    async createConditionerList(count = 9) {
        document.querySelector('main').append(TemplateDOM.containerTpl());
        const container = document.querySelector('#container-conditioners'),
            list = await ConditionerList.getAllConditioners();
        if (list.length < count) count = list.length;
        for (let i = 0; i < count; i++) {
            container.append(TemplateDOM.cardTpl(list[i]));
        }
    },

    async createSingleProduct() {
        const id = RequestController.getQueryVariable('id'),
            item = await Conditioner.getConditioner(id);
        document.querySelector('body').append(TemplateDOM.singleCardTpl(item));
    },

    async createDescriptionTab() {
        const id = RequestController.getQueryVariable('id'),
            item = await Conditioner.getConditioner(id);
        document.querySelector('body').append(TemplateDOM.singleCardDescriptionTabTpl(item));
    },

    createFooter() {
        document.querySelector('body').append(TemplateDOM.footer());
    },

    createLoginSection() {
        const loginSection = TemplateDOM.createNode('section', ["login_box_area", "section-margin"]),
            container = TemplateDOM.createNode('div', ["container"]),
            row = TemplateDOM.createNode('div', ["row"]);

        row.append(TemplateDOM.loginBlockTpl());
        row.append(TemplateDOM.formTpl());
        container.append(row);
        loginSection.append(container);

        document.querySelector('body').append(loginSection);
    },

    async createAdminSection() {
        const section = TemplateDOM.createNode('section', ["checkout_area", "section-margin--small"]),
            container = TemplateDOM.createNode('div', ["container"]),
            containerDetails = TemplateDOM.createNode('div', ["billing_details"]),
            row = TemplateDOM.createNode('div', ["row"]);
        row.id = 'admin_row';
        containerDetails.innerHTML = '<h2 style="padding: 20px 0 40px;" id="action_title">Что нужно сделать?</h2>';
        row.append(TemplateDOM.adminActionTpl());

        container.append(containerDetails);
        containerDetails.append(row);
        section.append(container);

        document.querySelector('body').append(section);

        // this.createAdminProductList();
        // this.createAdminProductForm();

        // Admin.test();
    },

    async createAdminProductList() {
        let listProducts = TemplateDOM.createNode('div', ["row"]);
        let list = await CollectionAPI.getAllConditioners();
        let row = document.querySelector('#admin_row');

        for (let i = 0; i < list.length; i++) {
            listProducts.append(TemplateDOM.cardTpl(list[i]));
        }

        listProducts.id = "admin_all_products";
        // listProducts.style.display = "none";

        row.append(listProducts);
    },

    createAdminProductForm() {
        let row = document.querySelector('#admin_row');
        row.append(TemplateDOM.adminProductFormTpl());
    }
}