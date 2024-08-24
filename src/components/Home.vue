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
                <form @submit.prevent="sendForm">
                    <Input v-model="form.name" label="Имя"></Input>
                    <Input v-model="form.phone" label="Телефон"></Input>
                    <SendButton :disabled="!form.name || !form.phone" type="submit"><slot>Отправить</slot></SendButton>
                </form>
                <div>{{ formMessage }}</div>
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
                    <h2 class="card_h2" :class="{actieveposition: opencard == category.id}">{{ category.attributes.category }}</h2>
                    <div class="line" :class="{actieveopciti: opencard == category.id}"></div>
                    <h3 class="h3desc" :class="{actieveopciti: opencard == category.id}">{{ category.attributes.description }}</h3>
                    <ul :class="{actieveopciti: opencard == category.id}">
                        <li v-for="list in category.attributes.list" :key="list.id">{{ list.otl }}</li>
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
            <Timer @openPop="openFunc"></Timer>
        </div>
        <div class="posts_div">
            <h3>Полезные статьи</h3>
            <Posts :posts="posts"></Posts>
        </div>
        <div class="prices">
            <img src="../assets/calculator.png">
            <div class="price_div">
                <p>Цены на разработку</p>
                <Price @openPop="openFunc" :price="price"></Price>
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
    import axios from 'axios';
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
                categorySites: [],
                opencard: null,
                posts: [],
                price: [],
                projects: [],
                isOpenPopUp: false,
                formMessage: ''
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
            },
            async getContent() {
                try {
                    const response = await axios.get('http://192.168.0.106:3000/getcontent');
                    if (response.status == 200) {
                        this.categorySites = response.data.categorySites.data;
                        this.posts = response.data.posts.data;
                        this.price = response.data.price.data;
                        this.projects = response.data.projects.data;
                        console.log(response.data)
                    }
                } catch(error) {
                    console.log(error);
                }
            },
            async sendForm() {
                try {
                    const response = await axios.post('https://localhost:3000/sendform', this.form);
                    if (response.status == 200) {
                        this.formMessage = response.data.message;
                        setTimeout(() => {
                            this.formMessage = '',
                            this.form.name = '',
                            this.form.phone = ''
                        }, 1500)
                    }
                } catch(error) {
                    console.log(error)
                }
            }
        },
        async mounted() {
            await this.getContent();
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
    @media all and (max-width: 440px) {
        .main {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
    }
    .general_block {
        width: 100%;
        display: flex;
        flex-direction: column;
        /* padding: 40px 0px; */
        /* justify-content: space-between; */
        gap: 16px;
        box-sizing: border-box;
        padding: 40px 10px;
    }
    .left_side_geberal_div {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        box-sizing: border-box;
    }
    .left_side_geberal_div h2 {
        font-size: 32px;
        line-height: 110%;
        font-weight: 900;
        background: linear-gradient(#042454, #1f3577, #3d459c, #5f55c0, #8663e3);
        padding: 24px;
        border-radius: 32px;
        box-shadow: 2px 2px 8px 0px #042454;
        text-align: center;
    }
    .utps {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 4px;
    }
    .utp {
        width: calc(32% - 2px);
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
        transform: rotate(0deg);
    }
    .utp:nth-child(2) {
        transform: rotate(0deg);
    }
    .utp:nth-child(3) {
        transform: rotate(0deg);
    }
    .utp span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 16px;
        font-weight: 700;
    }
    .utp img {
        width: 100%;
        object-fit: cover;
    }
    .right_side_gebneral_div {
        width: 40%;
        display: none;
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
        padding: 32px 10px;
        background: rgb(56, 56, 56);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 48px;
        box-sizing: border-box;

    }
    .form_mail_block {
        width: 100%;
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
        font-size: 24px;
        font-weight: 700;
        line-height: 100%;
    }
    .form_mail_block_text span {
        font-size: 12px;
        line-height: 100%;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
    }
    .what_we_do {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin-top: 80px;
        gap: 48px;
        padding: 24px 10px;
        box-sizing: border-box;
    }
    .left_side_what_we_do {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .left_side_what_we_do h3 {
        font-size: 64px;
        font-weight: 900;
        color: rgba(56, 56, 56, 1);
        text-align: center;
    }
    .right_side_what_we_do {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        box-sizing: border-box;
        gap: 12px;
    }
    .what_block {
        width: calc(50% - 6px);
        height: 160px;
        position: relative;
        border-radius: 24px;
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
    .what_block h2 {
        position: absolute;
        color: #fff;
        font-size: 24px;
        text-align: center;
        font-weight: 700;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .whats_sites_we_do {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 120px;
        box-sizing: border-box;
        padding: 0px 10px;
    }
    .zagolovok_what_sites_we_do {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        align-items: center;
    }
    .zagolovok_what_sites_we_do h3 {
        width: 100%;
        font-size: 64px;
        font-weight: 900;
        line-height: 100%;
        color: rgba(56, 56, 56, 1);
        text-align: center;
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
        display: flex;
        flex-direction: column;
        /* display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(1, 1fr); */
        justify-items: stretch;
        box-sizing: border-box;
        /* grid-auto-flow: column dense; */
        gap: 16px;
        align-items: center;
    }
    .card_of_categoryes {
        width: 100%;
        min-height: 240px;
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
        grid-row: span 1;
        grid-column: span 0;
        background: #efeeee !important;
    }
    .card_h2 {
        font-size: 32px;
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
        width: 100%;
        margin-top: 120px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 16px;
        box-sizing: border-box;
        padding: 0px 10px;
    }
    .crm_system_block img {
        width: 100%;
        object-fit: cover;
        border-radius: 24px;
        box-sizing: border-box;
        box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, .3);
    }
    .crm_system_block video {
        width: 100%;
        object-fit: cover;
        border-radius: 24px;
        box-sizing: border-box;
        box-shadow: 2px 2px 12px 0px rgba(0, 0, 0, .3);
    }
    .crm_system_text {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        color: rgba(56, 56, 56, 1);
        box-sizing: border-box;
        padding: 24px;
        background: #efeeee;
        border-radius: 24px;
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
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 32px;
        margin-top: 120px;
        box-sizing: border-box;
        padding: 0px 10px;
    }
    .posts_div h3 {
        text-align: center;
        font-size: 48px;
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
        padding: 60px 10px;
        background: linear-gradient(360deg, rgba(165, 179,216, 1), rgba(230, 226, 225, 1));
        box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, .3);
        box-sizing: border-box;
    }
    .prices img {
        width: 370px;
        object-fit: cover;
        position: absolute;
        bottom: 50%;
        left: 50%;
        transform: translate(-50%, 50%);
    }
    .price_div {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
    .price_div p {
        color: rgba(56, 56, 56, 1);
        text-align: center;
        font-size: 48px;
        font-weight: 900;
    }
    .projectss {
        width: 100%;
        display: flex;
        margin-top: 120px;
        box-sizing: border-box;
        padding: 0px 10px;
    }
    .footer_main {
        width: 100%;
        padding: 60px 10px;
        background: rgb(56, 56, 56);
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: bottom center;
        margin-top: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }
    }
</style>