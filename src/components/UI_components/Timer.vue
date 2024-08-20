<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="counter">
        <div class="counter_left">
            <div class="count_with_span">
                <div class="days">
                    <p class="pdays" :class="{ active: date.seconds > newDate.days }">{{ date.days }}</p>
                    <p class="pdays" :class="{ active: date.seconds > newDate.days }">{{ newDate.days }}</p>
                </div>
                <span>Дней</span>
            </div>
            <div class="hours">
                <p class="phours" :class="{ active: date.seconds > newDate.hours }">{{ date.hours }}</p>
                <p class="phours" :class="{ active: date.seconds > newDate.hours }">{{ newDate.hours }}</p>
            </div>
            <div class="minutes">
                <p class="pminutes" :class="{ active: date.seconds > newDate.minutes }">{{ date.minutes }}</p>
                <p class="pminutes" :class="{ active: date.seconds > newDate.minutes }">{{ newDate.minutes }}</p>
            </div>
            <div class="seconds">
                <p class="pseconds" :class="{ active: date.seconds > newDate.seconds }">{{ date.seconds}}</p>
                <p class="pseconds2" :class="{ active: date.seconds > newDate.seconds }">{{ newDate.seconds }}</p>
            </div>
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
                let minute;
                if(allDate.getMinutes() >= 0 && allDate.getMinutes() <= 9) {
                    minute = '0' + allDate.getMinutes()
                } else {
                    minute = allDate.getMinutes();
                }
                this.newDate = {
                    days: (31 - allDate.getDate()),
                    hours: (24 - allDate.getHours()),
                    minutes: 60 - minute,
                    seconds: (60 - allDate.getSeconds())
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
                // console.log(this.date)
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
}
.counter_left {
    width: calc(50% - 16px);
    display: flex;
    flex-direction: row;
    gap: 12px;
}
.count_with_span {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}
.seconds {
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 32px;
    overflow-y: hidden;
    position: relative;
}
.minutes {
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 24px;
    overflow-y: hidden;
    position: relative;
}
.hours {
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 24px;
    overflow-y: hidden;
    position: relative;
}
.days {
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 48px;
    overflow-y: hidden;
    position: relative;
}
span {
    font-size: 48px;
    font-weight: 900;
    color: red;
}
.pseconds {
    font-size: 24px;
    font-weight: 700;
    line-height: 100%;
    color: red;
    transform: translateY(0);
}
.pseconds2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 100%;
    color: red;
    transform: translateY(34px);
}
.pminutes {
    font-size: 24px;
    font-weight: 700;
    line-height: 100%;
    color: red;
    transform: translateY(0);
}
.pminutes2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 100%;
    color: red;
    transform: translateY(34px);
}
.phours {
    font-size: 24px;
    font-weight: 700;
    line-height: 100%;
    color: red;
    transform: translateY(0);
}
.phours2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 100%;
    color: red;
    transform: translateY(34px);
}
.pdays {
    font-size: 48px;
    font-weight: 700;
    line-height: 100%;
    color: red;
    transform: translateY(0);
}
.pdays2 {
    font-size: 48px;
    font-weight: 700;
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
</style>