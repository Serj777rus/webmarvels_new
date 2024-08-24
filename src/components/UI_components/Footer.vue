<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="footer">
        <div class="left_side_footer">
            <img src="@/assets/3d-shapes-glowing-with-bright-holographic-colors.png">
        </div>
        <div class="center_footer">
            <p>Начнем работу над вашим сайтом уже<br><span>СЕГОДНЯ!</span></p>
            <h4>Оставьте заявку или свяжитесь в соц сетях</h4>
            <div class="socials">
                <a href="https://www.instagram.com/sergey_webdevelope?igsh=MTV3ZGt4enhkMGh5aw%3D%3D&utm_source=qr"><img src="@/assets/insta.png"></a>
                <a href="https:/t.me/Gorbachev_S_V"><img src="@/assets/vkfooter.png"></a>
                <a href="/t.me/Gorbachev_S_V"><img src="@/assets/telegramm.png"></a>
                <a href="https://wa.me/79114682801"><img src="@/assets/whatsappfooter.png"></a>
            </div>
        </div>
        <div class="right_side_footer">
            <img src="@/assets/forform.png">
            <form @submit.prevent="sendForm">
                <Input v-model="form.name" label="Имя"></Input>
                <Input v-model="form.phone" label="Телефон"></Input>
                <SendButton :disabled="!form.name || !form.phone" type="submit">Отправить</SendButton>
                <div>{{ formMessage }}</div>
            </form>
        </div>
    </div>
</template>

<script>
import Input from './Input.vue';
import SendButton from './SendButton.vue';
import axios from 'axios';
    export default {
        components: {
            Input,
            SendButton
        },
        data() {
            return {
                form: {
                    name: '',
                    phone: ''
                },
                formMessage: ''
            }
        },
        methods: {
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
        }
        
    }
</script>

<style scoped>
.footer {
    width: 1200px;
    display: flex;
    flex-direction: row;
    gap: 32px;
}
.left_side_footer {
    width: calc(33% - 21px);
}
.left_side_footer img {
    width: 100%;
    object-fit: cover;
    filter: drop-shadow(2px 2px 8px rgba(255,255,255, .3))
}
.center_footer {
    width: calc(33% - 21px);
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-self: center;
}
.center_footer p {
    font-weight: 500;
    text-align: center;
}
.center_footer p span {
    font-size: 20px;
    font-weight: 700;
}
.center_footer h4 {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
}
.socials {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
}
.socials img:hover {
    transform: scale(1.2);
}
.socials img:not(:hover) {
    filter: brightness(50%);
}
.socials img {
    width: 48px;
    object-fit: cover;
    transition: all 200ms ease;
}
.right_side_footer {
    width: calc(33% - 21px);
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: end;
    position: relative;
    box-sizing: border-box;
}
.right_side_footer img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}
.right_side_footer form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    z-index: 2;
    padding: 48px 24px;
    border-radius: 24px;
    background: rgba(255,255,255, .5);
    backdrop-filter: blur(4px);
    box-sizing: border-box;
}
@media all and (max-width: 440px) {
    .footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.left_side_footer {
    width: calc(33% - 21px);
    display: none;
}
.left_side_footer img {
    width: 100%;
    object-fit: cover;
    filter: drop-shadow(2px 2px 8px rgba(255,255,255, .3))
}
.center_footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-self: center;
}
.center_footer p {
    font-weight: 500;
    text-align: center;
}
.center_footer p span {
    font-size: 20px;
    font-weight: 700;
}
.center_footer h4 {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
}
.socials {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    box-sizing: border-box;
}
.socials img:hover {
    transform: scale(1.2);
}
.socials img:not(:hover) {
    filter: brightness(50%);
}
.socials img {
    width: 48px;
    object-fit: cover;
    transition: all 200ms ease;
}
.right_side_footer {
    width: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-sizing: border-box;
}
.right_side_footer img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
}
.right_side_footer form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    z-index: 2;
    padding: 48px 24px;
    border-radius: 24px;
    background: rgba(255,255,255, .6);
    backdrop-filter: blur(4px);
    box-sizing: border-box;
}
}
</style>