export const TemplateDOM = {
    createNode(selectorStr, classListArr) {
        let node = document.createElement(selectorStr);
        if (classListArr) {
            classListArr.forEach(className => {
                node.classListArr.add(className);
            });
        }
        return node;
    },

    mainSectionTpl() {
        let main = this.createNode('main', ["site-main"]);
        return main;
    },

    bannerTpl() {
        let banner = this.createNode('section', ["hero-banner"]);
        banner.innerHTML = `
            <div class="container">
                <div class="row no-gutters align-items-center pt-60px">
                    <div class="col-5 d-none d-sm-block">
                        <div class="hero-banner__img">
                            <img class="img-fluid" src="../src/img/hero-banner.png" alt="главное изображение">
                        </div>
                    </div>
                    <div class="col-sm-7 col-lg-6 offset-lg-1 pl-4 pl-md-5 pl-lg-0">
                        <div class="hero-banner__content">
                            <h4>Кондиционеры нового поколения</h4>
                            <h1>Candi Cool</h1>
                            <p>Будьте всегда спокойны вместе с нами</p>
                            <a class="button button-hero" href="#">Смотреть все товары</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return banner;
    },

    carouselContainerTpl() {
        const carouselContainerTemplate = document.createElement('section');
        carouselContainerTemplate.classList.add('section-margi', 'mt-0');
        carouselContainerTemplate.innerHTML = '<div class="owl-carousel owl-theme hero-carousel" id="carousel-conditioners"></div>';
        return carouselContainerTemplate;
    },

    carouselCardTpl(item) {
        let card = this.createNode('div', ["hero-carousel__slide"]);
        card.innerHTML = `
            <img src="${item.img_url}" alt="${item.brend} ${item.model}" class="img-fluid">
            <a href="#" class="hero-carousel__slideOverlay">
                <h3>${item.brend}</h3>
                <p>${item.model}</p>
            </a>
        `;
        return card;
    },

    containerTpl() {
        let container = this.createNode('section', ["section-margin", "calc-60px"]);
        container.innerHTML = `
            <div class="container">
                <div class="section-intro pb-60px">
                    <p>Успей купить!</p>
                    <h2>Популярные <span class="section-intro__style">кондиционеры</span></h2>
                </div>
                <div class="row" id="container-conditioners"></div>
            </div>
            `;
        return container;
    },

    cardTpl(item) {
        let card = this.createNode('div', ["col-md-6", "col-lg-4", "col-xl-3"]);
        card.innerHTML = `
            <div class="card text-center card-product">
                <div class="card-product__img">
                    <img class="card-img" src="${item.img_url}" alt="${item.brend} ${item.model}">
                </div>
                <div class="card-body">
                    <p>Кондиционер</p>
                    <h4 class="card-product__title"><a href="single-product.html">${item.brend} ${item.model}</a></h4>
                    <p class="card-product__price">${item.price} р.</p>
                </div>
            </div>
        `;
        return card;
    },

}