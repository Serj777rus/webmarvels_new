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
                <img src="@/assets/insta.png">
                <img src="@/assets/vkfooter.png">
                <img src="@/assets/telegramm.png">
                <img src="@/assets/whatsappfooter.png">
            </div>
        </div>
        <div class="right_side_footer">
            <img src="@/assets/forform.png">
            <form @submit.prevent="sendForm">
                <Input v-model="form.name" label="Имя"></Input>
                <Input v-model="form.phone" label="Телефон"></Input>
                <SendButton type="submit">Отправить</SendButton>
            </form>
        </div>
    </div>
</template>

<script>
import Input from './Input.vue';
import SendButton from './SendButton.vue';

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
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    z-index: 2;
    padding: 48px 24px;
    border-radius: 24px;
    background: rgba(255,255,255, .5);
    backdrop-filter: blur(4px);
}
</style>