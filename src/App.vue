<template>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
  </router-view>
</template>

<script>

export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

.montserrat-my {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 100;
}
.montserrat-my {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
}
.montserrat-my {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
}
.montserrat-my {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
}
.montserrat-my {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
}
.montserrat-my {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-style: 600;
}
.montserrat-my {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
}
.montserrat-my {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 800;
}
.montserrat-my {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
}
#app {
  color: beige;
  font-family: "Montserrat", sans-serif;
  box-sizing: border-box;
  /* background: linear-gradient(#042454, #1f3577, #3d459c, #5f55c0, #8663e3); */
}
html,
body {
  margin: 0;
  padding: 0;
  background: #ffffff;
}
h2 {
    display: inline;
    font-size: inherit;
    margin: 0;
    font-weight: normal;
    unicode-bidi: normal;
}
h3 {
    display: inline;
    font-size: inherit;
    margin: 0;
    font-weight: normal;
    unicode-bidi: normal;
}
h4 {
    display: inline;
    font-size: inherit;
    margin: 0;
    font-weight: normal;
    unicode-bidi: normal;
}
h5 {
    display: inline;
    font-size: inherit;
    margin: 0;
    font-weight: normal;
    unicode-bidi: normal;
}
h6 {
    display: inline;
    font-size: inherit;
    margin: 0;
    font-weight: normal;
    unicode-bidi: normal;
}
p {
    display: inline;
    font-size: inherit;
    margin: 0;
    font-weight: normal;
    unicode-bidi: normal;
}
</style>
