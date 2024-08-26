<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="posts" ref="postsContainer">
        <div class="post_card" v-for="post in posts" :key="post.id" ref="postCard">
            <div class="image">
                <img :src='`${imageUrl}${post.attributes.image.data.attributes.url}`'>
            </div>
            <div class="text">
                <h3>{{ post.attributes.title }}</h3>
                <h4 :class="{ activeh: openpost == post.id }">{{ post.attributes.description }}</h4>
            </div>
            <button class="signupBtn" @click="openPost(post.id)">
                Прочитать
                <span class="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" fill="rgb(183, 128, 255)"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg>
                </span>
            </button>
        </div>
    </div>
    <div class="button-container">
        <button class="button-3d" @click="prevPost">
            <div class="button-top">
            <span class="material-icons">❮</span>
            </div>
            <div class="button-bottom"></div>
            <div class="button-base"></div>
        </button>
        <button class="button-3d" @click="nextPost">
            <div class="button-top">
            <span class="material-icons">❯</span>
            </div>
            <div class="button-bottom"></div>
            <div class="button-base"></div>
        </button>
    </div>
</template>

<script>
    export default {
        props: {
            posts: {
                type: Array,
                required: ''
            }
        },
        data() {
            return {
                openpost: '',
                currentIndex: 0,
                imageUrl: 'https://strapi.webmarvels.ru'
            }
        },
        methods: {
            openPost(id) {
                if (this.openpost == id) {
                    this.openpost = ''
                } else {
                    this.openpost = id
                }
            },
            nextPost() {
                const container = this.$refs.postsContainer;
                const block = this.$refs.postCard[0]; // Получаем первый блок для вычисления ширины

                if (this.currentIndex < this.posts.length - 1) {
                    this.currentIndex++;
                    container.scrollLeft += block.clientWidth + 16; // 16 - это значение gap
                } else {
                    this.currentIndex = 0;
                    container.scrollTo({ left: 0, behavior: 'smooth' });
                }
            },
                prevPost() {
                const container = this.$refs.postsContainer;
                const block = this.$refs.postCard[0];

                if (this.currentIndex > 0) {
                    this.currentIndex--;
                    container.scrollLeft -= block.clientWidth + 16;
                } else {
                    this.currentIndex = 0;
                    container.scrollTo({left: container.scrollWidth, behavior: 'smooth'})
                }
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
    .posts {
        width: 1200px;
        display: flex;
        flex-direction: row;
        gap: 16px;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        box-sizing: border-box;
    }
    .post_card {
        min-width: 300px;
        height: 100%;
        border-radius: 24px;
        box-sizing: border-box;
        background: rgb(56, 56, 56);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 12px 12px;
        scroll-snap-align: start;
    }
    .image {
        width: 100%;
        box-shadow: inset 0px 12px 8px 0px rgba(56, 56, 56, 1);
    }
    .image img {
        width: 100%;
        height: 160px;
        object-fit: cover;
        border-radius: 12px 12px 0px 0px;
    }
    .text {
        display: flex;
        height: auto;
        flex-direction: column;
        gap: 12px;
    }
    .text h3 {
        font-size: 18px;
        font-weight: 700;
    }
    .text h4 {
        font-size: 14px;
        font-weight: 300;
        line-height: 110%;
        height: 0;
        opacity: 0;
        transition: 200ms all ease;
    }
    .activeh {
        height: auto !important;
        opacity: 1 !important;
    }
    .button-container {
        width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  justify-self: center;
  margin: 20px;
}
    .button-3d {
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    border-width: 0;
    padding: 0 8px;
    min-width: 4em;
    min-height: 4em;
    box-sizing: border-box;
    background: transparent;
    font: inherit;
    cursor: pointer;
    margin: 10px;
    border-radius: 20px;
    }

    .button-top {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    padding: 8px 16px;
    transform: translateY(0);
    color: #fff;
    background-image: linear-gradient(145deg, #6a11cb, #2575fc);
    text-shadow: 0 -1px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    transition: transform 0.3s, border-radius 0.3s, background 10s;
    }

    .button-3d:active .button-top {
    border-radius: 10px 10px 8px 8px / 8px;
    transform: translateY(2px);
    background-image: linear-gradient(145deg, #2575fc, #6a11cb);
    }

    .button-bottom {
    position: absolute;
    z-index: 1;
    bottom: 4px;
    left: 4px;
    border-radius: 20px;
    padding-top: 6px;
    width: calc(100% - 8px);
    height: calc(100% - 10px);
    background-image: linear-gradient(145deg, #2575fc, #6a11cb);
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.5);
    transition: border-radius 0.2s, padding-top 0.2s;
    }

    .button-base {
    position: absolute;
    z-index: 0;
    top: 4px;
    left: 0;
    border-radius: 20px;
    width: 100%;
    height: calc(100% - 4px);
    background-color: rgba(0, 0, 0, 0.15);
    box-shadow: 0 1px 1px 0 rgba(255, 255, 255, 0.75),
        inset 0 2px 2px rgba(0, 0, 0, 0.25);
    transition: border-radius 0.2s, padding-top 0.2s;
    }

    .button-3d:active .button-bottom {
    border-radius: 10px 10px 8px 8px / 8px;
    padding-top: 0;
    }

    .button-3d:active .button-base {
    border-radius: 10px 10px 8px 8px / 8px;
    }
    @media all and (max-width: 440px) {
        .posts {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 16px;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        box-sizing: border-box;
        overflow: hidden;
        padding: 0px 10px;
    }
    }
</style>