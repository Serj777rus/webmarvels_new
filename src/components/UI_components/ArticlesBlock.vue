<template>
    <div class="articles_block_div">
        <div v-for="article in articles" :key="article.id" class="article">
            <div class="leftside_card">
                <img :src="article.miniphoto">
                <h3>{{ article.title }}</h3>
            </div>
            <div class="rightside_card">
                <p>{{ article.article }}</p>
                <button class="signupBtn" @click="navigateToBlog(article)">Подробнее</button>
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
        },
        methods: {
            navigateToBlog(article) {
                localStorage.setItem('article', JSON.stringify(article));
                console.log(localStorage.getItem('article'))
                this.$router.push({name: 'blog'});
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
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .article {
        max-width: 360px;
        max-height: 200px;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.5);
        overflow: hidden;
        border-radius: 12px;
        transition: all 1s ease;
    }
    .leftside_card {
        position: relative;
        display: flex;
        width: 360px;
        height: 200px;
        z-index: 2;
    }
    .leftside_card img {
        width: 100%;
        object-fit: cover;
        filter: brightness(60%);
        border-radius: 12px;
        transition: all 1s ease;
    }
    .leftside_card h3 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 20px;
        text-align: center;
        font-weight: 900;
    }
    .rightside_card {
        display: flex;
        width: 360px;
        max-height: 0px;
        transform: translateY(-200px);
        /* background: beige; */
        transition: all 1s ease;
        z-index: 1;
        flex-direction: column;
        gap: 12px;
        box-sizing: border-box;
    }
    .rightside_card p {
        padding-left: 16px;
        border-left: 4px solid red;
    }
    .article:hover .rightside_card {
        transform: translateY(0);
        max-height: 200px;
        padding: 12px;
    }
    .article:hover .leftside_card img {
        border-radius: 12px 12px 0px 0px;
    }
    .rightside_card p {
        color: rgb(59, 59, 59);
    }
    .article:hover {
        max-height: 400px;
    }
</style>