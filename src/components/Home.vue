<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="main">
        <Header></Header>
        <div class="general_block">
            <div class="left_side_geberal_div">
                <h2>Студия WEB разработки<br>"WEB Marvels"</h2>
                <div class="utps">
                    <div class="utp">
                        <span>Современно</span>
                        <img src="../assets/futures.png">
                    </div>
                    <div class="utp">
                        <span>Креативно</span>
                        <img src="../assets/creative.png">
                    </div>
                    <div class="utp">
                        <span>Технологично</span>
                        <img src="../assets/technology.png">
                    </div>
                </div>
            </div>
            <div class="right_side_gebneral_div">
                <img src="../assets/3d-shapes-glowing-with-bright-holographic-colors.png">
            </div>
        </div>
        <div class="form_block">
            <div class="form_mail_block">
                <div class="form_mail_block_text">
                    <p>Оставь заявку сегодня</p>
                    <span>И получи 2 месяца технической поддержки в подарок &#127873;</span>
                </div>
                <form @submit.prevent="">
                    <Input v-model="form.name" label="Имя"></Input>
                    <Input v-model="form.phone" label="Телефон"></Input>
                    <SendButton><slot>Отправить</slot></SendButton>
                </form>
            </div>
        </div>
        <div class="what_we_do">
            <div class="left_side_what_we_do">
                <h3>ЧТО<br>МЫ<br>ДЕЛАЕМ:</h3>
            </div>
            <div class="right_side_what_we_do">
                <div class="what_block">
                    <h2>Web сайты</h2>
                </div>
                <div class="what_block">
                    <h2>Web приложения</h2>
                </div>
                <div class="what_block">
                    <h2>CRM и CMS интеграции</h2>
                </div>
                <div class="what_block">
                    <h2>Тезническая поддержка</h2>
                </div>
            </div>
        </div>
        <div class="whats_sites_we_do">
            <div class="zagolovok_what_sites_we_do">
                <h3>Какие сайты мы делам:</h3>
                <p>Из огромного количества современных сайтов можно выделить основные категории, которые смогут удовлетворить все потребности Вас и ваших клиентов</p>
            </div>
            <div class="categoryes_of_sites">
                <div class="card_of_categoryes" v-for="category in categorySites" :key="category.id" :class="{active: opencard == category.id}">
                    <h2 :class="{actieveposition: opencard == category.id}">{{ category.category }}</h2>
                    <div class="line" :class="{actieveopciti: opencard == category.id}"></div>
                    <h3 class="h3desc" :class="{actieveopciti: opencard == category.id}">{{ category.description }}</h3>
                    <ul :class="{actieveopciti: opencard == category.id}">
                        <li v-for="list in category.list" :key="list.id">{{ list.otl }}</li>
                    </ul>
                    <div class="open_card" :class="{actieveposition: opencard == category.id}" @click="openCard(category.id)">Развернуть</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './UI_components/Header.vue';
    import Input from './UI_components/Input.vue';
    import SendButton from './UI_components/SendButton.vue';
    export default {
        components: {
            Header,
            Input,
            SendButton
        },
        data() {
            return {
                form: {
                    name: '',
                    phone: ''
                },
                categorySites: [
                    {
                        id: 1,
                        category: 'Landing',
                        description: 'Лэндинг — это одностраничный сайт, предназначенный для выполнения конкретной маркетинговой задачи, обычно направленной на получение конверсий. Его основная цель — быстро донести ключевое сообщение до целевой аудитории и побудить посетителя к определенному действию, будь то регистрация, покупка, подписка на рассылку или заполнение контактной формы. Лэндинги часто используются в рекламных кампаниях, направленных на привлечение трафика через социальные сети, контекстную рекламу или email-маркетинг. Благодаря своей лаконичности и четкому фокусу, они эффективны в привлечении внимания и увеличении числа конверсий',
                        list: [
                            {
                                id: 1,
                                otl: 'Целевая аудитория: Лэндинг разрабатывается с четким пониманием целевой аудитории и специфики ее потребностей, что позволяет максимально точно настроить месседж и предложения'
                            },
                            {
                                id: 2,
                                otl: 'Минимум информации: Лэндинг содержит только самую важную информацию, которая помогает пользователю принять решение о совершении целевого действия, избегая излишней детализации и отвлекающих элементов'
                            },
                            {
                                id: 3,
                                otl: 'Простота навигации: На лэндинге практически отсутствует внутренняя навигация, что минимизирует количество кликов и направляет пользователя прямо к выполнению целевого действия'
                            },
                            {
                                id: 4,
                                otl: 'Высокий уровень конверсии: Все элементы страницы — текст, изображения, кнопки и формы — оптимизированы для достижения максимального числа конверсий, благодаря четкому и понятному призыву к действию (CTA)'
                            }
                        ]
                    },
                    {
                        id: 2,
                        category: 'Многостраничный',
                        description: 'Многостраничный сайт — это веб-ресурс, состоящий из нескольких страниц, каждая из которых отвечает за предоставление определенной информации или выполнения определенной функции. Такие сайты подходят для компаний, которым нужно представить широкий спектр информации о своей деятельности, услугах или продуктах. Многостраничные сайты, как правило, включают в себя основные разделы, такие как "О компании", "Услуги", "Продукты", "Контакты", а также могут содержать дополнительные разделы, такие как "Новости", "Блог" или "Часто задаваемые вопросы". Благодаря своей структуре, многостраничные сайты позволяют подробно и последовательно излагать информацию, что особенно важно для крупных компаний и организаций',
                        list: [
                            {
                                id: 1,
                                otl: 'Структурированная информация: Каждая страница сайта отвечает за представление конкретной темы или раздела, что делает сайт удобным для пользователей, которым нужно найти подробную информацию о компании или ее предложениях'
                            },
                            {
                                id: 2,
                                otl: 'Разнообразие контента: Многостраничный сайт может содержать различные виды контента, такие как текст, изображения, видео, интерактивные элементы и формы обратной связи, что делает его универсальным инструментом для представления информации'
                            },
                            {
                                id: 3,
                                otl: 'Навигация: Разработанный с учетом удобства пользователя, многостраничный сайт включает в себя продуманную систему навигации с меню, ссылками и разделами, что позволяет пользователям легко находить интересующую их информацию'
                            },
                            {
                                id: 4,
                                otl: 'SEO-оптимизация: Каждая страница может быть оптимизирована под конкретные ключевые слова, что улучшает видимость сайта в поисковых системах и позволяет привлекать трафик на разные части сайта по разным запросам'
                            }
                        ]
                    },
                    {
                        id: 3,
                        category: 'Интернет магазин',
                        description: 'Интернет-магазин — это сложный веб-сайт, специально разработанный для продажи товаров или услуг в режиме онлайн. Такие сайты позволяют пользователям просматривать каталог товаров, выбирать нужные позиции, добавлять их в корзину и оформлять заказ, не покидая страницы сайта. Интернет-магазины предоставляют возможность автоматизированной обработки заказов, что значительно упрощает процесс покупки как для клиента, так и для продавца. Интернет-магазин может включать в себя широкий спектр функционала, начиная от простого каталога товаров и заканчивая сложными системами управления запасами, интеграцией с платежными системами и логистическими сервисами',
                        list: [
                            {
                                id: 1,
                                otl: 'Каталог товаров: Интернет-магазин включает в себя обширный каталог, позволяющий пользователям легко находить и просматривать товары, используя категории, фильтры, и поисковую строку. Это помогает клиентам быстрее находить нужные им товары'
                            },
                            {
                                id: 2,
                                otl: 'Корзина и оформление заказа: Важный элемент любого интернет-магазина — это корзина, в которую пользователь может добавлять выбранные товары и переходить к оформлению заказа, где он может выбрать способ доставки и оплаты'
                            },
                            {
                                id: 3,
                                otl: 'Интеграция платежных систем: Интернет-магазины поддерживают различные методы оплаты, такие как банковские карты, электронные кошельки, системы онлайн-платежей, что обеспечивает удобство для клиента и увеличивает вероятность завершения покупки'
                            },
                            {
                                id: 4,
                                otl: 'Управление запасами и логистикой: Современные интернет-магазины часто интегрируются с системами управления складом и логистикой, что позволяет автоматизировать процессы обновления остатков, формирования заказов и их доставки, значительно облегчая управление бизнесом'
                            }
                        ]
                    }
                ],
                opencard: null
            }
        },
        methods: {
            openCard(id) {
                if (this.opencard == id) {
                    this.opencard = null
                } else {
                    this.opencard = id
                }
            }
        }
    }
</script>

<style scoped>
    .main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0px;
        flex-direction: column;
    }
    .general_block {
        width: 1200px;
        display: flex;
        flex-direction: row;
        padding: 40px 0px;
        justify-content: space-between;
        gap: 16px;
        box-sizing: border-box;
    }
    .left_side_geberal_div {
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        box-sizing: border-box;
    }
    .left_side_geberal_div h2 {
        font-size: 44px;
        line-height: 110%;
        font-weight: 900;
        background: linear-gradient(#042454, #1f3577, #3d459c, #5f55c0, #8663e3);
        padding: 24px;
        border-radius: 32px;
        box-shadow: 2px 2px 8px 0px #042454
    }
    .utps {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 16px;
    }
    .utp {
        width: 33%;
        display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: center;
        background: linear-gradient(#042454, #1f3577, #3d459c, #5f55c0, #8663e3);
        border-radius: 32px;
        box-shadow: 2px 2px 8px 0px #042454;
        position: relative;
        overflow: hidden;
    }
    .utp span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 20px;
        font-weight: 700;
    }
    .utp img {
        width: 100%;
        object-fit: cover;
    }
    .right_side_gebneral_div {
        width: 40%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background: linear-gradient(#042454, #1f3577, #3d459c, #5f55c0, #8663e3);
        border-radius: 48px;
        box-shadow: 2px 2px 8px 0px #042454
    }
    .right_side_gebneral_div img {
        width: 100%;
        object-fit: cover;
    }
    .form_block {
        width: 100%;
        padding: 32px 0px;
        background: rgb(56, 56, 56);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 48px
    }
    .form_mail_block {
        width: 1200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 48px;
    }
    .form_mail_block_text {
        display: flex;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        align-items: center;
    }
    .form_mail_block_text p {
        font-size: 32px;
        font-weight: 700;
        line-height: 100%;
    }
    .form_mail_block_text span {
        font-size: 16px;
        line-height: 100%;
    }
    form {
        display: flex;
        flex-direction: row;
        gap: 48px;
    }
    .what_we_do {
        width: 1200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 120px;
        gap: 48px;
        padding: 24px 0px;
        box-sizing: border-box;
    }
    .left_side_what_we_do {
        width: 40%;
        display: flex;
    }
    .left_side_what_we_do h3 {
        font-size: 80px;
        font-weight: 900;
        color: rgba(56, 56, 56, 1);
    }
    .right_side_what_we_do {
        width: 60%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        box-sizing: border-box;
        gap: 12px;
    }
    .what_block {
        width: calc(50% - 6px);
        height: 220px;
        position: relative;
        border-radius: 32px;
        overflow: hidden;
        box-sizing: border-box;
        box-shadow: 2px 2px 6px 0px #042454;
        transition: all 200ms ease-in-out;
    }
    .what_block:nth-child(n):hover {
        background-size: 120% 120%;
    }
    .what_block:nth-child(1) {
        background: url(../assets/websites.jpg);
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .what_block:nth-child(2) {
        background: url(../assets/webapps.jpg);
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .what_block:nth-child(3) {
        background: url(../assets/crmsystem.jpg);
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .what_block:nth-child(4) {
        background: url(../assets/websupport.jpg);
        background-position: center;
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    .what_block img {
        width: 100%;
        object-fit: fill;
    }
    .what_block h2 {
        position: absolute;
        color: #fff;
        font-size: 32px;
        text-align: center;
        font-weight: 700;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .whats_sites_we_do {
        width: 1200px;
        display: flex;
        flex-direction: column;
        margin-top: 120px;
    }
    .zagolovok_what_sites_we_do {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
    }
    .zagolovok_what_sites_we_do h3 {
        font-size: 80px;
        font-weight: 900;
        line-height: 100%;
        color: rgba(56, 56, 56, 1);
    }
    .zagolovok_what_sites_we_do p {
        color: rgba(56, 56, 56, 1);
        font-size: 16px;
        text-align: center;
        font-weight: 600;
    }
    .categoryes_of_sites {
        margin-top: 32px;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: stretch;
        box-sizing: border-box;
        grid-auto-flow: column dense;
        gap: 16px;
    }
    .card_of_categoryes {
        max-width: calc(100% - 8px);
        min-height: 260px;
        display: grid;
        justify-items: start;
        box-sizing: border-box;
        border: 2px solid rgba(56, 56, 56, 1);
        padding: 24px 12px;
        border-radius: 32px;
        gap: 12px;
        position: relative;
        overflow: hidden;
        grid-row: span 1;
        grid-column: span 1;
        transition: all 200ms ease-in-out;
    }
    .active {
        grid-row: span 2;
        grid-column: span 2;
    }
    .card_of_categoryes h2 {
        font-size: 48px;
        font-weight: 900;
        text-align: center;
        color: rgba(56, 56, 56, 1);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        line-height: 100%;
    }
    .actieveposition {
        position: relative !important;
        /* top: 0;
        left: 0; */
    }
    .actieveopciti {
        opacity: 1 !important;
        height: auto !important;
    }
    .line {
        width: 100%;
        height: 2px;
        background: rgba(56, 56, 56, 1);
        opacity: 0;
        transition: opacity 200ms ease;
    }
    .h3desc {
        color: rgba(56, 56, 56, 1);
        font-weight: 300;
        font-size: 18px;
        opacity: 0;
        transition: opacity 200ms ease;
        height: 0;
        line-height: 100%;
    }
    .card_of_categoryes li {
        color: rgba(56, 56, 56, 1);
        font-weight: 700;
        line-height: 100%;
    }
    .card_of_categoryes ul {
        display: flex;
        flex-direction: column;
        gap: 12px;
        opacity: 0;
        height: 0;
    }
    .open_card {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4px 12px;
        color: rgba(56, 56, 56, 1);
        background: #fff;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 32px;
        border: 2px solid rgba(56, 56, 56, 1);
        font-weight: 500;
        z-index: 3;
    }
</style>