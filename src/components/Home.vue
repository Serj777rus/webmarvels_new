<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="main">
        <Header @openPop="openFunc"></Header>
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
                    <h2 class="card_h2" :class="{actieveposition: opencard == category.id}">{{ category.category }}</h2>
                    <div class="line" :class="{actieveopciti: opencard == category.id}"></div>
                    <h3 class="h3desc" :class="{actieveopciti: opencard == category.id}">{{ category.description }}</h3>
                    <ul :class="{actieveopciti: opencard == category.id}">
                        <li v-for="list in category.list" :key="list.id">{{ list.otl }}</li>
                    </ul>
                    <button class="cta" :class="{actieveposition: opencard == category.id}" @click="openCard(category.id)">
                        <span>Читать</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="crm_system_block">
            <img src="../assets/crmsystemblock.jpg">
            <div class="crm_system_text">
                <h3>CRM система</h3>
                <h4>В современном мире, где конкуренция на рынке постоянно растет, успешное ведение бизнеса невозможно без эффективного управления взаимодействием с клиентами. CRM (Customer Relationship Management) системы играют ключевую роль в этом процессе, объединяя маркетинг, продажи и обслуживание клиентов в единую платформу. Внедрение CRM на сайте и в бизнес-процессы позволяет значительно улучшить качество обслуживания, повысить эффективность работы и увеличить прибыль.</h4>
                <h5>Польза CRM систем:</h5>
                <ul>
                    <li>Централизованное управление данными</li>
                    <li>Автоматизация бизнес-процессов</li>
                    <li>Увеличение продаж и повышение конверсии</li>
                    <li>Улучшение качества обслуживания клиентов</li>
                    <li>Аналитика и отчетность</li>
                    <li>Интеграция с другими системами</li>
                </ul>
            </div>
        </div>
        <div class="crm_system_block">
            <div class="crm_system_text">
                <h3>CMS системы</h3>
                <h4>В эпоху цифровизации и постоянного развития интернет-технологий, успешное ведение бизнеса невозможно без современного и удобного веб-сайта. CMS (Content Management System) системы, или системы управления контентом, являются незаменимым инструментом для создания, редактирования и управления контентом на сайте. Внедрение CMS системы в бизнес-процессы позволяет значительно упростить управление сайтом, улучшить его функциональность и обеспечить эффективное взаимодействие с аудиторией.</h4>
                <h5>Польза CMS систем:</h5>
                <ul>
                    <li>Простота создания и редактирования контента</li>
                    <li>Гибкость и масштабируемость</li>
                    <li>Управление доступом и правами пользователей</li>
                    <li>SEO-оптимизация и улучшение видимости в поисковых системах</li>
                    <li>Поддержка мультиязычности</li>
                    <li>Аналитика и мониторинг эффективности</li>
                </ul>
            </div>
            <video autoplay loop muted src="../assets/Strapi_v4_teaser.mp4"></video>
        </div>
        <div class="gift_block">
            <Timer></Timer>
        </div>
        <div class="posts_div">
            <h3>Полезные статьи</h3>
            <Posts :posts="posts"></Posts>
        </div>
        <div class="prices">
            <img src="../assets/calculator.png">
            <div class="price_div">
                <p>Цены на разработку</p>
                <Price :price="price"></Price>
            </div>
        </div>
        <div class="projectss">
            <Projects :projects="projects"></Projects>
        </div>
        <div class="footer_main">
            <Footer></Footer>
        </div>
        <PopUp :isOpen="isOpenPopUp" @closePop="closePopUp"></PopUp>
    </div>
</template>

<script>
    import Footer from './UI_components/Footer.vue';
    import Header from './UI_components/Header.vue';
    import Input from './UI_components/Input.vue';
    import PopUp from './UI_components/PopUp.vue';
    import Posts from './UI_components/Posts.vue';
    import Price from './UI_components/Price.vue';
    import Projects from './UI_components/Projects.vue';
    import SendButton from './UI_components/SendButton.vue';
    import Timer from './UI_components/Timer.vue';
    export default {
        components: {
            Header,
            Input,
            SendButton,
            Posts,
            Price,
            Projects,
            Footer,
            Timer,
            PopUp
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
                opencard: null,
                posts: [
                    {
                        id: 1,
                        title: 'Веб-сайты как средство создания устойчивого личного бренда в эпоху цифрового хаоса',
                        description: 'Эта статья будет исследовать, как личный сайт может стать ключевым элементом создания устойчивого и узнаваемого личного бренда в условиях информационной перегрузки. В эпоху социальных сетей, где контент постоянно меняется и теряется в ленте, персональный веб-сайт позволяет создать стабильное и долговечное присутствие онлайн. Рассмотрим примеры, как влиятельные люди используют свои сайты для хранения архивов, ведения блогов и создания уникального пространства, которое подчеркивает их индивидуальность',
                        image: require('@/assets/posts/personal_brand.jpg')
                    },
                    {
                        id: 2,
                        title: 'Веб-сайт как инструмент управления репутацией и кризисного пиара',
                        description: 'Здесь рассматривается роль веб-сайта в управлении корпоративной и личной репутацией, особенно в условиях кризиса. В статье можно будет рассмотреть, как через сайт можно эффективно реагировать на негативные события, обеспечивая прозрачность и поддерживая доверие аудитории. Будут рассмотрены примеры компаний, которые успешно использовали свои сайты для кризисного пиара и минимизации репутационных потерь',
                        image: require('@/assets/posts/reputation.jpg')
                    },
                    {
                        id: 3,
                        title: 'Как веб-сайты помогают малому бизнесу конкурировать с гигантами рынка',
                        description: 'Эта статья исследует, как малые предприятия могут использовать свои веб-сайты для создания конкурентных преимуществ перед крупными игроками на рынке. Веб-сайт может стать платформой для внедрения инноваций, привлечения лояльной аудитории и создания уникального клиентского опыта. Рассмотрим конкретные примеры, как малые компании успешно конкурируют с гигантами, используя сайты для улучшения обслуживания клиентов, внедрения новых технологий и продвижения уникального контента',
                        image: require('@/assets/posts/mini_busines.jpg')
                    },
                    {
                        id: 4,
                        title: 'Эволюция веб-сайтов: от визитной карточки к полноценной цифровой экосистеме',
                        description: 'В этой статье рассматривается, как веб-сайты эволюционировали от простых визиток компаний до сложных цифровых экосистем, интегрированных с различными сервисами и платформами. Веб-сайты больше не ограничиваются статическим контентом, а предлагают интерактивные элементы, интеграцию с социальными сетями, системами электронной коммерции и аналитики. Это позволяет компаниям и брендам создавать уникальные экосистемы, которые охватывают все аспекты их онлайн-присутствия',
                        image: require('@/assets/posts/effective.jpg')
                    },
                    {
                        id: 5,
                        title: 'Веб-сайты как средство создания устойчивого личного бренда в эпоху цифрового хаоса',
                        description: 'Эта статья будет исследовать, как личный сайт может стать ключевым элементом создания устойчивого и узнаваемого личного бренда в условиях информационной перегрузки. В эпоху социальных сетей, где контент постоянно меняется и теряется в ленте, персональный веб-сайт позволяет создать стабильное и долговечное присутствие онлайн. Рассмотрим примеры, как влиятельные люди используют свои сайты для хранения архивов, ведения блогов и создания уникального пространства, которое подчеркивает их индивидуальность',
                        image: require('@/assets/posts/personal_brand.jpg')
                    },
                    {
                        id: 6,
                        title: 'Веб-сайт как инструмент управления репутацией и кризисного пиара',
                        description: 'Здесь рассматривается роль веб-сайта в управлении корпоративной и личной репутацией, особенно в условиях кризиса. В статье можно будет рассмотреть, как через сайт можно эффективно реагировать на негативные события, обеспечивая прозрачность и поддерживая доверие аудитории. Будут рассмотрены примеры компаний, которые успешно использовали свои сайты для кризисного пиара и минимизации репутационных потерь',
                        image: require('@/assets/posts/reputation.jpg')
                    },
                    {
                        id: 7,
                        title: 'Как веб-сайты помогают малому бизнесу конкурировать с гигантами рынка',
                        description: 'Эта статья исследует, как малые предприятия могут использовать свои веб-сайты для создания конкурентных преимуществ перед крупными игроками на рынке. Веб-сайт может стать платформой для внедрения инноваций, привлечения лояльной аудитории и создания уникального клиентского опыта. Рассмотрим конкретные примеры, как малые компании успешно конкурируют с гигантами, используя сайты для улучшения обслуживания клиентов, внедрения новых технологий и продвижения уникального контента',
                        image: require('@/assets/posts/mini_busines.jpg')
                    },
                    {
                        id: 8,
                        title: 'Эволюция веб-сайтов: от визитной карточки к полноценной цифровой экосистеме',
                        description: 'В этой статье рассматривается, как веб-сайты эволюционировали от простых визиток компаний до сложных цифровых экосистем, интегрированных с различными сервисами и платформами. Веб-сайты больше не ограничиваются статическим контентом, а предлагают интерактивные элементы, интеграцию с социальными сетями, системами электронной коммерции и аналитики. Это позволяет компаниям и брендам создавать уникальные экосистемы, которые охватывают все аспекты их онлайн-присутствия',
                        image: require('@/assets/posts/effective.jpg')
                    }
                ],
                price: [
                    {
                        id: 1,
                        cena: 'от 40 000',
                        category: 'Landing',
                        description: 'Продающий одностраничный сайт целью которого является доведение посетителя до заказа',
                        list: [
                            {
                                id: 1,
                                article: 'Разработка дизайна',
                            },
                            {
                                id: 2,
                                article: 'Верстка и публикация',
                            },
                            {
                                id: 3,
                                article: 'Настройка CMS',
                            }
                        ]
                    },
                    {
                        id: 2,
                        cena: 'от 80 000',
                        category: 'Многостраничный',
                        description: 'Корпоративный портал полностью раскрывающий информацию о компании и деятельности с понятной и удобной структурой',
                        list: [
                            {
                                id: 1,
                                article: 'Разработка дизайна',
                            },
                            {
                                id: 2,
                                article: 'Верстка и публикация',
                            },
                            {
                                id: 3,
                                article: 'Настройка CMS',
                            },
                            {
                                id: 4,
                                article: 'Подключение и интеграция CRM',
                            }
                        ]
                    },
                    {
                        id: 2,
                        cena: 'от 100 000',
                        category: 'Интернет магазин',
                        description: 'Полноценный интернет магазин, имеющий каталог товаров, корзину, модули оплаты и доставки, а так же интеграцию с CRM системой',
                        list: [
                            {
                                id: 1,
                                article: 'Разработка дизайна',
                            },
                            {
                                id: 2,
                                article: 'Верстка и публикация',
                            },
                            {
                                id: 3,
                                article: 'Настройка CMS',
                            },
                            {
                                id: 4,
                                article: 'Подключение и интеграция CRM',
                            },
                            {
                                id: 5,
                                article: 'Подключение базы данных',
                            }
                        ]
                    }
                ],
                projects: [
                    {
                        id: 1,
                        name: 'Проект "Ля Позитив"',
                        photo: require('@/assets/lapozitiv.png'),
                        description: 'Для этого проекта был разработан дизайн, сделана верстка на VUE JS, интегрирована CMS система управления контентом и подключена онлайн запись из CRM системы',
                        link: 'https://la-pozitiv.ru'
                    },
                    {
                        id: 2,
                        name: 'Проект "Message Spa Time"',
                        photo: require('@/assets/mst.png'),
                        description: 'Классический лендинг для мастера по массажу лица. Нами был разработан дизайн, сверстан сайт и подключена онлайн запись',
                        link: 'https://glfacemassage.ru'
                    }
                ],
                isOpenPopUp: false
            }
        },
        methods: {
            openCard(id) {
                if (this.opencard == id) {
                    this.opencard = null
                } else {
                    this.opencard = id
                }
            },
            openFunc() {
                this.isOpenPopUp = true;
            },
            closePopUp() {
                this.isOpenPopUp = false
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
        padding: 20px 0px 0px 0px;
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
    .utp:nth-child(1) {
        transform: rotate(6deg);
    }
    .utp:nth-child(2) {
        transform: rotate(-4deg);
    }
    .utp:nth-child(3) {
        transform: rotate(-6deg);
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
        font-size: 64px;
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
        /* border: 2px solid rgba(56, 56, 56, 1); */
        padding: 24px 12px;
        border-radius: 32px;
        gap: 12px;
        position: relative;
        overflow: hidden;
        grid-row: span 1;
        grid-column: span 1;
        transition: all 200ms ease-in-out;
        /* background: #efeeee; */
        box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, .3);
    }
    .card_of_categoryes:nth-child(1) {
        background: url(../assets/gradient1.svg);
        background-size: 100% cover;
        background-position: center;
    }
    .card_of_categoryes:nth-child(2) {
        background: url(../assets/gradient2.svg);
        background-size: 100% cover;
        background-position: center;
    }
    .card_of_categoryes:nth-child(3) {
        background: url(../assets/gradient3.svg);
        background-size: 100% cover;
        background-position: center;
    }
    .active {
        grid-row: span 2;
        grid-column: span 2;
        background: #efeeee !important;
    }
    .card_h2 {
        font-size: 36px;
        font-weight: 900;
        text-align: center;
        color: beige !important;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        line-height: 100%;
    }
    .actieveposition {
        position: relative !important;
        color: rgba(56, 56, 56, 1) !important;
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
    .cta {
    position: relative;
    margin: auto;
    padding: 12px 18px;
    transition: all 0.2s ease;
    border: none;
    background: none;
    cursor: pointer;
    }

    .cta:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: #b1dae7;
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
    }

    .cta span {
    position: relative;
    font-family: "Ubuntu", sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #234567;
    }

    .cta svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #234567;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
    }

    .cta:hover:before {
    width: 100%;
    background: #b1dae7;
    }

    .cta:hover svg {
    transform: translateX(0);
    }

    .cta:active {
    transform: scale(0.95);
    }
    .crm_system_block {
        width: 1200px;
        margin-top: 120px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 32px;
        box-sizing: border-box;
    }
    .crm_system_block img {
        width: calc(50% - 16px);
        object-fit: cover;
        border-radius: 32px;
        box-sizing: border-box;
        box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, .3);
    }
    .crm_system_block video {
        width: calc(50% - 16px);
        object-fit: cover;
        border-radius: 32px;
        box-sizing: border-box;
        box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, .3);
    }
    .crm_system_text {
        width: calc(50% - 16px);
        display: flex;
        flex-direction: column;
        gap: 16px;
        color: rgba(56, 56, 56, 1);
        box-sizing: border-box;
        padding: 24px;
        background: #efeeee;
        border-radius: 32px;
        box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, .3);
    }
    .crm_system_text h3 {
        font-size: 48px;
        font-weight: 900;
        color: rgba(56, 56, 56, 1);
    }
    .crm_system_text h5 {
        font-weight: 700;
    }
    .crm_system_text li {
        font-weight: 900;
        line-height: 100%;
    }
    .crm_system_text ul {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    .gift_block {
        margin-top: 120px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(56, 56, 56, 1);
        padding: 32px 0px;
    }
    .posts_div {
        width: 1200px;
        display: flex;
        flex-direction: column;
        gap: 32px;
        margin-top: 120px;
    }
    .posts_div h3 {
        text-align: center;
        font-size: 64px;
        font-weight: 900;
        color: rgba(56, 56, 56, 1);
    }
    .prices {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 120px;
        position: relative;
        padding: 60px 0px;
        background: linear-gradient(360deg, rgba(165, 179,216, 1), rgba(230, 226, 225, 1));
        box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, .3);
    }
    .prices img {
        width: 400px;
        object-fit: cover;
        position: absolute;
        bottom: 10%;
        left: 10%;
    }
    .price_div {
        width: 1200px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
    .price_div p {
        color: rgba(56, 56, 56, 1);
        text-align: center;
        font-size: 64px;
        font-weight: 900;
    }
    .projectss {
        width: 1200px;
        display: flex;
        margin-top: 120px;
    }
    .footer_main {
        width: 100%;
        padding: 60px 0px;
        background: rgb(56, 56, 56);
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: bottom center;
        margin-top: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>