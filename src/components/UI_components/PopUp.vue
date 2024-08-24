<template>
    <div class="popup_main" v-if="isOpen">
        <div class="popup_div">
            <form @submit.prevent="sendForm">
                <div class="form_text">
                    <p>Оставьте заявку<br>и мы свяжемся с Вами для консультации</p>
                </div>
                <div class="inputs_pop">
                    <label for="name">Имя</label>
                    <input v-model="popform.name" type="text" required name="name">
                </div>
                <div class="inputs_pop">
                    <label for="phone">Телефон</label>
                    <input v-model="popform.phone" type="text" required name="phone">
                </div>
                <button class="pop_btn" :disabled="!popform.name || !popform.phone">Отправить</button>
                <div class="closepop" @click="this.$emit('closePop')">&#10060;</div>
                <div style="color: green;">{{ formMessage }}</div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    export default {
        props: {
            isOpen: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                popform: {
                    name: '',
                    phone: ''
                },
                formMessage: ''
            }
        },
        methods: {
            async sendForm() {
                try {
                    const response = await axios.post('https://localhost:3000/sendform', this.popform);
                    if (response.status == 200) {
                        this.formMessage = response.data.message;
                        setTimeout(() => {
                            this.formMessage = '',
                            this.popform.name = '',
                            this.popform.phone = '',
                            this.$emit('closePop')
                        }, 1500)
                    }
                } catch(error) {
                    console.log(error)
                }
            }
        }
    }
</script>

<style scoped>
    .popup_main {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .9);
        z-index: 999;
    }
    .popup_div {
        width: 400px;
        /* height: 600px; */
        border-radius: 32px;
        background: linear-gradient(45deg, #042454, #1f3577, #3d459c, #5f55c0, #8663e3);
        padding: 4px;
        box-sizing: border-box;
    }
    .popup_div form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: beige;
        border-radius: 28px;
        padding: 48px 24px;
        box-sizing: border-box;
        position: relative;
    }
    .form_text {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 64px;
    }
    .form_text p {
        text-align: center;
        font-size: 24px;
        font-weight: 900;
        color: rgba(56, 56, 56, 1);
        line-height: 100%;
    }
    .inputs_pop {
        width: 100%;
        box-sizing: border-box;
        position: relative;
        box-sizing: border-box;
        margin-top: 16px;
    }
    .inputs_pop input {
        width: 100%;
        padding: 12px;
        border: 2px solid rgba(56, 56, 56, 1);
        border-radius: 4px;
        box-sizing: border-box;
        background: transparent;
    }
    .inputs_pop label {
        font-size: 16px;
        font-weight: 500;
        color: rgba(56, 56, 56, 1);
        position: absolute;
        top: -12px;
        left: 12px;
        padding: 2px 4px;
        background: beige;
    }
    .pop_btn {
        margin-top: 32px;
        box-sizing: border-box;
        padding: 12px 48px;
        border: none;
        border-radius: 32px;
        color: beige;
        background: rgba(56, 56, 56, 1);
        cursor: pointer;
    }
    .closepop {
        cursor: pointer;
        position: absolute;
        top: 12px;
        right: 24px;
        color: rgba(56, 56, 56, 1);
    }
</style>