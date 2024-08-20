<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="portfolio">
        <h3>Наши проекты</h3>
        <div class="projects">
            <div class="project" v-for="project in projects" :key="project.id">
                <img :src="project.photo">
                <p>{{ project.name }}</p>
                <span>{{ project.description }}</span>
                <a :href="project.link" target="_blank"><button>Перейти на сайт</button></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            projects: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
.portfolio {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
}
.portfolio h3 {
    font-size: 64px;
    font-weight: 900;
    line-height: 100%;
    color: rgba(56, 56, 56, 1);
    text-align: center;
}
.projects {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 32px;
    box-sizing: border-box;
}
.project {
    display: flex;
    width: calc(50% - 16px);
    position: relative;
    border-radius: 32px;
    box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    box-sizing: border-box;
}
.project img {
    width: 100%;
    object-fit: cover !important;
    box-sizing: border-box !important;
    filter: brightness(20%);
    transition: all 300ms ease-in-out;
}
.project p {
    position: absolute;
    top: 20%;
    left: 20%;
    transform: translate(-20%, -20%);
    color: beige;
    font-size: 32px;
    text-align: start;
    font-weight: 700;
    transition: all 300ms ease-in-out;
}
.project span {
    width: 80%;
    position: absolute;
    bottom: 0;
    left: 20%;
    transform: translate(-20%, -100%);
    color: beige;
    transition: all 300ms ease-in-out;
}
.project a {
    position: absolute;
    bottom: 5%;
    right: 5%;
}
.project button {
    width: auto;
    padding: 12px 32px;
    background: rgba(134, 126, 157, 1);
    border: none;
    border-radius: 32px;
    box-sizing: border-box;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
}
.project:hover button {
    background: rgba(186, 106, 216, 1);
}
.project:hover p {
    transform: translateY(-300%);
}
.project:hover span {
    transform: translateY(300%);
}
.project:hover img {
    filter: brightness(100%);
}
</style>