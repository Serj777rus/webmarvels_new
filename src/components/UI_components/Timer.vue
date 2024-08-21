<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="counter">
        <div class="left_text_count_img">
            <div class="counter_left_cifr_text">
                <div class="counter_text">
                    <p>До конца акции<br>осталось:</p>
                </div>
                <div class="count_cifr">
                    <div class="count_with_span">
                        <div class="days">
                            <p class="pdays" :class="{ active: date.seconds > newDate.days }">{{ date.days }}</p>
                            <p class="pdays" :class="{ active: date.seconds > newDate.days }">{{ newDate.days }}</p>
                        </div>
                        <span>Дней</span>
                    </div>
                    <div class="count_with_span">
                        <div class="hours">
                            <p class="phours" :class="{ active: date.seconds > newDate.hours }">{{ date.hours }}</p>
                            <p class="phours" :class="{ active: date.seconds > newDate.hours }">{{ newDate.hours }}</p>
                        </div>
                        <span>Часов</span>
                    </div>
                    <div class="count_with_span">
                        <div class="minutes">
                            <p class="pminutes" :class="{ active: date.seconds > newDate.minutes }">{{ date.minutes }}</p>
                            <p class="pminutes" :class="{ active: date.seconds > newDate.minutes }">{{ newDate.minutes }}</p>
                        </div>
                        <span>Минут</span>
                    </div>
                    <div class="count_with_span">
                        <div class="seconds">
                            <p class="pseconds" :class="{ active: date.seconds > newDate.seconds }">{{ date.seconds}}</p>
                            <p class="pseconds2" :class="{ active: date.seconds > newDate.seconds }">{{ newDate.seconds }}</p>
                        </div>
                        <span>Секунд</span>
                    </div>
                </div>
            </div>
            <img src="@/assets/clock.png">
        </div>
        <div class="couter_right">
            <img src="@/assets/giftbox.png">
            <p>Закажите разработку сайта до 31 августа и получите скидку<br><span>20%</span></p>
            <button>Заказать</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                date: {
                    days: '',
                    hours: '',
                    minutes: '',
                    seconds: ''
                },
                newDate: {
                    days: '',
                    hours: '',
                    minutes: '',
                    seconds: ''
                },
            }
        },
        methods: {
            getDate() {
                const allDate = new Date();
                let minutes = allDate.getMinutes();
                let minute;
                let seconds = allDate.getSeconds();
                let second;
                let hours = allDate.getHours();
                let hour;
                let days = allDate.getDate();
                let day;
                if(minutes >= 0 && minutes <= 9) {
                    minute = '0' + minutes
                } else {
                    minute = minutes;
                }
                if(seconds >= 0 && seconds <= 9) {
                    second = '0' + seconds
                } else {
                    second = seconds;
                }
                if(hours >= 0 && hours <= 9) {
                    hour = '0' + hours
                } else {
                    hour = hours;
                }
                if(days >= 0 && days <= 9) {
                    day = '0' + days
                } else {
                    day = days;
                }
                this.newDate = {
                    days: (31 - day - 1),
                    hours: (24 - hour - 1),
                    minutes: 60 - minute - 1,
                    seconds: (60 - second - 1)
                }
                if (this.date !== this.newDate) {
                    setTimeout(() => {
                        this.date = this.newDate
                    }, 500)
                }
            }
        },
        mounted() {
            const allDate = new Date();
            this.date = {
                days: (31 - allDate.getDate()),
                hours: (24 - allDate.getHours()),
                minutes: (60 - allDate.getMinutes()),
                seconds: (60 - allDate.getSeconds())
            }
            setInterval(() => {
                this.getDate();
            }, 1000)
        }
    }
</script>

<style scoped>
.counter {
    width: 1200px;
    display: flex;
    flex-direction: row;
    gap: 32px;
    z-index: 2;
}
.left_text_count_img {
    width: calc(50% - 16px);
    display: flex;
    justify-content: center;
    align-items: center;
    /* border-radius: 32px; */
    /* background: rgba(255, 255, 255, .5);
    backdrop-filter: blur(6px); */
    position: relative;
    /* padding: 48px 12px; */
}
.counter_left_cifr_text {
    width: 100%;
    background: rgba(255, 255, 255, .5);
    backdrop-filter: blur(2px);
    padding: 48px 12px;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 32px;
    z-index: 3;
}
.count_cifr {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 16px;
    justify-content: center;
    z-index: 3;
}
.counter_text {
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 3;
}
.counter_text p {
    text-align: center;
    font-size: 32px;
    line-height: 100%;
    color: rgba(56, 56, 56, 1);
    font-weight: 700;
    z-index: 3;
}
.left_text_count_img img {
    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-20%, -50%) rotate(12deg);
    z-index: 1;
}
.count_with_span {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    z-index: 2;
}
.seconds {
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 64px;
    overflow-y: hidden;
    position: relative;
}
.minutes {
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 64px;
    overflow-y: hidden;
    position: relative;
}
.hours {
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 64px;
    overflow-y: hidden;
    position: relative;
}
.days {
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 64px;
    overflow-y: hidden;
    position: relative;
}
span {
    font-size: 32px;
    font-weight: 500;
    color: red;
}
.pseconds {
    font-size: 64px;
    font-weight: 900;
    line-height: 100%;
    color: red;
    transform: translateY(0);
}
.pseconds2 {
    font-size: 64px;
    font-weight: 900;
    line-height: 100%;
    color: red;
    transform: translateY(34px);
}
.pminutes {
    font-size: 64px;
    font-weight: 900;
    line-height: 100%;
    color: red;
    transform: translateY(0);
}
.pminutes2 {
    font-size: 64px;
    font-weight: 900;
    line-height: 100%;
    color: red;
    transform: translateY(34px);
}
.phours {
    font-size: 64px;
    font-weight: 900;
    line-height: 100%;
    color: red;
    transform: translateY(0);
}
.phours2 {
    font-size: 64px;
    font-weight: 900;
    line-height: 100%;
    color: red;
    transform: translateY(34px);
}
.pdays {
    font-size: 64px;
    font-weight: 900;
    line-height: 100%;
    color: red;
    transform: translateY(0);
}
.pdays2 {
    font-size: 64px;
    font-weight: 900;
    line-height: 100%;
    color: red;
    transform: translateY(34px);
}
.active {
    animation: fadeout 1000ms ease;
}
@keyframes fadeout {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-32px);
    }
}
@keyframes fadeoin {
    0% {
        transform: translateY(32px);
    }
    100% {
        transform: translateY(0);
    }
}
.active2 {
    animation: fadein 1000ms ease;
}
.couter_right {
    width: calc(50% - 16px);
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
}
.couter_right img {
    width: 50%;
    object-fit: cover;
}
.couter_right p {
    font-size: 24px;
    font-weight: 700;
    line-height: 100%;
    text-align: center;
    color: beige;
}
.couter_right p span {
    font-size: 48px;
    line-height: 100%;
    font-weight: 900;
    color: red;
}
.couter_right button {
    padding: 12px 64px;
    background: rgba(134, 126, 157, 1);
    border: none;
    border-radius: 32px;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
}
.couter_right button:hover {
    background: rgba(186, 106, 216, 1);
}
</style>