export const TemplateDOM = {
    createNode(selectorStr, classListArr) {
        let node = document.createElement(selectorStr);
        if (classListArr) {
            classListArr.forEach(className => {
                node.classList.add(className);
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
                            <a class="button button-hero" href="./pages/login.html">Администрировать</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return banner;
    },

    carouselContainerTpl() {
        let carousel = this.createNode('section', ["section-margin", "mt-0"]);
        carousel.innerHTML = '<div class="owl-carousel owl-theme hero-carousel" id="carousel-conditioners"></div>';
        return carousel;
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
                    <a href="./pages/single-product.html?id=${item.conditionerId}"><img class="card-img" src="${item.img_url}" alt="${item.brend} ${item.model}"></a>
                </div>
                <div class="card-body">
                    <p>Кондиционер</p>
                    <h4 class="card-product__title"><a href="./pages/single-product.html?id=${item.conditionerId}">${item.brend} ${item.model}</a></h4>
                    <p class="card-product__price">${item.price.toFixed(2)} р.</p>
                </div>
            </div>
        `;
        return card;
    },

    singleCardTpl(item) {
        let product = this.createNode('div', ["product_image_area"]);
        product.innerHTML = `
            <div class="container">
                <div class="row s_product_inner">
                    <div class="col-lg-6">
                        <div class="single-prd-item">
                            <img class="img-fluid" src="${item.img_url}" alt="${item.brend} ${item.model}">
                        </div>
                    </div>
                    <div class="col-lg-5 offset-lg-1">
                        <div class="s_product_text">
                            <h3>${item.brend} ${item.model}</h3>
                            <h2>${item.price.toFixed(2)} р.</h2>
                            <ul class="list">
                                <li><span>Тип</span> : ${item.type}</li>
                                <li><span>Страна</span> : ${item.country}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return product;
    },

    isTrue(field) {
        if (field) return "Да";
        return "Нет";
    },

    singleCardDescriptionTabTpl(item) {
        let product = this.createNode('section', ["product_description_area"]);
        product.innerHTML = `
            <div class="container">
                <div class="tab-content" id="myTabContent">
                    <div class="table-responsive">
                        <table class="table">
                            <tbody>
                                <tr><td><h5>Тип внутреннего блока</h5></td>
                                    <td><h5>${item.inside_block}</h5></td></tr>
                                <tr><td><h5>Режимы работы</h5></td>
                                    <td><h5>${item.operating_mode}</h5></td></tr>
                                <tr><td><h5>Осушение воздуха</h5></td>
                                    <td><h5>${this.isTrue(item.air_filter)}</h5></td> </tr>
                                <tr><td><h5>Инвертор</h5></td>
                                    <td><h5>${this.isTrue(item.invertor)}</h5></td></tr>
                                <tr><td><h5>Холодопроизводительность</h5></td>
                                    <td><h5>${item.cooling_capacity} Вт</h5></td> </tr>
                                <tr><td><h5>Тип хладагента</h5></td>
                                    <td><h5>${item.refrigerant_type}</h5></td> </tr>
                                <tr><td><h5>Пульт ДУ</h5></td>
                                    <td><h5>${this.isTrue(item.remote_manage)}</h5></td></tr>
                            </tbody>
                        </table>
                    </div> 
                </div> 
            </div>     
        `;
        return product;
    },

    footer() {
        let footer = this.createNode('footer', ["product_description_area"]);
        footer.innerHTML = `
            <div class="footer-area footer-only">
                <div class="container">
                    <div class="row section_gap">
                        <div class="col-lg-3 col-lg-6 col-lg-6">
                            <div class="single-footer-widget tp_widgets ">
                                <h4 class="footer_title large_title">CandiCool</h4>
                                <p>Современное понятие «кондиционер» как обозначение устройства для поддержания заданной температуры в помещении, существует достаточно давно.</p>
                                <p>Perkins приписывают первый патент на парокомпрессионный холодильный цикл, выданный 14 августа 1835 г. и озаглавленный «Аппарат и средства для производства льда и охлаждающих жидкостей».</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="row d-flex">
                        <p class="col-lg-12 footer-text text-center">
                            &copy; Виктория Саевич
                        </p>
                    </div>
                </div>
            </div>
        `;
        return footer;
    },

    loginBlockTpl() {
        const loginBlock = this.createNode('div', ["col-lg-6"]);
        loginBlock.innerHTML = `
            <div class="login_box_img">
                <div class="hover">
                    <h4>Cadni Cool администрирование</h4>
                    <p>Войдите в аккаунт, чтобы добавлять, удалять и редактировать товары</p>
                </div>
            </div>
        `;
        return loginBlock;
    },

    formTpl() {
        let formContainer = this.createNode('div', ["col-lg-6"]);
        formContainer.innerHTML = `
            <div class="login_form_inner register_form_inner">
                <h3>Войти в панель администрирования</h3>
                <form class="row login_form" id="register_form">
                    <div class="col-md-12 form-group">
                        <input type="text" class="form-control" id="login" name="login" placeholder="Логин" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Логин'">
                    </div>
                    <div class="col-md-12 form-group">
                        <input type="password" class="form-control" id="password" name="password" placeholder="Пароль" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Пароль'">
                    </div>
                    <div class="col-md-12 form-group">
                        <button type="submit" value="submit" class="button button-register w-100">Войти</button>
                    </div>
                </form>
            </div>
        `;
        return formContainer;
    },

    adminTestTpl(product) {
        let test = this.createNode('h1');
        test.innerHTML = `${product.country}`;
        return test;
    },

    adminActionTpl() {
        let actions = this.createNode('div', ['col-lg-4']);
        actions.innerHTML = `
            <div class="order_box" id="admin_actions">
                <h2>Выберите действие</h2>
                <div class="payment_item">
                    <div class="col-md-12 form-group">
                        <a href="./add.html" id="add" class="button button-register w-100" style="margin: 5px 0; text-align: center;">Добавить</a>
                        <a href="./update.html" id="update" class="button button-register w-100" style="margin: 5px 0; text-align: center;">Редактировать</a>
                        <a href="./delete.html" id="delete" class="button button-register w-100" style="margin: 5px 0; text-align: center;">Удалить</a>
                    </div>
                </div>
            </div>
        `;
        return actions;
    },

    adminProductFormTpl() {
        let form = this.createNode('div', ['col-lg-8']);
        form.id = "admin_form_parent";
        form.innerHTML = `
            <form class="row contact_form" method="post" id="admin_container" novalidate="novalidate">
                <div class="col-md-6 form-group p_star">
                    <h6>Бренд</h6>
                    <input type="text" class="form-control" id="brend" name="brend" required>
                </div>
                <div class="col-md-6 form-group p_star">
                    <h6>Модель</h6>
                    <input type="text" class="form-control" id="model" name="model" required>
                </div>
                <div class="col-md-12 form-group">
                    <h6>Тип</h6>
                    <input type="text" class="form-control" id="type" name="type" required>
                </div>
                <div class="col-md-6 form-group p_star">
                    <h6>Страна</h6>
                    <select class="country_select" name="country">
                        <option value="Германия">Германия</option>
                        <option value="Италия">Италия</option>
                        <option value="Африка">Африка</option>
                        <option value="Россия">Россия</option>
                        <option value="Америка">Америка</option>
                        <option value="Китай">Китай</option>
                    </select>
                </div>
                <div class="col-md-6 form-group p_star">
                    <h6>Тип внутреннего блока</h6>
                    <input type="text" class="form-control" id="inside_block" name="inside_block" required>
                </div>
                <div class="col-md-12 form-group p_star">
                    <h6>Ссылка на изображение</h6>
                    <input type="text" class="form-control" id="img_url" name="img_url" required value="https://img.5element.by/import/images/ut/goods/good_28b71ca9-da0f-11e9-80c7-005056840c70/good_img_ab1fdbf9-db93-11e9-80c7-005056840c70.jpg">
                </div>
                <div class="col-md-12 form-group">
                    <h6>Режим работы</h6>
                    <select class="country_select" name="operating_mode">
                        <option value="Охлождение">Охлождение</option>
                        <option value="Увлажнение">Увлажнение воздуха</option>
                    </select>
                </div>
                <div class="col-md-12 form-group">
                    <div class="creat_account">
                        <input type="checkbox" id="f-option2" name="air_filter" required>
                        <label for="f-option2">Осушение воздуха</label>
                    </div>
                </div>
                <div class="col-md-12 form-group">
                    <div class="creat_account">
                        <input type="checkbox" id="f-option2" name="invertor" required>
                        <label for="f-option2">Инвертор</label>
                    </div>
                </div>
                <div class="col-md-12 form-group">
                    <div class="creat_account">
                        <input type="checkbox" id="f-option2" name="remote_manage" required>
                        <label for="f-option2">Пульт ДУ</label>
                    </div>
                </div>
                <div class="col-md-6 form-group p_star">
                    <h6>Холодпроизводительность</h6>
                    <input type="number" class="form-control" id="cooling_capacity" name="cooling_capacity" min="1000" max="5000" value="1500" required>
                </div>
                <div class="col-md-6 form-group p_star">
                    <h6>Тип хологента</h6>
                    <input type="text" class="form-control" id="refrigerant_type" name="refrigerant_type" required>
                </div>
                <div class="col-md-12 form-group">
                    <h6>Цена</h6>
                    <input type="number" step="0.5" class="form-control" id="price" name="price" min="0" value="700.95" required>
                </div>
                <div class="col-md-12 form-group">
                    <button type="button" id="form_submit" class="button hero-button w-100">Отправить</button>
                </div>
            </form>
        `;
        return form;
    },
}