import { TemplateDOM } from './templateDOM';
import { ConditionerList } from './conditionerList';

export const ConditionerDOM = {
    buildDOM() {
        this.createBanner();
        this.createCarousel();
    },

    createBanner() {
        document.querySelector('body').append(TemplateDOM.mainSectionTpl());
        console.log(TemplateDOM.mainSectionTpl());
        document.querySelector('main').append(TemplateDOM.bannerTpl());
    },

    async createCarousel(count = 3) {
        document.querySelector('.hero-banner').append(TemplateDOM.carouselContainerTpl());
        const container = document.querySelector('#carousel-conditioners'),
            list = await ConditionerList.getAllConditioners();
        let templateStr = "";
        if (list.length < count) count = list.length;
        for (let i = 0; i < count; i++) {
            templateStr += TemplateDOM.carouselCardTpl(list[i]);
        }
        container.innerHTML = templateStr;
    }
}


// const allConditioners = ConditionerList.getAllConditioners();

function addConditionersToTemplate(list, container, templateCallback) {
    list.array.forEach(element => {
        container.innerHTML = templateCallback(element);
    });
}