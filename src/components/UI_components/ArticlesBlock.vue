<template>
    <div class="articles_block_div">
        <div v-for="article in articles" :key="article.id" class="article">
            <div class="leftside_card">
                <img :src="article.miniphoto">
                <p>{{ article.title }}</p>
            </div>
            <div class="rightside_card">
                <h3>{{ article.title }}</h3>
                <p>{{ article.description }}</p>
                <button class="signupBtn" @click="this.$router.push('blog')">Подробнее</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            articles: {
                type: Array,
                requiered: true
            }
        }
        
    }
</script>

<style scoped>
.signupBtn {
    width: 120px;
    height: 40px;
    border-radius: 30px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: auto;
    align-self: center;
    padding-left: 20px;
    gap: 9px;
    color: white;
    background: linear-gradient(to right,rgb(128, 128, 255),rgb(183, 128, 255));
    position: relative;
    cursor: pointer;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.212);
    transform: translate(-300px);
    opacity: 0;
    transition: all 1s ease;
    }

    .arrow {
    position: absolute;
    right: 7.5px;
    background-color: rgb(255, 255, 255);
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    }

    .signupBtn:hover .arrow {
    animation: slide-in-left 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    @keyframes slide-in-left {
    0% {
        transform: translateX(-10px);
        opacity: 0;
    }

    100% {
        transform: translateX(0);
        opacity: 1;
    }
    }
    .articles_block_div {
        width: 1200px;
        display: flex;
        flex-direction: row;
        gap: 32px;
        row-gap: 32px;
    }
    .article {
        min-width: 300px;
        max-width: 600px;
        display: flex;
        flex-direction: row;
        height: 400px;
        flex: 1;
        /* border-radius: 32px; */
        box-sizing: border-box;
        /* overflow: hidden; */
        overflow-y: visible;
    }
    .leftside_card {
        width: 300px;
        height: 400px;
        background: yellowgreen;
        position: relative;
        padding: 32px;
        box-sizing: border-box;
        z-index: 2;
    }
    .leftside_card img {
        height: 360px;
        object-fit: cover;
        position: absolute;
        bottom: 50%;
        left: 50%;
        transform: translate(-50%, 50%);
        transition: all 1s ease;
        z-index: 0;
    }
    .leftside_card p {
        text-align: center;
        font-size: 24px;
        line-height: 100%;
        font-weight: 900;
        color: beige;
        text-shadow: 4px 4px rgb(59, 59, 59);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 1;
        transition: opacity 300ms ease;
    }
    .rightside_card {
        width: 300px;
        height: 400px;
        transform: translateX(-300px);
        z-index: 1;
        background: yellow;
        padding: 32px;
        box-sizing: border-box;
        transition: all 1s ease;
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: start;
        justify-content: center;
    }
    .rightside_card h3 {
        font-size: 20px;
        color: darkslategray;
        font-weight: 900;
        transform: translateX(-300px);
        opacity: 0;
        transition: all 1s ease;
    }
    .rightside_card p {
        font-size: 12px;
        font-weight: 300;
        color: black;
        transform: translateX(-300px);
        opacity: 0;
        transition: all 1s ease;
    }
    .article:hover .rightside_card {
        /* width: 300px;
        padding: 32px; */
        transform: translateX(0px);
    }
    .article:hover .rightside_card h3 {
        transform: translateX(0px);
        opacity: 1;
    }
    .article:hover .rightside_card p {
        transform: translateX(0px);
        opacity: 1;
    }
    .article:hover .signupBtn {
        transform: translateX(0px);
        opacity: 1;
    }
    .article:hover .leftside_card img {
        height: 420px;
        bottom: 0;
        transform: translate(-50%, 0);
        z-index: 999;
    }
    .article:hover .leftside_card p {
        opacity: 0;
    }
</style>